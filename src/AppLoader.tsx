import { Routes, Route } from 'react-router-dom';
import { useEffect } from 'react';
import { useActions } from './hooks/useCartActions';
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
import SushiListPage from './pages/SushiListPage';
import DessertsListPage from './pages/DessertsListPage';

const AppLoader = () => {
	const { setCart } = useActions();
	useEffect(() => {
		const savedCart = localStorage.getItem('cart');
		if (savedCart) {
			const parsedCart = JSON.parse(savedCart);
			setCart(parsedCart);
		}
	}, []);
	return (
		<Routes>
			<Route path={'/'} element={<Shops />} />
			<Route path={'/grilled-meat'} element={<GrilledMeatListPage />} />
			<Route path={'/sushi'} element={<SushiListPage />} />
			<Route path={'/desserts'} element={<DessertsListPage />} />
			<Route path={'/products'} element={<ProductPage />} />
			<Route path={'/products/:id'} element={<ProductInfoPage />} />
			<Route path={'/cart'} element={<CartPage />} />
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
