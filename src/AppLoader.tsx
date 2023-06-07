import { Routes, Route } from 'react-router-dom';
import { useEffect } from 'react';
import { useActions } from './hooks/useCartActions';
import CartPage from './pages/CartPage';
import Shops from './pages/Shops';
import GrilledMeatListPage from './pages/GrilledMeatListPage';
import SushiListPage from './pages/SushiListPage';
import DessertsListPage from './pages/DessertsListPage';
import OrderHistory from './pages/OrderHistory';

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
			<Route path={'/cart'} element={<CartPage />} />
			<Route path={'/order-history'} element={<OrderHistory />} />
			<Route path={'*'} element={<h1>Page not Found</h1>} />
		</Routes>
	);
};

export default AppLoader;
