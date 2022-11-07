import React, { useContext } from 'react';
import { PhotoProvider, PhotoView } from 'react-photo-view';
import { useLoaderData } from 'react-router-dom';
import { AuthContext } from '../../Contexts/UserProvider';
import AddReviews from '../AddReviews/AddReviews';
import Reviews from './Reviews/Reviews';

const ServiceDetails = () => {
	const service = useLoaderData();
	const {user} = useContext(AuthContext)

	const { serviceName, image, price, _id, description } = service;

	return (
		<div>
			{/* service details */}
			<div className="max-w-[1200px] mx-auto my-10">
				<div className="card lg:card-side bg-gray-900 text-white shadow-xl shadow-gray-500">
					<figure className="px-24">
						<PhotoProvider
							src={image}
							speed={() => 800}
							easing={(type) =>
								type === 2
									? 'cubic-bezier(0.36, 0, 0.66, -0.56)'
									: 'cubic-bezier(0.34, 1.56, 0.64, 1)'
							}>
							<PhotoView src={image}>
								<img src={image} alt="services" className="w-96 h-60 cursor-pointer" />
							</PhotoView>
						</PhotoProvider>
					</figure>
					<div className="card-body">
						<h2 className="text-center text-3xl font-bold">{serviceName}</h2>
						<h1 className="text-lg font-bold text-yellow-500 md:text-xl">${price}</h1>
						<p>{description}</p>
					</div>
				</div>
			</div>

			<h1 className="text-3xl font-bold my-5">
				{' '}
				<span className="text-green-700">{serviceName}</span> Reviews
			</h1>

			{/* review section */}

			<div>
				{
					user?.email ? <AddReviews/> : <Reviews/>
				}
			</div>
		</div>
	);
};

export default ServiceDetails;
