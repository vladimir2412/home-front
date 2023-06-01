import { useEffect, useState } from 'react';
import database from '../components/Database/MeatProducts.json';
import Header from '../components/header/Header';
import SushiCard from '../components/sushiCard/SushiCard';
import styles from '../styles/modules/SushiPage.module.scss';
const SushiListPage = () => {
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
						<SushiCard
							image={product.image}
							weight={product.weight}
							title={product.title}
							price={product.price}
						/>
					</div>
				))}
			</div>
		</>
	);
};

export default SushiListPage;
