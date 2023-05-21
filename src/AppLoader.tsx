import { Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import ProductPage from './pages/ProductPage';
import AdminPage from './pages/AdminPage';
import ProductInfoPage from './pages/ProductInfoPage';
import CartPage from './pages/CartPage';
import Login from './pages/Login';
import Register from './pages/Register';
import PermissionWrapper from './wrappers/PermissionWrapper';
import AuthWrapper from './wrappers/AuthWrapper';

const AppLoader = () => {
	return (
		<Routes>
			<Route path={'/'} element={<Home />} />
			<Route
				path={'/products'}
				element={
					<PermissionWrapper allowedRole={['user', 'admin']}>
						<ProductPage />
					</PermissionWrapper>
				}
			/>
			<Route
				path={'/products/:id'}
				element={
					<PermissionWrapper allowedRole={['user', 'admin']}>
						<ProductInfoPage />
					</PermissionWrapper>
				}
			/>
			<Route
				path={'/cart'}
				element={
					<PermissionWrapper allowedRole={['user', 'admin']}>
						<CartPage />
					</PermissionWrapper>
				}
			/>
			<Route
				path={'/admin'}
				element={
					<PermissionWrapper allowedRole={['admin']}>
						<AdminPage />
					</PermissionWrapper>
				}
			/>
			<Route
				path={'/login'}
				element={
					<AuthWrapper>
						<Login />
					</AuthWrapper>
				}
			/>
			<Route
				path={'/register'}
				element={
					<AuthWrapper>
						<Register />
					</AuthWrapper>
				}
			/>
			<Route path={'*'} element={<h1>Page not Found</h1>} />
		</Routes>
	);
};

export default AppLoader;
