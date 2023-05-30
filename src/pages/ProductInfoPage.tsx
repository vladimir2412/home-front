import { useParams } from 'react-router';
import { useGetProductByIdQuery } from '../store/services/shopApi';
import styles from '../styles/modules/ProductInfoPage.module.scss';
import Loader from '../components/loader/PageLoader';
import useAddToCart from '../hooks/useAddToCart';
import Header from '../components/header/Header';
const ProductInfoPage = () => {
	const { id } = useParams();
	const { data, isLoading } = useGetProductByIdQuery(Number(id));
	const { addToCart } = useAddToCart();
	const handleAddToCart = (id: number) => {
		if (data?.price) {
			addToCart(id, data.price);
		}
	};
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
						<div className={styles.img}>
							<img src={data?.img} alt={data?.name} />
						</div>
						<div className={styles.info}>
							<p className={styles.info__name}>{data?.name}</p>
							<hr />
							<p className={styles.info__price}>{data?.price} грн/шт.</p>
							<button onClick={() => handleAddToCart(Number(id))}>Додати до кошика</button>
						</div>
					</div>
				</>
			)}
		</>
	);
};

export default ProductInfoPage;
