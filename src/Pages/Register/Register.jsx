import React, { useContext } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';
import { AuthContext } from '../../Contexts/UserProvider';
import './Register.css';
import { FaGoogle, FaUserAlt, FaPhotoVideo, FaLock } from 'react-icons/fa';
import { AiOutlineMail } from 'react-icons/ai';
import { setAuthToken } from '../../API/CreateJWTtoken';
import { Helmet } from 'react-helmet-async';

const Register = () => {
	const { createUser, updateUserProfile, googleSignIn } = useContext(AuthContext);

	const navigate = useNavigate();
	const location = useLocation();
	let from = location.state?.from?.pathname || '/';

	const handleRegister = (event) => {
		event.preventDefault();
		const form = event.target;
		const name = form.name.value;
		const photoURL = form.photoURL.value;
		const email = form.email.value;
		const password = form.password.value;

		createUser(email, password)
			.then((result) => {
				const user = result.user;
				handleUpdateProfile(name, photoURL);
				const currentUser = {
					email: user?.email,
				};
				navigate(from, { replace: true });
				toast.success('Successfully registered');
				setAuthToken(currentUser);
			})
			.catch((err) => {
				console.log(err);
				toast.error(err.message);
			});
	};

	const handleGoogleSignIn = () => {
		googleSignIn()
			.then((result) => {
				const user = result.user;
				
				setAuthToken(user);

				navigate(from, { replace: true });
				toast.success('Logged In');
			})
			.catch((err) => {
				console.log(err);
				toast.error(err.message);
			});
	};

	const handleUpdateProfile = (name, photoURL) => {
		const profile = {
			displayName: name,
			photoURL: photoURL,
		};
		updateUserProfile(profile)
			.then(() => {})
			.catch((err) => {
				console.log(err);
				toast.error(err.message);
			});
	};

	return (
		<div className="register-form ">
			<section className="">
				<div className="container w-full max-w-md flex items-center justify-center min-h-screen px-6 mx-auto">
					<form onSubmit={handleRegister} className="w-full bg-gray-900 py-10 px-5 rounded-xl">
						<h1 className="text-3xl font-semibold text-center text-gray-700 dark:text-white">
							Register
						</h1>
						<div className="relative flex items-center mt-8">
							<span className="absolute">
								<FaUserAlt className="w-6 h-6 mx-3 text-gray-300 dark:text-gray-500" />
							</span>

							<input
								type="text"
								name="name"
								className="block w-full py-3 text-gray-700 bg-white border rounded-md px-11 dark:bg-gray-900 dark:text-gray-300 dark:border-gray-600 focus:border-blue-400 dark:focus:border-blue-300 focus:ring-blue-300 focus:outline-none focus:ring focus:ring-opacity-40"
								placeholder="Full Name"
							/>
						</div>
						<div className="relative flex items-center mt-8">
							<span className="absolute">
								<FaPhotoVideo className="w-6 h-6 mx-3 text-gray-300 dark:text-gray-500" />
							</span>

							<input
								type="text"
								name="photoURL"
								className="block w-full py-3 text-gray-700 bg-white border rounded-md px-11 dark:bg-gray-900 dark:text-gray-300 dark:border-gray-600 focus:border-blue-400 dark:focus:border-blue-300 focus:ring-blue-300 focus:outline-none focus:ring focus:ring-opacity-40"
								placeholder="Photo URL"
							/>
						</div>

						<div className="relative flex items-center mt-6">
							<span className="absolute">
								<AiOutlineMail className="w-6 h-6 mx-3 text-gray-300 dark:text-gray-500" />
							</span>

							<input
								type="email"
								name="email"
								className="block w-full py-3 text-gray-700 bg-white border rounded-md px-11 dark:bg-gray-900 dark:text-gray-300 dark:border-gray-600 focus:border-blue-400 dark:focus:border-blue-300 focus:ring-blue-300 focus:outline-none focus:ring focus:ring-opacity-40"
								placeholder="Email address"
							/>
						</div>

						<div className="relative flex items-center mt-4">
							<span className="absolute">
								<FaLock className="w-6 h-6 mx-3 text-gray-300 dark:text-gray-500" />
							</span>

							<input
								type="password"
								name="password"
								className="block w-full px-10 py-3 text-gray-700 bg-white border rounded-md dark:bg-gray-900 dark:text-gray-300 dark:border-gray-600 focus:border-blue-400 dark:focus:border-blue-300 focus:ring-blue-300 focus:outline-none focus:ring focus:ring-opacity-40"
								placeholder="Password"
							/>
						</div>

						<div className="mt-6">
							<button
								type="submit"
								className="w-full px-6 py-3 text-sm font-medium tracking-wide text-white  transition-colors duration-300 transform bg-blue-500 rounded-md hover:bg-blue-400 focus:outline-none focus:ring focus:ring-blue-300 focus:ring-opacity-50">
								Sign Up
							</button>

							<div className="mt-6 text-center ">
								<span className="text-blue-500 mr-3">Already have an account?</span>
								<Link to={'/login'} className="text-lg font-bold text-blue-400 hover:underline ">
									Login
								</Link>
							</div>
						</div>
						<div className="flex items-center justify-between mt-4">
							<span className="w-1/5 border-b dark:border-gray-600 lg:w-1/5"></span>

							<span className="text-xs text-center text-gray-500 uppercase dark:text-gray-400 hover:underline">
								or login with Social Media
							</span>

							<span className="w-1/5 border-b dark:border-gray-400 lg:w-1/5"></span>
						</div>

						<div className="flex items-center mt-6 -mx-2">
							<button
								type="button"
								onClick={handleGoogleSignIn}
								className="flex items-center justify-center w-full px-6 py-2 mx-2 text-sm font-medium text-white transition-colors  transform bg-blue-500 rounded-md hover:bg-blue-400 duration-500 focus:bg-blue-400 focus:outline-none">
								<FaGoogle className="w-4 h-4 mx-2 fill-current" />
								<span className="hidden mx-2 sm:inline">Sign in with Google</span>
							</button>
						</div>
					</form>
				</div>
			</section>
			<Helmet>
				<title>Register - Nikah Photography</title>
			</Helmet>
		</div>
	);
};

export default Register;
