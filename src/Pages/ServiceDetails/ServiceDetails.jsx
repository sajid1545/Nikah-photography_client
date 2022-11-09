import React, { useContext, useEffect, useState } from 'react';
import { PhotoProvider, PhotoView } from 'react-photo-view';
import { Link, useLoaderData, useLocation, useNavigate } from 'react-router-dom';
import { AuthContext } from '../../Contexts/UserProvider';
import AddReviews from '../AddReviews/AddReviews';
import Reviews from './Reviews/Reviews';
import { Helmet } from 'react-helmet-async';
import { RotatingTriangles } from 'react-loader-spinner';

const ServiceDetails = () => {
	const service = useLoaderData();
	const { user, loading, setLoading } = useContext(AuthContext);
	const { serviceName, image, price, _id, description } = service;

	const navigate = useNavigate();
	const location = useLocation();
	let from = location.state?.from?.pathname || '/';

	const [reviews, setReviews] = useState([]);

	const [refresh, setRefresh] = useState(false);

	useEffect(() => {
		setLoading(true);

		fetch(`https://assignment-11-server-pi.vercel.app/reviews?service=${_id}`)
			.then((res) => res.json())
			.then((data) => {
				setReviews(data);
				setLoading(false);
			})
			.catch(() => {
				setLoading(false);
			});
	}, [_id, refresh,setLoading]);


	if (loading) {
		return (
			<div className="flex justify-center items-center h-screen">
				<RotatingTriangles
					visible={true}
					height="180"
					width="180"
					ariaLabel="rotating-triangels-loading"
					wrapperStyle={{}}
					wrapperClass="rotating-triangels-wrapper"
				/>
			</div>
		);
	}

	return (
		<div className="lg:mt-0  mt-[300px]">
			{/* service details */}
			<div className="max-w-[1200px] mx-auto my-10  ">
				<div className="card lg:card-side bg-slate-800 text-white  shadow-[5px_5px_rgba(0,_98,_90,_0.4),_10px_10px_rgba(0,_98,_90,_0.3),_15px_15px_rgba(0,_98,_90,_0.2),_20px_20px_rgba(0,_98,_90,_0.1),_25px_25px_rgba(0,_98,_90,_0.05)]">
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
					<h1 className="text-2xl font-bold my-14">
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
							<AddReviews service={service} setRefresh={setRefresh} />
						) : (
							<>
								<p className="text-2xl font-bold my-3">Please Login to add a Review</p>

								<Link to="/login" state={{ from: location }} replace>
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
			<Helmet>
				<title>ServiceDetails - Nikah Photography</title>
			</Helmet>
		</div>
	);
};

export default ServiceDetails;
