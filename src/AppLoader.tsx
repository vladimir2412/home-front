import { Routes, Route } from 'react-router-dom';
import ProductPage from './pages/ProductPage';
import AdminPage from './pages/AdminPage';
import ProductInfoPage from './pages/ProductInfoPage';
import CartPage from './pages/CartPage';
import Login from './pages/Login';
import Register from './pages/Register';
import PermissionWrapper from './wrappers/PermissionWrapper';
import AuthWrapper from './wrappers/AuthWrapper';
import ProductsTable from './components/adminTable/productsTable/ProductsTable';
import OrdersTable from './components/adminTable/ordersTable/OrdersTable';
import UsersTable from './components/adminTable/usersTable/UsersTable';
import Shops from './pages/Shops';
import GrilledMeatListPage from './pages/GrilledMeatListPage';

const AppLoader = () => {
	return (
		<Routes>
			<Route path={'/'} element={<Shops />} />
			<Route path={'/grilled-meat'} element={<GrilledMeatListPage />} />
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
				path={'/admin/products-table'}
				element={
					<PermissionWrapper allowedRole={['admin']}>
						<ProductsTable />
					</PermissionWrapper>
				}
			/>
			<Route
				path={'/admin/orders-table'}
				element={
					<PermissionWrapper allowedRole={['admin']}>
						<OrdersTable />
					</PermissionWrapper>
				}
			/>
			<Route
				path={'/admin/users-table'}
				element={
					<PermissionWrapper allowedRole={['admin']}>
						<UsersTable />
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
