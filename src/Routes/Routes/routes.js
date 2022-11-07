import { createBrowserRouter } from 'react-router-dom';
import Main from '../../layout/Main';
import AddServices from '../../Pages/AddServices/AddServices';
import Home from '../../Pages/Home/Home/Home';
import Login from '../../Pages/Login/Login';
import Register from '../../Pages/Register/Register';
import ServiceDetails from '../../Pages/ServiceDetails/ServiceDetails';
import Services from './../../Pages/Services/Services';

export const router = createBrowserRouter([
	{
		path: '/',
		element: <Main />,
		children: [
			{
				path: '/',
				element: <Home />,
				loader: () => fetch('http://localhost:5000/limited-services'),
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
				element: <AddServices />,
			},
			{
				path: '/services',
				element: <Services />,
				loader: () => fetch('http://localhost:5000/services'),
			},
			{
				path: '/services/:id',
				element: <ServiceDetails />,
				loader: ({ params }) => fetch(`http://localhost:5000/services/${params.id}`),
			},
		],
	},
]);
