import { Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import ProductPage from './pages/ProductPage';
import AdminPage from './pages/AdminPage';
const AppLoader = () => {
	return (
		<Routes>
			<Route path={'/'} element={<Home />} />
			<Route path={'/products'} element={<ProductPage />} />
			<Route path={'/products/:id'} element={<ProductPage />} />
			<Route path={'/admin'} element={<AdminPage />} />
			<Route path={'*'} element={<h1>Page not Found</h1>} />
		</Routes>
	);
};

export default AppLoader;
