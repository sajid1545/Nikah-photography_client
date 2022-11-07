import React from 'react';
import { useLoaderData } from 'react-router-dom';
import ServicesCard from './ServicesCard';

const Services = () => {
	const services = useLoaderData();

	return (
		<div className="my-10">
			<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 max-w-[1330px] mx-auto">
				{services.map((service) => (
					<ServicesCard key={service._id} service={service} />
				))}
			</div>
		</div>
	);
};

export default Services;
