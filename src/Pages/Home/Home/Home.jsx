import React, { useContext } from 'react';
import { Vortex } from 'react-loader-spinner';
import HomeServices from '../HomeServices/HomeServices';
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
			<HomeServices />
			<MyPhotography />
		</div>
	);
};

export default Home;
