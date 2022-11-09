import React, { useContext, useState } from 'react';
import { Link, NavLink } from 'react-router-dom';
import { AuthContext } from '../../../Contexts/UserProvider';
import logo from '../../../assets/images/logo-wed.jpg';
import { FaUser } from 'react-icons/fa';
import './Header.css';

const Header = () => {
	const [isMenuOpen, setIsMenuOpen] = useState(false);

	const { user, logOut } = useContext(AuthContext);

	const handleLogOut = () => {
		logOut().then().catch();
		localStorage.removeItem('photo-token');
	};

	const menuItems = (
		<>
			<li>
				<NavLink
					to={'/services'}
					className={`font-medium  hover:text-red-400 hover:underline duration-500 ${(isActive) =>
						isActive ? 'active' : undefined}`}>
					Services
				</NavLink>
			</li>
			<li>
				<NavLink to={'/blogs'} className={`font-medium `}>
					Blogs
				</NavLink>
			</li>
			{user?.email ? (
				<>
					<li>
						<NavLink
							to={'/my-reviews'}
							className="font-medium hover:text-red-400 hover:underline duration-500 ">
							My Reviews
						</NavLink>
					</li>
					<li>
						<NavLink
							to={'/add-services'}
							className="font-medium  hover:text-red-400 hover:underline duration-500 ">
							Add Service
						</NavLink>
					</li>
					<li>
						<button
							onClick={handleLogOut}
							className="inline-block rounded bg-gradient-to-r from-pink-500 via-red-500 to-yellow-500 p-[2px] hover:text-white focus:outline-none focus:ring active:text-opacity-75 text-black">
							<span className="block rounded-sm bg-white px-8 py-3 text-sm font-medium hover:bg-transparent duration-500">
								Log Out
							</span>
						</button>
					</li>
				</>
			) : (
				<>
					<li>
						<Link to={'/login'}>
							<button className="inline-block rounded bg-gradient-to-r from-pink-500 via-red-500 to-yellow-500 p-[2px] text-black hover:text-white focus:outline-none focus:ring active:text-opacity-75">
								<span className="block rounded-sm bg-white px-8 py-3 text-sm font-medium hover:bg-transparent  duration-500">
									Login
								</span>
							</button>
						</Link>
					</li>
				</>
			)}
			<li>
				{user?.photoURL ? (
					<>
						<div className="avatar">
							<div className="w-12 rounded-full ring ring-primary ring-offset-base-100 ring-offset-2">
								<img src={user?.photoURL} alt="users" />
							</div>
						</div>
					</>
				) : (
					<FaUser className="w-12 h-8 rounded-full text-white" />
				)}
			</li>
		</>
	);

	return (
		<div className="bg-gradient-to-r from-slate-800 via-slate-900 to-slate-800 px-4 py-5 mx-auto  md:px-24 lg:px-8 text-white">
			<div className="relative flex items-center justify-between ">
				<Link to={'/'} className="inline-flex items-center">
					<img src={logo} alt="" className="w-20 rounded-full " />
					<span className="ml-2 font-extrabold text-2xl bg-clip-text text-transparent bg-gradient-to-r from-pink-500 via-red-500 to-yellow-500 tracking-wide  uppercase">
						Nikah Photography
					</span>
				</Link>
				<ul className="items-center hidden space-x-8 lg:flex">{menuItems}</ul>
				<div className="lg:hidden">
					<button
						aria-label="Open Menu"
						title="Open Menu"
						className="p-2 -mr-1 transition duration-200 rounded focus:outline-none focus:shadow-outline hover:bg-deep-purple-50 focus:bg-deep-purple-50"
						onClick={() => setIsMenuOpen(true)}>
						<svg className="w-5 text-gray-600" viewBox="0 0 24 24">
							<path
								fill="currentColor"
								d="M23,13H1c-0.6,0-1-0.4-1-1s0.4-1,1-1h22c0.6,0,1,0.4,1,1S23.6,13,23,13z"
							/>
							<path
								fill="currentColor"
								d="M23,6H1C0.4,6,0,5.6,0,5s0.4-1,1-1h22c0.6,0,1,0.4,1,1S23.6,6,23,6z"
							/>
							<path
								fill="currentColor"
								d="M23,20H1c-0.6,0-1-0.4-1-1s0.4-1,1-1h22c0.6,0,1,0.4,1,1S23.6,20,23,20z"
							/>
						</svg>
					</button>
					{isMenuOpen && (
						<div className="absolute top-0 left-0 w-full">
							<div className="p-5 bg-gradient-to-r from-slate-800 via-slate-900 to-slate-800  border rounded shadow-sm">
								<div className="flex items-center justify-between mb-4">
									<div>
										<Link to={'/'} className=" items-center">
											<div className="flex  space-y-5  items-center">
												<div>
													<img src={logo} alt="" className="w-20 mx-auto rounded-full " />
												</div>
												<div>
													<span className="ml-2 font-extrabold text-2xl bg-clip-text text-transparent bg-gradient-to-r from-pink-500 via-red-500 to-yellow-500 tracking-wide  uppercase">
														Nikah Photography
													</span>
												</div>
											</div>
										</Link>
									</div>
									<div>
										<button
											aria-label="Close Menu"
											title="Close Menu"
											className="p-2 -mt-2 -mr-2 transition duration-200 rounded hover:bg-gray-200 focus:bg-gray-200 focus:outline-none focus:shadow-outline"
											onClick={() => setIsMenuOpen(false)}>
											<svg className="w-5 text-white" viewBox="0 0 24 24">
												<path
													fill="currentColor"
													d="M19.7,4.3c-0.4-0.4-1-0.4-1.4,0L12,10.6L5.7,4.3c-0.4-0.4-1-0.4-1.4,0s-0.4,1,0,1.4l6.3,6.3l-6.3,6.3 c-0.4,0.4-0.4,1,0,1.4C4.5,19.9,4.7,20,5,20s0.5-0.1,0.7-0.3l6.3-6.3l6.3,6.3c0.2,0.2,0.5,0.3,0.7,0.3s0.5-0.1,0.7-0.3 c0.4-0.4,0.4-1,0-1.4L13.4,12l6.3-6.3C20.1,5.3,20.1,4.7,19.7,4.3z"
												/>
											</svg>
										</button>
									</div>
								</div>
								<nav>
									<ul className="space-y-4">{menuItems}</ul>
								</nav>
							</div>
						</div>
					)}
				</div>
			</div>
		</div>
	);
};

export default Header;
