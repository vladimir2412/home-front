import { useEffect, useState } from 'react';
import database from '../components/Database/MeatProducts.json';
import GrilledMeatCard from '../components/grilledMeatCard/grilledMeatCard';
import styles from '../styles/modules/GrilledMeatPage.module.scss';
import Header from '../components/header/Header';
const GrilledMeatListPage = () => {
	const [products, setProducts] = useState([]);
	useEffect(() => {
		// Загрузка данных из файла базы данных
		const fetchData = async () => {
			try {
				// Здесь можно использовать логику для загрузки данных, например, через fetch или axios
				// В данном примере мы просто симулируем загрузку данных из локального файла
				const response = await new Promise((resolve) =>
					setTimeout(() => resolve(database.products), 1000),
				);

				setProducts(response);
			} catch (error) {
				console.error('Error fetching data:', error);
			}
		};

		fetchData();
	}, []);

	return (
		<>
			<Header />
			<div className={styles.container}>
				{products.map((product) => (
					<div key={product.id}>
						<GrilledMeatCard title={product.title} image={product.image} price={product.price} />
					</div>
				))}
			</div>
		</>
	);
};

export default GrilledMeatListPage;
