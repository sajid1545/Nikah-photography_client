import React, { createContext, useEffect, useState } from 'react';
import {
	createUserWithEmailAndPassword,
	getAuth,
	GoogleAuthProvider,
	onAuthStateChanged,
	signInWithEmailAndPassword,
	signInWithPopup,
	signOut,
	updateProfile,
} from 'firebase/auth';
import app from './../Firebase/firebase.config';

export const AuthContext = createContext();

const auth = getAuth(app);

const UserProvider = ({ children }) => {
	const [user, setUser] = useState(null);
	const [loading, setLoading] = useState(true);
	const googleProvider = new GoogleAuthProvider();

	const createUser = (email, password) => {
		setLoading(true);
		return createUserWithEmailAndPassword(auth, email, password);
	};

	const login = (email, password) => {
		setLoading(true);

		return signInWithEmailAndPassword(auth, email, password);
	};

	const updateUserProfile = (profile) => {
		setLoading(true);
		return updateProfile(auth.currentUser, profile);
	};

	const googleSignIn = () => {
		setLoading(true);

		return signInWithPopup(auth, googleProvider);
	};

	const logOut = () => {
		setLoading(true);

		return signOut(auth);
	};

	useEffect(() => {
		const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
			setUser(currentUser);
			setLoading(false);
		});

		return () => {
			unsubscribe();
		};
	}, []);

	const authInfo = { createUser, updateUserProfile, user, login, googleSignIn, logOut, loading,setLoading };

	return <AuthContext.Provider value={authInfo}>{children}</AuthContext.Provider>;
};

export default UserProvider;
