import { Link } from 'react-router-dom';
import styles from '../../styles/modules/CardShops.module.scss';
const DessertShopCard = () => {
	return (
		<Link to={'/desserts'} className={styles.card__shop}>
			<img
				src="https://images.unsplash.com/photo-1578775887804-699de7086ff9?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=435&q=80"
				alt="Desserts"
				className={styles.card__image}
			/>
			<p className={styles.card__text}>Desserts</p>
		</Link>
	);
};

export default DessertShopCard;
