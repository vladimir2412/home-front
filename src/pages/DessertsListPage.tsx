import DessertCard from '../components/dessertCard/DessertCard';
import Header from '../components/header/Header';
import Loader from '../components/loader/PageLoader';
import { useGetProductsQuery } from '../store/services/shopApi';
import styles from '../styles/modules/DessertsPage.module.scss';
import dessert1 from '../assets/cake-slice.png';
import dessert2 from '../assets/cake.png';
import dessert3 from '../assets/cupcake.png';
import dessert4 from '../assets/pie.png';
import dessert5 from '../assets/piece-of-cake.png';
import dessert6 from '../assets/sweets.png';
const DessertsListPage = () => {
	const { data, isLoading } = useGetProductsQuery(2);
	return (
		<div>
			<Header />
			{isLoading ? (
				<div className={styles.loader}>
					<Loader />
				</div>
			) : (
				<>
					<div className={styles.title}>
						<p className={styles.title__paragraph}>
							De<span>ss</span>ertBli<span>ss</span>
						</p>
						<div className={styles.title__images}>
							<img className={styles.img1} src={dessert1} alt="dessert1" />
							<img className={styles.img2} src={dessert2} alt="dessert2" />
							<img className={styles.img3} src={dessert3} alt="dessert3" />
							<img className={styles.img4} src={dessert4} alt="dessert4" />
							<img className={styles.img5} src={dessert5} alt="dessert5" />
							<img className={styles.img6} src={dessert6} alt="dessert6" />
						</div>
					</div>
					<div className={styles.container}>
						{data?.map((products) => (
							<div key={products.id}>
								<DessertCard
									data={data.filter((product) => product.id === products.id)}
									title={products.title}
									image={products.image}
									price={products.price}
								/>
							</div>
						))}
					</div>
				</>
			)}
		</div>
	);
};

export default DessertsListPage;
