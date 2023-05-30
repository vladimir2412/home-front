import { useGetCartByIdQuery } from '../../store/services/shopApi';
import CartItem from './cartItem/CartItem';
import styles from '../../styles/modules/Cart.module.scss';
import CartEmpty from '../cartEmpty/CartEmpty';
import CartForm from './cartForm/CartForm';
const Cart = () => {
	const id = Number(localStorage.getItem('id'));
	const { data } = useGetCartByIdQuery(id);

	console.log(data);
	return (
		<>
			{data?.items.length > 0 ? (
				<>
					<div className={styles.container}>
						<p className={styles.container__order}>
							Your order
							<hr />
						</p>
						<div className={styles.container__wrapper}>
							<div className={styles.container__cart}>
								{data?.items.map((tovar) => {
									return (
										<CartItem
											key={tovar.id_tovara}
											quantity={tovar.quantity}
											id_tovara={tovar.id_tovara}
										/>
									);
								})}
							</div>
							<div className={styles.container__form}>
								<p className={styles.container__order}>Customer</p>
								<CartForm />
							</div>
						</div>
						<p className={styles.container__sum}>In total: {data?.totalAmount} UAH</p>
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
