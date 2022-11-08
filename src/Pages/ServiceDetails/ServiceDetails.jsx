import React, { useContext, useEffect, useState } from 'react';
import { PhotoProvider, PhotoView } from 'react-photo-view';
import { Link, useLoaderData } from 'react-router-dom';
import { AuthContext } from '../../Contexts/UserProvider';
import AddReviews from '../AddReviews/AddReviews';
import Reviews from './Reviews/Reviews';

const ServiceDetails = () => {
	const service = useLoaderData();
	const { user} = useContext(AuthContext);
	const { serviceName, image, price, _id, description } = service;

	const [reviews, setReviews] = useState([]);

	useEffect(() => {
		fetch(`https://assignment-11-server-pi.vercel.app/reviews?service=${_id}`)
			.then((res) => res.json())
			.then((data) => setReviews(data));
	}, [_id]);
	

	return (
		<div className='md:mt-0  mt-[300px]'>
			{/* service details */}
			<div className="max-w-[1200px] mx-auto my-10 ">
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
								<img src={image} alt="services" className="w-96 h-[300px] cursor-pointer" />
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
				{reviews.length === 0 ? (
					<h1 className="text-4xl font-bold my-5">
						{' '}
						<span className="text-red-500">No reviews Available</span> for {serviceName}
					</h1>
				) : (
					<div className="max-w-[1200px] mx-auto">
						{reviews.map((review) => (
							<Reviews review={review} key={review._id} />
						))}
					</div>
				)}

				{_id ? (
					<>
						{user?.email ? (
							<AddReviews service={service} />
						) : (
							<>
								<p className="text-2xl font-bold my-3">Please Login to add a Review</p>

								<Link to={'/login'}>
									<button className="group relative inline-block text-sm font-medium text-indigo-600 mb-10 focus:outline-none focus:ring active:text-indigo-500">
										<span className="absolute inset-0 translate-x-0.5 translate-y-0.5 bg-indigo-600 transition-transform group-hover:translate-y-0 group-hover:translate-x-0"></span>

										<span className="relative block border border-current bg-white px-16 py-3">
											Login
										</span>
									</button>
								</Link>
							</>
						)}
					</>
				) : (
					<h1>No review</h1>
				)}
			</div>
		</div>
	);
};

export default ServiceDetails;
