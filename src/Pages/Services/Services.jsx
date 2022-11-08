import React, { useContext } from 'react';
import { Triangle, Vortex } from 'react-loader-spinner';
import { useLoaderData } from 'react-router-dom';
import { AuthContext } from '../../Contexts/UserProvider';
import ServicesCard from './ServicesCard';

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
