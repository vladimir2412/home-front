import { Navigate } from 'react-router';
const AuthWrapper = ({ children }) => {
	const isAuth = localStorage.getItem('isAuth') === 'true';

	if (isAuth) {
		return <Navigate to="/" />;
	}

	return children;
};
export default AuthWrapper;
