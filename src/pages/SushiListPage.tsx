import Header from '../components/header/Header';
import SushiCard from '../components/sushiCard/SushiCard';
import styles from '../styles/modules/SushiPage.module.scss';
import Loader from '../components/loader/PageLoader';
import { useGetProductsQuery } from '../store/services/shopApi';
const SushiListPage = () => {
	const { data: products, isLoading } = useGetProductsQuery(1);

	return (
		<>
			<Header />
			{isLoading ? (
				<div className={styles.loader}>
					<Loader />
				</div>
			) : (
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
			)}
		</>
	);
};

export default SushiListPage;
