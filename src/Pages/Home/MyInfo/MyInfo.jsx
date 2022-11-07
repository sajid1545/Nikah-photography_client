import React from 'react';

import banner from '../../../assets/images/b-2.jpg';

const MyInfo = () => {
	return (
		<div>
			<div className="flex items-center max-w-sm gap-3 mx-auto sm:max-w-full group hover:no-underline focus:no-underline lg:grid lg:grid-cols-12 text-white dark:bg-gray-900 my-10 p-20">
				<img
					src={banner}
					alt=""
					className="object-cover w-full h-64 rounded sm:h-96 lg:col-span-7 dark:bg-gray-500"
				/>
				<div className="p-6  lg:col-span-5 space-y-5">
					<h3 className="text-2xl font-semibold sm:text-4xl  bg-clip-text text-transparent bg-gradient-to-r from-pink-500 to-violet-500">
						MOMENT DRIVEN | FINE ART WEDDING PHOTOGRAPHY
					</h3>
					<p>
						Hello! If you're browsing my work, then that most likely means you're planning an Outer
						Banks Wedding. First off, congratulations on your engagement! Secondly, welcome to my
						site!
					</p>
				</div>
			</div>
		</div>
	);
};

export default MyInfo;
