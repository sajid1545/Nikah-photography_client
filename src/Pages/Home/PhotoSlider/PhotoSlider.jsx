import React from 'react';
import AwesomeSlider from 'react-awesome-slider';
import withAutoplay from 'react-awesome-slider/dist/autoplay';
import 'react-awesome-slider/dist/custom-animations/cube-animation.css';
import 'react-awesome-slider/dist/styles.css';

import img1 from '../../../assets/images/w-1.jpg';
import img3 from '../../../assets/images/w-3.jpg';
import img4 from '../../../assets/images/w-4.jpg';
import img5 from '../../../assets/images/w-5.jpg';
import img6 from '../../../assets/images/w-6.jpg';

const AutoplaySlider = withAutoplay(AwesomeSlider);
const PhotoSlider = () => {
	return (
		<div className="p-0 md:p-28  rounded mx-auto">
			<AutoplaySlider
				animation="cubeAnimation"
				play={true}
				cancelOnInteraction={false}
				interval={5000}>
				<div data-src={img1} />
				<div data-src={img3} />
				<div data-src={img4} />
				<div data-src={img5} />
				<div data-src={img6} />
			</AutoplaySlider>
		</div>
	);
};

export default PhotoSlider;
