import React from 'react';

import './SelfBanner.css';

const SelfBanner = () => {
	return (
		<div>
			<section className="overflow-hidden  bg-cover bg-center bg-no-repeat self-banner p-[15%] ">
				<div className=" p-8 md:p-12 lg:px-16 lg:py-24 text-center">
					<div className=" text-center sm:text-left">
						<h2 className="text-2xl text-center font-bold text-white sm:text-3xl md:text-5xl bg-clip-text text-transparent bg-gradient-to-r from-pink-500 to-purple-700">LOVE FIERCELY</h2>

						<p className="hidden text-center text-white/90 md:mt-6 md:block md:text-lg md:leading-relaxed">
							I LOVE working with couples who are genuinely seeking to create a beautiful and
							meaningful space in which they can be fully engaged in what matters most... spending
							time with the people they love. If that's you, Let's Talk!
						</p>
					</div>
				</div>
			</section>
		</div>
	);
};

export default SelfBanner;
