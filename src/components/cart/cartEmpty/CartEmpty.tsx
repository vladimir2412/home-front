import cartEmptyImg from '../../../assets/empty-cart.png';
import { Link } from 'react-router-dom';
import styles from '../../styles/modules/Cart.module.scss';
const CartEmpty = () => {
	return (
		<>
			<div className={styles.cart__empty}>
				<h2>Cart is empty 😕</h2>
				<p>
					Most likely, you haven't ordered anything yet.
					<br />
					To order the product, go to the product page.
				</p>
				<img src={cartEmptyImg} alt="Empty cart" />
				<Link to="/" className={styles.container__button}>
					<button>Go back</button>
				</Link>
			</div>
		</>
	);
};

export default CartEmpty;
