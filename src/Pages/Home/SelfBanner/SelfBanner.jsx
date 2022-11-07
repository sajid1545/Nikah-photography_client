import React from 'react';

import './SelfBanner.css';

const SelfBanner = () => {
	return (
		<div>
			<section class="overflow-hidden  bg-cover bg-center bg-no-repeat self-banner p-[10%] ">
				<div class=" p-8 md:p-12 lg:px-16 lg:py-24 text-center">
					<div class=" text-center sm:text-left">
						<h2 class="text-2xl text-center font-bold text-white sm:text-3xl md:text-5xl">LOVE FIERCELY</h2>

						<p class="hidden text-center text-white/90 md:mt-6 md:block md:text-lg md:leading-relaxed">
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
