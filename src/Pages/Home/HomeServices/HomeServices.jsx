import React from 'react';
import { Link, useLoaderData } from 'react-router-dom';
import ServicesCard from '../../Services/ServicesCard';

const HomeServices = () => {
	const services = useLoaderData();

	return (
		<div className="space-y-5">
			<h1 className="text-5xl my-5 font-bold">My Services</h1>

			<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 max-w-[1330px] mx-auto">
				{services.map((service) => (
					<ServicesCard key={service._id} service={service} />
				))}
			</div>

			<div>
				<Link to={'/services'}>
					<button className="group relative inline-flex items-center overflow-hidden rounded bg-gradient-to-b from-gray-900 via-purple-900 to-violet-600 px-14 py-4 text-white focus:outline-none focus:ring active:bg-indigo-500">
						<span className="absolute right-0 translate-x-full transition-transform group-hover:-translate-x-4">
							<svg
								className="h-5 w-5"
								xmlns="http://www.w3.org/2000/svg"
								fill="none"
								viewBox="0 0 24 24"
								stroke="currentColor">
								<path
									stroke-linecap="round"
									stroke-linejoin="round"
									stroke-width="2"
									d="M17 8l4 4m0 0l-4 4m4-4H3"
								/>
							</svg>
						</span>

						<span className="text-sm font-medium transition-all group-hover:mr-4">See All</span>
					</button>
				</Link>
			</div>
		</div>
	);
};

export default HomeServices;
