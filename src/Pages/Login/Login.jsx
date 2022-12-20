import React, { useContext, useState } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { AuthContext } from '../../Contexts/UserProvider';
import './Login.css';
import { toast } from 'react-toastify';
import { FaGoogle } from 'react-icons/fa';
import { setAuthToken } from '../../API/CreateJWTtoken';
import { Helmet } from 'react-helmet-async';

const Login = () => {
	const { login, googleSignIn, loading, setLoading } = useContext(AuthContext);

	const navigate = useNavigate();
	const location = useLocation();
	let from = location.state?.from?.pathname || '/';
	const [loginError, setLoginError] = useState('');

	const handleLogin = (event) => {
		event.preventDefault();

		const form = event.target;
		const email = form.email.value;
		const password = form.password.value;

		login(email, password)
			.then((result) => {
				setLoading(true);

				const user = result.user;
				const currentUser = {
					email: user?.email,
				};

				fetch('https://assignment-11-server-pi.vercel.app/jwt', {
					method: 'POST',
					headers: {
						'content-type': 'application/json',
					},
					body: JSON.stringify(currentUser),
				})
					.then((res) => res.json())
					.then((data) => {
						console.log(data.token);
						localStorage.setItem('photo-token', data.token);
						toast.success('Logged In');
						navigate(from, { replace: true });
						form.reset();
					})
					.catch((err) => {
						toast.error(err.message);
						setLoginError(err.message);
					});
			})
			.catch((err) => {
				console.log(err);
				toast.error(err.message);
				setLoading(false);
				setLoginError(err.message);
			});
	};

	const handleGoogleSignIn = () => {
		googleSignIn()
			.then((result) => {
				const user = result.user;

				setAuthToken(user);

				toast.success('Logged In');
				navigate(from, { replace: true });
			})
			.catch((err) => {
				console.log(err);
				toast.error(err.message);
				setLoginError(err.message);
			});
	};

	return (
		<div className="login-form min-h-screen flex items-center">
			<div className="w-full max-w-md p-6 m-auto mx-auto   rounded-md shadow-md bg-gray-800">
				<h1 className="text-5xl font-semibold text-center  text-white">Login</h1>
				<h1 className="text-2xl font-bold mt-10 text-center  text-red-600">
					{loginError ? loginError : ''}
				</h1>

				<form onSubmit={handleLogin} className="mt-6 w-full  ">
					<div>
						<label className="block text-left text-sm  text-gray-200">Email</label>
						<input
							type="text"
							name="email"
							className="block w-full px-4 py-2 mt-2   border rounded-md bg-gray-800 text-gray-300 border-gray-600  focus:border-blue-300 focus:ring-blue-300 focus:outline-none focus:ring focus:ring-opacity-40"
						/>
					</div>

					<div className="mt-4">
						<div className="flex items-center justify-between">
							<label className="block text-sm  text-gray-200">Password</label>
						</div>

						<input
							type="password"
							name="password"
							className="block w-full px-4 py-2 mt-2   border rounded-md bg-gray-800 text-gray-300 border-gray-600  focus:border-blue-300 focus:ring-blue-300 focus:outline-none focus:ring focus:ring-opacity-40"
						/>
					</div>

					<div className="mt-6">
						<button
							type="submit"
							className="w-full px-6 py-3 text-sm font-medium tracking-wide text-white  transition-colors duration-300 transform bg-blue-500 rounded-md hover:bg-blue-400 focus:outline-none focus:ring focus:ring-blue-300 focus:ring-opacity-50">
							{loading ? (
								<div className="w-6 h-6 mx-auto  border-4 border-dashed rounded-full animate-spin border-red-600"></div>
							) : (
								'Login'
							)}
						</button>
					</div>
				</form>

				<div className="flex items-center justify-between mt-4">
					<span className="w-1/5 border-b border-gray-600 lg:w-1/5"></span>

					<span className="text-xs text-center  uppercase text-gray-400 hover:underline">
						or login with Social Media
					</span>

					<span className="w-1/5 border-b border-gray-400 lg:w-1/5"></span>
				</div>

				<div className="flex items-center mt-6 -mx-2">
					<button
						// type="button"
						onClick={handleGoogleSignIn}
						className="flex items-center justify-center w-full px-6 py-2 mx-2 text-sm font-medium text-white transition-colors  transform bg-blue-500 rounded-md hover:bg-blue-400 duration-500 focus:bg-blue-400 focus:outline-none">
						<FaGoogle className="w-4 h-4 mx-2 fill-current" />
						<span className="hidden mx-2 sm:inline">Sign in with Google</span>
					</button>
				</div>

				<p className="mt-8 text-xs font-light text-center text-gray-400">
					{' '}
					Don't have an account?{' '}
					<Link to={'/register'} className="font-medium  text-gray-200 hover:underline">
						Create One
					</Link>
				</p>
			</div>
			<Helmet>
				<title>Login - Nikah Photography</title>
			</Helmet>
		</div>
	);
};

export default Login;
