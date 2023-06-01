import SushiCardShop from '../components/sushiCardShop/SushiCardShop';
import MeatCardShop from '../components/meatCardShop/MeatCardShop';
import DessertCardShop from '../components/dessertCardShop/DessertCardShop';
import styles from '../styles/modules/ShopPage.module.scss';
import Header from '../components/header/Header';
const Shops = () => {
	return (
		<>
			<Header />
			<div className={styles.container}>
				<div className={styles.container__text}>
					<p>Select a store:</p>
				</div>

				<div className={styles.container__shops}>
					<MeatCardShop />
					<SushiCardShop />
					<DessertCardShop />
				</div>
			</div>
		</>
	);
};

export default Shops;
