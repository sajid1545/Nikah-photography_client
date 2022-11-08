import React, { useContext, useEffect, useState } from 'react';
import { AuthContext } from './../../Contexts/UserProvider';
import MyReviewCards from './MyReviewCards';

const MyReviews = () => {
	const { user } = useContext(AuthContext);
	const [reviews, setReviews] = useState([]);

	useEffect(() => {
		fetch(`https://assignment-11-server-pi.vercel.app/my-reviews?email=${user?.email}`)
			.then((res) => res.json())
			.then((data) => setReviews(data));
	}, [user?.email]);

	return (
		<div>
			<h1>
				{reviews.length === 0 ? (
					<p>No reviews were Added</p>
				) : (
					<p className="text-4xl font-bold">
						<span className="bg-clip-text text-transparent bg-gradient-to-r from-pink-500 to-violet-500 font-extrabold">
							{user?.displayName}
						</span>{' '}
						have {reviews.length} reviews
					</p>
				)}
			</h1>

			<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 max-w-[1300px] mx-auto my-10 gap-10">
				{reviews.map((review) => (
					<MyReviewCards key={review._id} review={review} />
				))}
			</div>
		</div>
	);
};

export default MyReviews;
