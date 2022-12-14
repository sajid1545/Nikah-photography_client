import React, { useContext, useEffect, useState } from 'react';
import { AuthContext } from './../../Contexts/UserProvider';
import MyReviewCards from './MyReviewCards';

import { toast } from 'react-toastify';
import { Helmet } from 'react-helmet-async';
import { Vortex } from 'react-loader-spinner';

const MyReviews = () => {
	const { user, logOut } = useContext(AuthContext);
	const [reviews, setReviews] = useState([]);

	const [load, setLoad] = useState(true);

	useEffect(() => {
		setLoad(true);
		fetch(`https://assignment-11-server-pi.vercel.app/my-reviews?email=${user?.email}`, {
			headers: {
				authorization: `Bearer ${localStorage.getItem('photo-token')}`,
			},
		})
			.then((res) => {
				if (res.status === 401 || res.status === 403) {
					return logOut();
				}

				return res.json();
			})
			.then((data) => {
				setReviews(data);
				setLoad(false);
			})
			.catch((err) => {
				toast.error(err.message);
			});
	}, [user?.email, logOut]);

	if (load) {
		return (
			<div className="flex justify-center items-center h-screen">
				<Vortex
					visible={true}
					height="150"
					width="150"
					ariaLabel="vortex-loading"
					wrapperStyle={{}}
					wrapperClass="vortex-wrapper"
					colors={['red', 'green', 'blue', 'yellow', 'orange', 'purple']}
				/>
			</div>
		);
	}

	const handleDeleteReview = (_id) => {
		const agree = window.confirm('Are you sure you want to delete this review');
		console.log(_id);
		if (agree) {
			fetch(`https://assignment-11-server-pi.vercel.app/reviews/${_id}`, {
				method: 'DELETE',
				headers: {
					authorization: `Bearer ${localStorage.getItem('photo-token')}`,
				},
			})
				.then((res) => res.json())
				.then((data) => {
					if (data.deletedCount > 0) {
						toast.success('deleted successfully');
						const remaining = reviews.filter((review) => review._id !== _id);
						setReviews(remaining);
					}
				});
		}
	};

	return (
		<div className="lg:mt-0  mt-[300px]">
			<h1>
				{reviews.length !== 0 ? (
					<p className="text-4xl font-bold my-10">
						<span className="bg-clip-text text-transparent bg-gradient-to-r from-pink-500 to-violet-500 font-extrabold uppercase ">
							{user?.displayName}
						</span>{' '}
						have given {reviews.length} reviews
					</p>
				) : (
					<p className="text-5xl font-extrabold flex items-center min-h-screen justify-center bg-clip-text text-transparent bg-gradient-to-l from-red-500 to-red-800 my-10">
						No reviews were Added by {user?.displayName}
					</p>
				)}
			</h1>

			<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 max-w-[1300px] mx-auto my-10 gap-10">
				{reviews.map((review) => (
					<MyReviewCards key={review._id} review={review} handleDeleteReview={handleDeleteReview} />
				))}
			</div>
			<Helmet>
				<title>My Reviews - Nikah Photography</title>
			</Helmet>
		</div>
	);
};

export default MyReviews;
