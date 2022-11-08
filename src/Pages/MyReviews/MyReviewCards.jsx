import React, { useEffect, useState } from 'react';

const MyReviewCards = ({ review }) => {
	console.log(review);

	const { serviceId, picture, name, email, text } = review.review;

	const [reviewedService, setReviewedService] = useState({});

	useEffect(() => {
		fetch(`https://assignment-11-server-pi.vercel.app/services/${serviceId}`)
			.then((res) => res.json())
			.then((data) => setReviewedService(data));
	}, [serviceId]);

	return (
		<div>
			<div className="card card-compact bg-[#111827] text-[#8AA3AF] shadow-xl flex justify-center items-center space-y-5">
				<figure>
					<img src={reviewedService.image} alt="photos" className="" />
				</figure>
				<div className="card-body space-y-5">
					<h2 className="text-center text-2xl">{reviewedService.serviceName}</h2>
					<p>{text}</p>

					<div>
						<div className="flex gap-5 justify-center my-5">
							<button
								class="group relative inline-block overflow-hidden border border-indigo-600 px-8 py-3 focus:outline-none focus:ring"
								href="/download">
								<span class="absolute inset-y-0 left-0 w-[2px] bg-indigo-600 transition-all group-hover:w-full group-active:bg-indigo-500"></span>

								<span class="relative text-sm font-medium text-indigo-600 transition-colors group-hover:text-white">
									Edit
								</span>
							</button>
							<button
								class="group relative inline-block overflow-hidden border border-red-600 px-8 py-3 focus:outline-none focus:ring"
								href="/download">
								<span class="absolute inset-x-0 bottom-0 h-[2px] bg-red-600 transition-all group-hover:h-full group-active:bg-red-500"></span>

								<span class="relative text-sm font-medium text-red-600 transition-colors group-hover:text-white">
									Delete
								</span>
							</button>
						</div>
					</div>

					<div className="flex justify-center gap-5 items-center">
						<div >
							<img
								alt=""
								className="w-12 h-12 rounded-full ring-2 ring-offset-4 dark:bg-gray-500 ring-violet-400 ring-offset-gray-800"
								src={picture}
							/>
						</div>
						<div>
							<p>{name}</p>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};

export default MyReviewCards;
