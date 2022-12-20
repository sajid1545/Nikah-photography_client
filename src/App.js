import { RouterProvider } from 'react-router-dom';
import { ToastContainer } from 'react-toastify';
import './App.css';
import { router } from './Routes/Routes/routes';
import 'react-toastify/dist/ReactToastify.css';

import AOS from 'aos';
import 'aos/dist/aos.css';
import { useEffect } from 'react';
import { motion, useScroll, useSpring } from 'framer-motion';

function App() {
	useEffect(() => {
		AOS.init({
			duration: 1000,
		});
	});

	const { scrollYProgress } = useScroll();
	const scaleX = useSpring(scrollYProgress, {
		stiffness: 100,
		damping: 30,
		restDelta: 0.001,
	});

	return (
		<div className="App relative">
			{/* <motion.div className="progress-bar" style={{ scaleX }}></motion.div> */}
			<ToastContainer
				position="top-center"
				autoClose={3000}
				hideProgressBar={false}
				newestOnTop
				closeOnClick
				rtl={false}
				pauseOnFocusLoss
				draggable
				pauseOnHover
				theme="dark"
			/>
			<RouterProvider router={router} />
		</div>
	);
}

export default App;
