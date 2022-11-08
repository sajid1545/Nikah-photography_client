import React from 'react';
import { Outlet, ScrollRestoration } from 'react-router-dom';
import Footer from '../Pages/Shared/Footer/Footer';
import Header from '../Pages/Shared/Header/Header';

const Main = () => {
	return (
		<div>
			<Header />
			<Outlet />
			<Footer />
			<ScrollRestoration />
		</div>
	);
};

export default Main;
