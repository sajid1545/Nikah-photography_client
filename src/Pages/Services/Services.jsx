import React, { useContext, useEffect, useState } from 'react';
import { Triangle, Vortex } from 'react-loader-spinner';
import { useLoaderData } from 'react-router-dom';
import { AuthContext } from '../../Contexts/UserProvider';
import ServicesCard from './ServicesCard';
import { Helmet } from 'react-helmet-async';

const Services = () => {
	const { loading, setLoading } = useContext(AuthContext);
	// const services = useLoaderData();

	const [services, setServices] = useState([]);

	useEffect(() => {
		setLoading(true);
		fetch('https://assignment-11-server-pi.vercel.app/services')
			.then((res) => res.json())
			.then((data) => {
				setServices(data);
				setLoading(false);
			})
			.catch(() => {
				setLoading(false);
			});
	}, []);

	if (loading) {
		return (
			<div className="flex justify-center items-center h-screen">
				<Triangle
					height="200"
					width="200"
					color="#DC143C"
					ariaLabel="triangle-loading"
					wrapperStyle={{}}
					wrapperClassName=""
					visible={true}
				/>
			</div>
		);
	}

	return (
		<div className="my-16 md:mt-16  mt-[300px]">
			<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 max-w-[1330px] mx-auto">
				{services.map((service) => (
					<ServicesCard key={service._id} service={service} />
				))}
			</div>
			<Helmet>
				<title>Services - Nikah Photography</title>
			</Helmet>
		</div>
	);
};

export default Services;
