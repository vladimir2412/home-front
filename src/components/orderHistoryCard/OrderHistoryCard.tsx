import styles from '../../styles/modules/OderHistory.module.scss';
const OrderHistoryCard = ({ image, title, price, weight, quantity }) => {
	return (
		<div className={styles.history__card}>
			<div className={styles.history__card__image}>
				<img src={image} alt={title} />
			</div>
			<div className={styles.history__card__info}>
				<p className={styles.info__title}>{title}</p>
				<div className={styles.info__groupe}>
					<p className={styles.info__price}>{price} UAH</p>
					<p className={styles.info__quantity}>Qty. {quantity}</p>
				</div>
				<p className={styles.info__weight}>{weight} g.</p>
			</div>
		</div>
	);
};

export default OrderHistoryCard;
