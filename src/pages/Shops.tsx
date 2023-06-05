import SushiShopCard from '../components/sushiShopCard/SushiShopCard';
import MeatShopCard from '../components/meatShopCard/MeatShopCard';
import DessertShopCard from '../components/dessertShopCard/DessertShopCard';
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
					<MeatShopCard />
					<SushiShopCard />
					<DessertShopCard />
				</div>
			</div>
		</>
	);
};

export default Shops;
