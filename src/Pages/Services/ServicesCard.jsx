import React from 'react';
import { PhotoProvider, PhotoView } from 'react-photo-view';
import { Link } from 'react-router-dom';

const ServicesCard = ({ service }) => {
	const { serviceName, image, price, _id, description } = service;

	return (
		<div>
			<div  data-aos="zoom-out"  data-aos-duration="1500" className="max-w-lg p-4 shadow-md dark:bg-gray-900 dark:text-gray-100 rounded-lg ">
				<div className="space-y-4">
					<div className="space-y-2">
						<PhotoProvider
							src={image}
							speed={() => 800}
							easing={(type) =>
								type === 2
									? 'cubic-bezier(0.36, 0, 0.66, -0.56)'
									: 'cubic-bezier(0.34, 1.56, 0.64, 1)'
							}>
							<PhotoView src={image}>
								<img
									src={image}
									alt="services"
									className="block object-cover object-center w-full rounded-md h-72 dark:bg-gray-500 cursor-pointer"
								/>
							</PhotoView>
						</PhotoProvider>
					</div>
					<div className="space-y-5">
						<div>
							<h3 className="text-2xl font-bold dark:text-violet-400">{serviceName}</h3>
						</div>
						<div>
							<h3 className="text-xl font-semibold text-yellow-500">${price}</h3>
						</div>
						<p className="leading-snug dark:text-gray-400">
							{description.length > 90 ? description.slice(0, 90) + '...' : description}
						</p>
						<div>
							<Link to={`/services/${_id}`}>
								<button
									type="button"
									className="flex items-center justify-center w-full p-3 font-semibold tracking-wide rounded-md dark:bg-violet-400 hover:bg-violet-700 hover:text-white duration-500 dark:text-gray-900 ">
									View Details
								</button>
							</Link>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};

export default ServicesCard;
