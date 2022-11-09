import React, { useContext, useEffect, useState } from 'react';
import { Triangle } from 'react-loader-spinner';
import { Link, useLoaderData } from 'react-router-dom';
import { AuthContext } from '../../../Contexts/UserProvider';
import ServicesCard from '../../Services/ServicesCard';

const HomeServices = () => {
	const { loading, setLoading } = useContext(AuthContext);

	// const services = useLoaderData();
	const [services, setServices] = useState([]);
	useEffect(() => {
		setLoading(true);
		fetch(`https://assignment-11-server-pi.vercel.app/limited-services`)
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
									strokeLinecap="round"
									strokeLinejoin="round"
									strokeWidth="2"
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
