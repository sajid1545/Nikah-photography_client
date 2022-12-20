import React, { useContext, useEffect, useState } from 'react';
import { Triangle, Vortex } from 'react-loader-spinner';
import { AuthContext } from '../../Contexts/UserProvider';
import ServicesCard from './ServicesCard';
import { Helmet } from 'react-helmet-async';

const Services = () => {
	const { loading, setLoading } = useContext(AuthContext);

	const [services, setServices] = useState([]);

	const [count, setCount] = useState(0);
	const [page, setPage] = useState(0);
	const [size, setSize] = useState(6);
	const pages = Math.ceil(count / size);

	useEffect(() => {
		setLoading(true);
		fetch(`https://assignment-11-server-pi.vercel.app/services?page=${page}&size=${size}`)
			.then((res) => res.json())
			.then((data) => {
				setServices(data.services);
				setCount(data.count);
				setLoading(false);
			})
			.catch(() => {
				setLoading(false);
			});
	}, [page, size]);

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
		<div className="my-16 lg:mt-16  mt-[300px]">
			<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 max-w-[1330px] mx-auto my-14">
				{services.map((service) => (
					<ServicesCard key={service._id} service={service} />
				))}
			</div>

			<div className="flex space-x-5 w-2/4 items-center  justify-center mx-auto my-5   space-y-0 flex-row ">
				{[...Array(pages).keys()].map((number) => (
					<button
						key={number}
						className={` inline-flex items-center justify-center w-12 h-12 text-lg border rounded shadow-md bg-gray-900 border-gray-800 text-white font-semibold ${
							page === number ? 'text-[#A78BFA] font-extrabold text-3xl' : ''
						}`}
						onClick={() => setPage(number)}>
						{number + 1}
					</button>
				))}
			</div>

			<Helmet>
				<title>Services - Nikah Photography</title>
			</Helmet>
		</div>
	);
};

export default Services;
