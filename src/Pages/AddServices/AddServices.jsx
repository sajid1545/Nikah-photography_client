import React from 'react';
import { FaPhotoVideo, FaRegMoneyBillAlt } from 'react-icons/fa';

const AddServices = () => {
	const handleAddService = (event) => {
		event.preventDefault();
		const form = event.target;
	};

	return (
		<div className="max-w-[1000px] mx-auto ">
			<h1 className="text-5xl text-center mb-5 bg-clip-text text-transparent bg-gradient-to-r from-pink-500 to-purple-800 font-extrabold">
				Add Service
			</h1>
			<section className=" p-6 mx-auto bg-white rounded-md shadow-md dark:bg-gray-800">
				<form onSubmit={handleAddService}>
					<div className="grid grid-cols-1 gap-6 mt-4 sm:grid-cols-2">
						<div>
							<label className="text-gray-700 dark:text-gray-200">Service Name</label>
							<input
								type="text"
								name="eventTitle"
								required
								className="block w-full py-3 text-gray-700 bg-white border rounded-md px-11 dark:bg-gray-900 dark:text-gray-300 dark:border-gray-600 focus:border-blue-400 dark:focus:border-blue-300 focus:ring-blue-300 focus:outline-none focus:ring focus:ring-opacity-40"
							/>
						</div>

						{/* <div>
							<label className="text-gray-700 dark:text-gray-200">Price</label>
							<input
								type="number"
								name="price"
								required
								className="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-200 rounded-md dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-400 focus:ring-blue-300 focus:ring-opacity-40 dark:focus:border-blue-300 focus:outline-none focus:ring"
							/>
						</div> */}

						<div className="relative flex items-center mt-8">
							<span className="absolute">
								<FaRegMoneyBillAlt className="w-6 h-6 mx-3 text-gray-300 dark:text-gray-500" />
							</span>

							<input
								type="text"
								name="photoURL"
								className="block w-full py-3 text-gray-700 bg-white border rounded-md px-11 dark:bg-gray-900 dark:text-gray-300 dark:border-gray-600 focus:border-blue-400 dark:focus:border-blue-300 focus:ring-blue-300 focus:outline-none focus:ring focus:ring-opacity-40"
								placeholder="Price"
							/>
						</div>

						<div>
							<label className="text-gray-700 dark:text-gray-200">Description</label>
							<textarea
								type="text"
								name="description"
								required
								rows={5}
								className="block w-full py-3 text-gray-700 bg-white border rounded-md px-11 dark:bg-gray-900 dark:text-gray-300 dark:border-gray-600 focus:border-blue-400 dark:focus:border-blue-300 focus:ring-blue-300 focus:outline-none focus:ring focus:ring-opacity-40"
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

export default AddServices;
