import React, { useContext } from 'react';
import { Vortex } from 'react-loader-spinner';
import { Navigate, useLocation } from 'react-router-dom';
import { AuthContext } from '../../Contexts/UserProvider';

const PrivateRoute = ({ children }) => {
	const { user, loading } = useContext(AuthContext);

	const location = useLocation();

	if (loading) {
		return (
			<div className="flex justify-center items-center h-screen">
				<Vortex
					visible={true}
					height="100"
					width="100"
					ariaLabel="vortex-loading"
					wrapperStyle={{}}
					wrapperClass="vortex-wrapper"
					colors={['red', 'green', 'blue', 'yellow', 'orange', 'purple']}
				/>
			</div>
		);
	}

	if (user) {
		return children;
	}

	return <Navigate to="/login" state={{ from: location }} replace />;
};

export default PrivateRoute;
