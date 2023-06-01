import styles from '../styles/modules/GrilledMeatPage.module.scss';
import Header from '../components/header/Header';
import GrilledMeatCard from '../components/grilledMeatCard/GrilledMeatCard';
import { useGetProductsQuery } from '../store/services/shopApi';
import Loader from '../components/loader/PageLoader';
const GrilledMeatListPage = () => {
	const { data, isLoading } = useGetProductsQuery();

	return (
		<>
			<Header />
			{isLoading ? (
				<div className={styles.loader}>
					<Loader />
				</div>
			) : (
				<div className={styles.container}>
					{data?.map((products) => (
						<div key={products.id}>
							<GrilledMeatCard
								title={products.title}
								image={products.image}
								price={products.price}
							/>
						</div>
					))}
				</div>
			)}
		</>
	);
};

export default GrilledMeatListPage;
