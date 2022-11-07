import React from 'react';
import MyInfo from '../MyInfo/MyInfo';
import MyPhotography from '../MyPhotography/MyPhotography';
import PhotoSlider from '../PhotoSlider/PhotoSlider';
import SelfBanner from '../SelfBanner/SelfBanner';

const Home = () => {
	return (
		<div>
			<SelfBanner />
			<PhotoSlider />
			<MyInfo />
			<MyPhotography />
		</div>
	);
};

export default Home;
