import { useState } from 'react';
import { useGetProductsQuery } from '../store/services/shopApi';
import ProductCard from '../components/product/ProductCard';
import styles from '../styles/modules/ProductPage.module.scss';
import Loader from '../components/loader/Loader';
import Header from '../components/header/Header';
import Footer from '../components/footer/Footer';
const ProductPage = () => {
	const [count, setCount] = useState(0);
	const { data, isLoading } = useGetProductsQuery();
	return (
		<>
			<Header />
			{isLoading ? (
				<div className={styles.loader}>
					<Loader />
				</div>
			) : (
				<>
					<div className={styles.container}>
						<h1 className={styles.title}>List of available products:</h1>
						<div className={styles.list}>
							{data?.products.map((product) => {
								return (
									<ProductCard
										key={product.id_tovara}
										id={product.id_tovara}
										img={product.img}
										name={product.name}
										price={product.price}
										availableCount={product.property1}
										discount={product.property2}
									/>
								);
							})}
						</div>
					</div>
				</>
			)}
			<Footer />
		</>
	);
};
export default ProductPage;
