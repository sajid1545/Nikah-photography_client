import React from 'react';
import { FaFacebook, FaGithub, FaTwitter } from 'react-icons/fa';
import logo from '../../../assets/images/logo-wed.jpg';

const Footer = () => {
	return (
		<div>
			<footer className="flex flex-col items-center justify-between p-20 bg-white dark:bg-gray-900 sm:flex-row">
				<div className="flex flex-col items-center space-y-4">
					<img
						src={logo}
						alt="logo"
						className="text-xl font-bold text-gray-600 transition-colors duration-300 dark:text-white hover:text-gray-700 dark:hover:text-gray-300 w-20 rounded-full"
					/>
					<h1 className="font-extrabold bg-clip-text text-transparent bg-gradient-to-r from-pink-500 to-violet-500 text-xl">
						Nikah Photography
					</h1>
				</div>
				<p className="text-sm text-gray-600 dark:text-gray-300">
					© Copyright 2022. All Rights Reserved to NIKAH PHOTOGRAPHY
				</p>

				<div>
					<h1 className="text-white mb-2">Connect with Me</h1>
					<div className="flex -mx-2">
						<div
							className="mx-2 text-gray-300 transition-colors duration-500  hover:text-blue-500 hover:scale-110 "
							>
							<a href="https://www.facebook.com/#!/">
								<FaFacebook className="w-8 h-8 " />
							</a>
						</div>

						<div
							className="mx-2 text-gray-300 transition-colors duration-500  hover:text-blue-500 hover:scale-110"
							>
							<a href="https://github.com/sajid1545">
								{' '}
								<FaGithub className="w-8 h-8 " />
							</a>
						</div>

						<div
							className="mx-2 text-gray-300 transition-colors duration-500  hover:text-blue-500 hover:scale-110"
							>
							<a href="https://twitter.com/home">
								<FaTwitter className="w-8 h-8 " />
							</a>
						</div>
					</div>
				</div>
			</footer>
		</div>
	);
};

export default Footer;
