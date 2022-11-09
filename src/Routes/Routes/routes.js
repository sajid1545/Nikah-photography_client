import { createBrowserRouter } from 'react-router-dom';
import Main from '../../layout/Main';
import AddServices from '../../Pages/AddServices/AddServices';
import Blogs from '../../Pages/Blogs/Blogs';
import ErrorPage from '../../Pages/ErrorPage/ErrorPage';
import Home from '../../Pages/Home/Home/Home';
import Login from '../../Pages/Login/Login';
import MyReviews from '../../Pages/MyReviews/MyReviews';
import Register from '../../Pages/Register/Register';
import ServiceDetails from '../../Pages/ServiceDetails/ServiceDetails';
import UpdateReview from '../../Pages/UpdateReview/UpdateReview';
import PrivateRoute from '../PrivateRoute/PrivateRoute';
import Services from './../../Pages/Services/Services';

export const router = createBrowserRouter([
	{
		path: '/',
		element: <Main />,
		errorElement: <ErrorPage />,
		children: [
			{
				path: '/',
				element: <Home />,
			},
			{
				path: '/login',
				element: <Login />,
			},
			{
				path: '/register',
				element: <Register />,
			},
			{
				path: '/add-services',
				element: (
					<PrivateRoute>
						<AddServices />
					</PrivateRoute>
				),
			},
			{
				path: '/services',
				element: <Services />,
			},
			{
				path: '/services/:id',
				element: <ServiceDetails />,
				loader: ({ params }) =>
					fetch(`https://assignment-11-server-pi.vercel.app/services/${params.id}`),
			},
			{
				path: '/my-reviews',
				element: (
					<PrivateRoute>
						<MyReviews />
					</PrivateRoute>
				),
			},
			{
				path: '/blogs',
				element: <Blogs />,
			},
			{
				path: '/update-review/:id',
				element: (
					<PrivateRoute>
						<UpdateReview />
					</PrivateRoute>
				),
				loader: ({ params }) =>
					fetch(`https://assignment-11-server-pi.vercel.app/reviews/${params.id}`),
			},
		],
	},
]);
