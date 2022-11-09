import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import UserProvider from './Contexts/UserProvider';
import 'react-photo-view/dist/react-photo-view.css';
import { HelmetProvider } from 'react-helmet-async';
import ScrollToTop from 'react-scroll-to-top';
import { ReactComponent as MySVG } from './logo.svg';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
	<React.StrictMode>
		<UserProvider>
			<HelmetProvider>
				<ScrollToTop smooth component={<MySVG />} />
				<App />
			</HelmetProvider>
		</UserProvider>
	</React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
