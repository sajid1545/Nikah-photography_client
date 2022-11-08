import React, { useContext } from 'react';
import { Vortex } from 'react-loader-spinner';
import HomeServices from '../HomeServices/HomeServices';
import MyInfo from '../MyInfo/MyInfo';
import MyPhotography from '../MyPhotography/MyPhotography';
import PhotoSlider from '../PhotoSlider/PhotoSlider';
import SelfBanner from '../SelfBanner/SelfBanner';
import { AuthContext } from './../../../Contexts/UserProvider';

const Home = () => {
	const { loading } = useContext(AuthContext);

	if (loading) {
		return (
			<div className="flex justify-center items-center h-screen">
				<Vortex
					visible={true}
					height="100"
					width="100"
					ariaLabel="vortex-loading"
					wrapperStyle={{}}
					wrapperClass="vortex-wrapper"
					colors={['red', 'green', 'blue', 'yellow', 'orange', 'purple']}
				/>
			</div>
		);
	}

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
