import React from 'react';
import { FaPhotoVideo, FaRegMoneyBillAlt } from 'react-icons/fa';
import { MdOutlineDescription, MdTextsms } from 'react-icons/md';
import { toast } from 'react-toastify';

const AddReviews = () => {
	const handleAddReview = (event) => {
		event.preventDefault();
		const form = event.target;
		const userName = form.userName.value;
		const text = form.text.value;
		const photoURL = form.photoURL.value;

		const review = {
			name: userName,
			text,
			picture: photoURL,
		};
		console.log(review);

		fetch('http://localhost:5000/reviews', {
			method: 'POST',
			headers: {
				'content-type': 'application/json',
			},
			body: JSON.stringify(review),
		})
			.then((res) => res.json())
			.then((data) => {
				if (data.acknowledged) {
					toast.success('Review Added');
					form.reset();
				}
			});
	};

	return (
		<div className="max-w-[1000px] mx-auto my-10">
			<h1 className="text-5xl text-center mb-5 bg-clip-text text-transparent bg-gradient-to-r from-pink-500 to-purple-800 font-extrabold">
				Add Review
			</h1>
			<section className=" p-6 mx-auto bg-white rounded-md shadow-md dark:bg-gray-800">
				<form onSubmit={handleAddReview}>
					<div className="grid grid-cols-1 gap-6 mt-4 sm:grid-cols-2">
						<div className="relative flex items-center mt-8">
							<span className="absolute">
								<MdTextsms className="w-6 h-6 mx-3 text-gray-300 dark:text-gray-500" />
							</span>
							<input
								type="text"
								name="userName"
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
								className="block w-full py-3 text-gray-700 bg-white border rounded-md px-11 dark:bg-gray-900 dark:text-gray-300 dark:border-gray-600 focus:border-blue-400 dark:focus:border-blue-300 focus:ring-blue-300 focus:outline-none focus:ring focus:ring-opacity-40"
								placeholder="Photo URL"
							/>
						</div>
					</div>

					<div className="flex justify-end mt-6">
						<button
							type="submit"
							className="px-8 py-2.5 leading-5 text-white transition-colors duration-300 transform bg-gray-700 rounded-md hover:bg-gray-600 focus:outline-none focus:bg-gray-600">
							Add Service
						</button>
					</div>
				</form>
			</section>
		</div>
	);
};

export default AddReviews;
