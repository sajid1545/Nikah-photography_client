export const setAuthToken = (user) => {
	const currentUser = {
		email: user.email,
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
			localStorage.setItem('photo-token', data.token);
		});
};
