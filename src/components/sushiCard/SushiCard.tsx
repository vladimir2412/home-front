import { useActions } from '../../hooks/useCartActions';
import styles from '../../styles/modules/SushiPage.module.scss';
const SushiCard = ({ image, title, weight, price, data }) => {
	const { addItemToCart } = useActions();
	return (
		<div className={styles.sushi__card}>
			<img className={styles.sushi__card__image} src={image} alt={title} />
			<div className={styles.sushi__card__info}>
				<p className={styles.sushi__card__weight}>{weight} g</p>
				<p className={styles.sushi__card__title}>{title}</p>
				<div className={styles.sushi__card__priceContainer}>
					<p className={styles.sushi__card__price}>{price} UAH</p>
					<button className={styles.sushi__card__button} onClick={() => addItemToCart(...data)}>
						Add to cart
					</button>
				</div>
			</div>
		</div>
	);
};

export default SushiCard;
