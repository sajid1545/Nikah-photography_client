import React, { useContext, useEffect, useState } from 'react';
import { FaEdit, FaTrash } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import UpdateReview from '../UpdateReview/UpdateReview';
import { AuthContext } from './../../Contexts/UserProvider';

const MyReviewCards = ({ review,handleDeleteReview }) => {
	const { user } = useContext(AuthContext);
	const { serviceId, picture, name, email, text } = review.review;

	const [reviewedService, setReviewedService] = useState({});

	const {_id} = review;

	useEffect(() => {
		fetch(`https://assignment-11-server-pi.vercel.app/services/${serviceId}`)
			.then((res) => res.json())
			.then((data) => setReviewedService(data));
	}, [serviceId]);

	return (
		<div>
			<div className="card card-compact bg-[#111827] text-[#8AA3AF] shadow-xl flex justify-center items-center space-y-5  shadow-purple-500 h-[600px]">
				<figure>
					<img src={reviewedService.image} alt="photos" className="" />
				</figure>
				<div className="card-body space-y-5">
					<h2 className="text-center text-2xl">{reviewedService.serviceName}</h2>
					<p>{text}</p>

					<div>
						<div className="flex gap-5 justify-center my-5">
							
							<Link to={`/update-review/${_id}`}>
								<button
									className="group relative inline-block overflow-hidden border border-indigo-600 px-10 py-3 focus:outline-none focus:ring"
									href="/download">
									<span className="absolute inset-y-0 left-0 w-[2px] bg-indigo-600 transition-all group-hover:w-full group-active:bg-indigo-500"></span>

									<span className="relative text-sm font-medium text-indigo-600 transition-colors group-hover:text-white flex items-center gap-3">
										<FaEdit /> <span>Edit</span>
									</span>
								</button>
							</Link>
							<button
								onClick={()=> handleDeleteReview(review._id)}
								className="group relative inline-block overflow-hidden border border-red-600 px-10 py-3 focus:outline-none focus:ring"
								href="/download">
								<span className="absolute inset-x-0 bottom-0 h-[2px] bg-red-600 transition-all group-hover:h-full group-active:bg-red-500"></span>

								<span className="relative text-sm font-medium text-red-600 transition-colors group-hover:text-white flex items-center gap-3">
									<FaTrash /> <span>Delete</span>
								</span>
							</button>
						</div>
					</div>

					<div className="flex justify-center gap-5 items-center">
						<div>
							<img
								alt=""
								className="w-12 h-12 rounded-full ring-2 ring-offset-4 dark:bg-gray-500 ring-violet-400 ring-offset-gray-800"
								src={picture}
							/>
						</div>
						<div>
							<p>{name || user?.displayName}</p>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};

export default MyReviewCards;
