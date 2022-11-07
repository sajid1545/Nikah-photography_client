import React from 'react';
import { FaPhotoVideo, FaRegMoneyBillAlt } from 'react-icons/fa';
import { MdOutlineDescription, MdTextsms } from 'react-icons/md';
import { toast } from 'react-toastify';

const AddServices = () => {
	const handleAddService = (event) => {
		event.preventDefault();
		const form = event.target;
		const serviceName = form.serviceName.value;
		const price = form.price.value;
		const photoURL = form.photoURL.value;
		const description = form.description.value;

		const service = {
			serviceName,
			price,
			description,
			image: photoURL,
		};

		fetch('https://assignment-11-server-pi.vercel.app/services', {
			method: 'POST',
			headers: {
				'content-type': 'application/json',
			},
			body: JSON.stringify(service),
		})
			.then((res) => res.json())
			.then((data) => {
				if (data.acknowledged) {
					toast.success('Service Added successfully');
					form.reset();
				}
			});
	};

	return (
		<div className="max-w-[1000px] mx-auto ">
			<h1 className="text-5xl text-center mb-5 bg-clip-text text-transparent bg-gradient-to-r from-pink-500 to-purple-800 font-extrabold">
				Add Service
			</h1>
			<section className=" p-6 mx-auto bg-white rounded-md shadow-md dark:bg-gray-800">
				<form onSubmit={handleAddService}>
					<div className="grid grid-cols-1 gap-6 mt-4 sm:grid-cols-2">
						<div className="relative flex items-center mt-8">
							<span className="absolute">
								<MdTextsms className="w-6 h-6 mx-3 text-gray-300 dark:text-gray-500" />
							</span>
							<input
								type="text"
								name="serviceName"
								required
								className="block w-full py-3 text-gray-700 bg-white border rounded-md px-11 dark:bg-gray-900 dark:text-gray-300 dark:border-gray-600 focus:border-blue-400 dark:focus:border-blue-300 focus:ring-blue-300 focus:outline-none focus:ring focus:ring-opacity-40"
								placeholder="Service Name"
							/>
						</div>

						<div className="relative flex items-center mt-8">
							<span className="absolute">
								<FaRegMoneyBillAlt className="w-6 h-6 mx-3 text-gray-300 dark:text-gray-500" />
							</span>

							<input
								type="number"
								name="price"
								className="block w-full py-3 text-gray-700 bg-white border rounded-md px-11 dark:bg-gray-900 dark:text-gray-300 dark:border-gray-600 focus:border-blue-400 dark:focus:border-blue-300 focus:ring-blue-300 focus:outline-none focus:ring focus:ring-opacity-40"
								placeholder="Price"
							/>
						</div>

						<div className="relative flex items-center mt-8">
							<span className="absolute top-[12px]">
								<MdOutlineDescription className="w-6 h-6 mx-3 text-gray-300 dark:text-gray-500" />
							</span>
							<textarea
								type="text"
								name="description"
								required
								rows={5}
								className="block w-full py-3 text-gray-700 bg-white border rounded-md px-11 dark:bg-gray-900 dark:text-gray-300 dark:border-gray-600 focus:border-blue-400 dark:focus:border-blue-300 focus:ring-blue-300 focus:outline-none focus:ring focus:ring-opacity-40"
								placeholder="Description"
							/>
						</div>

						<div className="relative flex items-center mt-8">
							<span className="absolute">
								<FaPhotoVideo className="w-6 h-6 mx-3 text-gray-300 dark:text-gray-500" />
							</span>

							<input
								type="text"
								name="photoURL"
								required
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
