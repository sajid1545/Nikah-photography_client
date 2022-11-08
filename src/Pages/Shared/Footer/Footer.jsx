import React from 'react';
import { FaFacebook, FaGithub, FaTwitter } from 'react-icons/fa';
import logo from '../../../assets/images/logo-12.png'

const Footer = () => {
	return (
		<div>
			<footer className="flex flex-col items-center justify-between p-20 bg-white dark:bg-gray-900 sm:flex-row">
				
                
                <img src={logo} alt="logo" className="text-xl font-bold text-gray-600 transition-colors duration-300 dark:text-white hover:text-gray-700 dark:hover:text-gray-300 w-20 rounded-full"/>

				<p className="text-sm text-gray-600 dark:text-gray-300">
					© Copyright 2021. All Rights Reserved.
				</p>

				<div className="flex -mx-2">
					<div
						className="mx-2 text-gray-600 transition-colors duration-300 dark:text-gray-300 hover:text-blue-500 dark:hover:text-blue-400"
						aria-label="Reddit">
						
                        <a href="https://www.facebook.com/#!/"><FaFacebook className="w-8 h-8 "/></a>
					</div>

					<div
						className="mx-2 text-gray-600 transition-colors duration-300 dark:text-gray-300 hover:text-blue-500 dark:hover:text-blue-400"
						aria-label="Facebook">
						
                       <a href="https://github.com/sajid1545"> <FaGithub className="w-8 h-8 " /></a>
					</div>

					<div
						className="mx-2 text-gray-600 transition-colors duration-300 dark:text-gray-300 hover:text-blue-500 dark:hover:text-blue-400"
						aria-label="Github">
						
                        <a href="https://twitter.com/home" ><FaTwitter className="w-8 h-8 "/></a>
					</div>
				</div>
			</footer>
		</div>
	);
};

export default Footer;
