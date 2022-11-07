import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { toast } from 'react-toastify';
import { AuthContext } from '../../Contexts/UserProvider';
import './Register.css';

const Register = () => {

    const {createUser} = useContext(AuthContext)

	const handleRegister = (event) => {
		event.preventDefault();
		const form = event.target;
		const name = form.name.value;
		const photoURL = form.photoURL.value;
		const email = form.email.value;
		const password = form.password.value;
        console.log(name, photoURL, email, password);
        
        createUser(email, password)
            .then(result => {
                const user = result.user;
                console.log(user);
                toast.success('Successfully registered')
        })

	};

	return (
		<div className="register-form">
			<section className="">
				<div className="container w-full max-w-md flex items-center justify-center min-h-screen px-6 mx-auto">
					<form onSubmit={handleRegister} className="w-full bg-gray-900 py-10 px-5 rounded-xl">
						<h1 className="text-3xl font-semibold text-center text-gray-700 dark:text-white">
							Register
						</h1>
						<div className="relative flex items-center mt-8">
							<span className="absolute">
								<svg
									xmlns="http://www.w3.org/2000/svg"
									className="w-6 h-6 mx-3 text-gray-300 dark:text-gray-500"
									fill="none"
									viewBox="0 0 24 24"
									stroke="currentColor"
									stroke-width="2">
									<path
										stroke-linecap="round"
										stroke-linejoin="round"
										d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"
									/>
								</svg>
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
								<svg
									xmlns="http://www.w3.org/2000/svg"
									className="w-6 h-6 mx-3 text-gray-300 dark:text-gray-500"
									fill="none"
									viewBox="0 0 24 24"
									stroke="currentColor"
									stroke-width="2">
									<path
										stroke-linecap="round"
										stroke-linejoin="round"
										d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"
									/>
								</svg>
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
								<svg
									xmlns="http://www.w3.org/2000/svg"
									className="w-6 h-6 mx-3 text-gray-300 dark:text-gray-500"
									fill="none"
									viewBox="0 0 24 24"
									stroke="currentColor"
									stroke-width="2">
									<path
										stroke-linecap="round"
										stroke-linejoin="round"
										d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
									/>
								</svg>
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
								<svg
									xmlns="http://www.w3.org/2000/svg"
									className="w-6 h-6 mx-3 text-gray-300 dark:text-gray-500"
									fill="none"
									viewBox="0 0 24 24"
									stroke="currentColor"
									strokeWidth="2">
									<path
										strokeLinecap="round"
										strokeLinejoin="round"
										d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z"
									/>
								</svg>
							</span>

							<input
								type="password"
								name="password"
								className="block w-full px-10 py-3 text-gray-700 bg-white border rounded-md dark:bg-gray-900 dark:text-gray-300 dark:border-gray-600 focus:border-blue-400 dark:focus:border-blue-300 focus:ring-blue-300 focus:outline-none focus:ring focus:ring-opacity-40"
								placeholder="Password"
							/>
						</div>

						<div className="mt-6">
							<button type='submit' className="w-full px-6 py-3 text-sm font-medium tracking-wide text-white  transition-colors duration-300 transform bg-blue-500 rounded-md hover:bg-blue-400 focus:outline-none focus:ring focus:ring-blue-300 focus:ring-opacity-50">
								Sign Up
							</button>

							<div className="mt-6 text-center ">
								<span className="text-blue-500 mr-3">Already have an account?</span>
								<Link to={'/login'} className="text-lg font-bold text-blue-400 hover:underline ">
									Login
								</Link>
							</div>
						</div>
					</form>
				</div>
			</section>
		</div>
	);
};

export default Register;
