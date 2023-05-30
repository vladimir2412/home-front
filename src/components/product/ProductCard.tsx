import styles from './productCard.module.scss';
import { Link } from 'react-router-dom';
import useAddToCart from '../../hooks/useAddToCart';
interface ProductCardProps {
	id: number;
	name: string;
	price: number;
	availableCount: number;
	discount: number;
	img: string;
}
const ProductCard = ({ id, name, price, img }: ProductCardProps) => {
	const { addToCart } = useAddToCart();
	const handleAddToCart = (id: number) => {
		addToCart(id, price);
	};
	return (
		<>
			<div className={styles.container}>
				<Link to={`/products/${id}`}>
					<div className={styles.imageContainer}>
						<img src={img} alt={name} />
					</div>
				</Link>
				<div className={styles.info}>
					<Link to={`/products/${id}`}>
						<p className={styles.info__name}>{name}</p>
					</Link>
					<p className={styles.info__price}>
						Ціна: <span>{price} грн</span>
					</p>
					<div className={styles.info__buttons}>
						<button onClick={() => handleAddToCart(id)}>Add to cart</button>
					</div>
				</div>
			</div>
		</>
	);
};

export default ProductCard;
