import React, { createContext, useEffect, useState } from 'react';
import {
	createUserWithEmailAndPassword,
	getAuth,
	onAuthStateChanged,
	updateProfile,
} from 'firebase/auth';
import app from './../Firebase/firebase.config';

export const AuthContext = createContext();

const auth = getAuth(app);

const UserProvider = ({ children }) => {
    const [user, setUser] = useState(null);
    const [loading, setLoading] = useState(true);

	const createUser = (email, password) => {
		return createUserWithEmailAndPassword(auth, email, password);
	};

	const updateUserProfile = (profile) => {
		return updateProfile(auth.currentUser, profile);
	};

	useEffect(() => {
		const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
			setUser(currentUser);
		});
	}, []);

	const authInfo = { createUser, updateUserProfile };

	return <AuthContext.Provider value={authInfo}>{children}</AuthContext.Provider>;
};

export default UserProvider;
