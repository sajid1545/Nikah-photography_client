import { RouterProvider } from 'react-router-dom';
import { ToastContainer } from 'react-toastify';
import './App.css';
import { router } from './Routes/Routes/routes';
import 'react-toastify/dist/ReactToastify.css';

import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect } from 'react';


function App() {
	useEffect(() => {
		AOS.init({
		  duration: 1000,
		});
	  });
	return (
		<div className="App">
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
