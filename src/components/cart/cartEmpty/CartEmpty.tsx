import cartEmptyImg from '../../../assets/empty-cart.png';
import { Link } from 'react-router-dom';
import styles from '../../../styles/modules/Cart.module.scss';
const CartEmpty = () => {
	return (
		<>
			<div className={styles.cart__empty}>
				<h2>Cart is empty 😕</h2>
				<p>
					Most likely, you haven't ordered anything yet.
					<br />
					To order go to the products page <br />
					or <br />
					If you made an order, check it in{' '}
					<Link to={'/order-history'}>
						<span>
							order history <span aria-hidden="true">&rarr;</span>
						</span>
					</Link>
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
