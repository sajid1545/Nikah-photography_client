import React, { useContext } from 'react';
import { Triangle, Vortex } from 'react-loader-spinner';
import { useLoaderData } from 'react-router-dom';
import { AuthContext } from '../../Contexts/UserProvider';
import ServicesCard from './ServicesCard';
import { Helmet } from 'react-helmet-async';

const Services = () => {
	const { loading } = useContext(AuthContext);
	const services = useLoaderData();

	if (loading) {
		return (
			<div className="flex justify-center items-center h-screen">
				<Triangle
					height="100"
					width="100"
					color="#4fa94d"
					ariaLabel="triangle-loading"
					wrapperStyle={{}}
					wrapperClassName=""
					visible={true}
				/>
			</div>
		);
	}

	return (
		<div className="my-10 md:mt-0  mt-[300px]">
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
