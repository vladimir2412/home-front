import { Link } from 'react-router-dom';
import styles from '../../styles/modules/CardShops.module.scss';
const SushiShopCard = () => {
	return (
		<Link to={'/sushi'} className={styles.card__shop}>
			<img
				src="https://images.unsplash.com/photo-1580821082847-c53037ecfe0a?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=387&q=80"
				alt="Sushi"
				className={styles.card__image}
			/>
			<p className={styles.card__text}>Sushi</p>
		</Link>
	);
};

export default SushiShopCard;
