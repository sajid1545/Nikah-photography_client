import React, { useContext } from 'react';
import { Helmet } from 'react-helmet-async';
import { FaPhotoVideo } from 'react-icons/fa';
import { MdOutlineDescription, MdTextsms } from 'react-icons/md';
import { Navigate, useLoaderData } from 'react-router-dom';
import { toast } from 'react-toastify';
import { AuthContext } from '../../Contexts/UserProvider';

const UpdateReview = () => {
	const { user } = useContext(AuthContext);

	const review = useLoaderData();

	const { serviceId, picture, name, email, text } = review.review;

	const { _id } = review;

	const handleUpdateReview = (event) => {
		event.preventDefault();
		const form = event.target;
		const userName = form.userName.value;
		const text = form.text.value;
		const photoURL = form.photoURL.value;

		const review = {
			name: userName,
			text,
			picture: photoURL,
			serviceId,
			email: user?.email,
		};

		fetch(`https://assignment-11-server-pi.vercel.app/reviews/${_id}`, {
			method: 'PATCH',
			headers: {
				'content-type': 'application/json',
			},
			body: JSON.stringify(review),
		})
			.then((res) => res.json())
			.then((data) => {
				if (data.modifiedCount > 0) {
					toast.success('Updated Successfully');
				}
			});
			
		};

	return (
		<div className="md:mt-16  mt-[300px] my-16">
			<section className="max-w-[1200px] p-6 mx-auto bg-white rounded-md shadow-md dark:bg-gray-800">
				<form onSubmit={handleUpdateReview}>
					<div className="">
						<div className="relative flex items-center mt-8">
							<span className="absolute">
								<MdTextsms className="w-6 h-6 mx-3 text-gray-300 dark:text-gray-500" />
							</span>
							<input
								type="text"
								name="userName"
								defaultValue={name}
								required
								className="block w-full py-3 text-gray-700 bg-white border rounded-md px-11 dark:bg-gray-900 dark:text-gray-300 dark:border-gray-600 focus:border-blue-400 dark:focus:border-blue-300 focus:ring-blue-300 focus:outline-none focus:ring focus:ring-opacity-40"
								placeholder="User Name"
							/>
						</div>

						<div className="relative flex items-center mt-8">
							<span className="absolute top-[12px]">
								<MdOutlineDescription className="w-6 h-6 mx-3 text-gray-300 dark:text-gray-500" />
							</span>
							<textarea
								type="text"
								name="text"
								defaultValue={text}
								required
								className="block w-full py-3 text-gray-700 bg-white border rounded-md px-11 dark:bg-gray-900 dark:text-gray-300 dark:border-gray-600 focus:border-blue-400 dark:focus:border-blue-300 focus:ring-blue-300 focus:outline-none focus:ring focus:ring-opacity-40"
								placeholder="Your Review"
							/>
						</div>

						<div className="relative flex items-center mt-8">
							<span className="absolute">
								<FaPhotoVideo className="w-6 h-6 mx-3 text-gray-300 dark:text-gray-500" />
							</span>

							<input
								type="text"
								name="photoURL"
								defaultValue={picture}
								className="block w-full py-3 text-gray-700 bg-white border rounded-md px-11 dark:bg-gray-900 dark:text-gray-300 dark:border-gray-600 focus:border-blue-400 dark:focus:border-blue-300 focus:ring-blue-300 focus:outline-none focus:ring focus:ring-opacity-40"
								placeholder="Photo URL"
							/>
						</div>
					</div>

					<div className="flex justify-end mt-6">
						<button
							type="submit"
							className="px-12 mt-5 py-2.5 leading-5 text-white transition-colors duration-300 transform bg-gray-700 rounded-md hover:bg-gray-600 focus:outline-none focus:bg-gray-600 mx-auto">
							Update Review
						</button>
					</div>
				</form>
			</section>
			<Helmet>
				<title>Update Review - Nikah Photography</title>
			</Helmet>
		</div>
	);
};

export default UpdateReview;
