import styles from '../../styles/modules/DessertsPage.module.scss';

const DessertCard = ({ title, image, price }) => {
	return (
		<div className={styles.dessert__card}>
			<div className={styles.dessert__card__image}>
				<img src={image} alt={title} />
				<p className={styles.dessert__card__button}>Add to cart</p>
			</div>
			<p className={styles.dessert__card__title}>{title}</p>
			<p className={styles.dessert__card__price}>{price} UAH</p>
		</div>
	);
};

export default DessertCard;
