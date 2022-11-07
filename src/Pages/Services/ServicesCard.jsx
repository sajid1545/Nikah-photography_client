import React from 'react';
import { Link } from 'react-router-dom';

const ServicesCard = ({ service }) => {
	const { serviceName, image, price, _id, description } = service;

	return (
		<div>
			<div className="max-w-lg p-4 shadow-md dark:bg-gray-900 dark:text-gray-100 rounded-lg">
				<div className="space-y-4">
					<div className="space-y-2">
						<img
							src={image}
							alt=""
							className="block object-cover object-center w-full rounded-md h-72 dark:bg-gray-500"
						/>
					</div>
					<div className="space-y-5">
						<div>
							<h3 className="text-2xl font-bold dark:text-violet-400">{serviceName}</h3>
						</div>
						<div>
							<h3 className="text-xl font-semibold text-yellow-500">${price}</h3>
						</div>
						<p className="leading-snug dark:text-gray-400">
							{description.length > 100 ? description.slice(0, 100) + '...' : description}
						</p>
						<div>
							<Link to={`/services/${_id}`}>
								<button
									type="button"
									className="flex items-center justify-center w-full p-3 font-semibold tracking-wide rounded-md dark:bg-violet-400 hover:bg-violet-700 hover:text-white duration-500 dark:text-gray-900 ">
									Read more
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
