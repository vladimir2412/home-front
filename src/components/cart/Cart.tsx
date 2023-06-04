import CartItem from './cartItem/CartItem';
import styles from '../../styles/modules/Cart.module.scss';
import CartEmpty from '../cartEmpty/CartEmpty';
import CartForm from './cartForm/CartForm';
import { useCart } from '../../hooks/useCart';
const Cart = () => {
	const { cart } = useCart();

	return (
		<>
			{cart && cart.items.length > 0 ? (
				<>
					<div className={styles.container}>
						<p className={styles.container__order}>Your order</p>
						<hr />
						<div className={styles.container__wrapper}>
							<div className={styles.container__cart}>
								{cart.items.map((tovar) => (
									<CartItem
										key={tovar.id}
										title={tovar.title}
										image={tovar.image}
										price={tovar.price}
										weight={Number(tovar.weight)}
										quantity={tovar.quantity}
										id={tovar.id}
									/>
								))}
								<p className={styles.container__sum}>In total: {cart.totalAmount} UAH</p>
							</div>
							<div className={styles.container__form}>
								<p className={styles.container__order}>Customer</p>
								<CartForm />
							</div>
						</div>
					</div>
				</>
			) : (
				<>
					<CartEmpty />
				</>
			)}
		</>
	);
};

export default Cart;
