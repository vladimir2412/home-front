import { Routes, Route, Navigate } from 'react-router-dom';
import Home from './pages/Home';
import ProductPage from './pages/ProductPage';
import AdminPage from './pages/AdminPage';
import ProductInfoPage from './pages/ProductInfoPage';
import CartPage from './pages/CartPage';
import Login from './pages/Login';
import Register from './pages/Register';
const PermissionWrapper = ({ children }) => {
	const isAuth = localStorage.getItem('isAuth');
	console.log(isAuth);
	if (!isAuth) {
		return <Navigate to="/login" />;
	}

	return children;
};
const AppLoader = () => {
	return (
		<Routes>
			<Route path={'/'} element={<Home />} />
			<Route
				path={'/products'}
				element={
					<PermissionWrapper>
						<ProductPage />
					</PermissionWrapper>
				}
			/>
			<Route
				path={'/products/:id'}
				element={
					<PermissionWrapper>
						<ProductInfoPage />
					</PermissionWrapper>
				}
			/>
			<Route
				path={'/cart'}
				element={
					<PermissionWrapper>
						<CartPage />
					</PermissionWrapper>
				}
			/>
			<Route
				path={'/admin'}
				element={
					<PermissionWrapper>
						<AdminPage />
					</PermissionWrapper>
				}
			/>
			<Route path={'/login'} element={<Login />} />
			<Route path={'/register'} element={<Register />} />
			<Route path={'*'} element={<h1>Page not Found</h1>} />
		</Routes>
	);
};

export default AppLoader;
