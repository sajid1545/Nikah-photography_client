import React from 'react';
import { PhotoProvider, PhotoView } from 'react-photo-view';

import self from '../../../assets/images/self-1.jpg';

const MyPhotography = () => {
	return (
		<div className="my-10">
			<h1 className="my-5 text-4xl font-extrabold bg-clip-text text-transparent bg-gradient-to-r from-pink-500 to-violet-500">
				About Your Photographer
			</h1>
			<div className="relative flex flex-col py-16 lg:pt-0 lg:flex-col lg:pb-0">
				<div className="flex flex-col items-start w-full max-w-xl px-4 mx-auto lg:px-8 lg:max-w-screen-xl">
					<div className="mb-16 lg:my-40 lg:max-w-lg lg:pr-5">
						<div className="max-w-xl mb-6">
							<h2 className="max-w-lg mb-6 font-sans text-3xl font-bold text-gray-900 sm:text-4xl sm:leading-none">
								Hey guys! I'm Sajid. I'm a photographer based in Chattogram, Bangladesh. I would
								love to create some magic with you!
							</h2>
							<p className="text-base text-gray-700 md:text-lg">
								I am here to bring your amazing, dreamy visions to life! But really guys, that's
								what I'm all about.I want to connect with you! This is my calling and I want you to
								be apart of it! Let's set you apart from the crowd with incredible concept ideas a
								gorgeous scenery and the perfect mood!
							</p>
						</div>
					</div>
				</div>
				<div className="inset-y-0 right-0 w-full max-w-xl px-4 mx-auto lg:pl-8 lg:pr-0 lg:mb-0 lg:mx-0 lg:w-1/2 lg:max-w-full lg:absolute xl:px-0">
					<PhotoProvider
						src={self}
						speed={() => 800}
						easing={(type) =>
							type === 2
								? 'cubic-bezier(0.36, 0, 0.66, -0.56)'
								: 'cubic-bezier(0.34, 1.56, 0.64, 1)'
						}>
						<PhotoView src={self}>
							<img
								src={self}
								alt="services"
								className="object-cover mx-auto h-56 rounded ring-2 ring-purple-500 ring-offset-4 ring-offset-slate-50  lg:rounded-full shadow-lg cursor-pointer  sm:h-96 lg:h-full"
							/>
						</PhotoView>
					</PhotoProvider>
				</div>
			</div>
		</div>
	);
};

export default MyPhotography;
