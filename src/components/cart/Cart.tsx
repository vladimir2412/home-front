import { useGetCartByIdQuery, useSubmitOrderMutation } from '../../store/services/shopApi';
import Loader from '../loader/Loader';
import CartItem from './cartItem/CartItem';
import { useNavigate } from 'react-router-dom';
import styles from '../../styles/modules/Cart.module.scss';
import CartEmpty from '../cartEmpty/CartEmpty';
const Cart = () => {
	const navigate = useNavigate();
	const id = Number(localStorage.getItem('id'));
	const { data, isLoading } = useGetCartByIdQuery(id);
	const cartCounter = data?.items.map((item) => item.quantity);
	const sumQuantity = cartCounter?.reduce((acc, curr) => acc + curr, 0);

	const [submitOrder] = useSubmitOrderMutation();
	const handleSubmit = () => {
		const user_id = Number(localStorage.getItem('id'));
		submitOrder({ user_id });
		alert('Замовлення оформлено');
		navigate('/');
	};
	console.log(data);
	return (
		<>
			{isLoading ? (
				<div className={styles.loader}>
					<Loader />
				</div>
			) : (
				<>
					{data?.items.length > 0 ? (
						<>
							<div className={styles.container}>
								<p className={styles.container__order}>Ваше замовлення</p>
								{data?.items.map((tovar) => {
									return (
										<CartItem
											key={tovar.id_tovara}
											quantity={tovar.quantity}
											id_tovara={tovar.id_tovara}
										/>
									);
								})}
								<p className={styles.container__sum}>Разом: {data?.totalAmount} грн</p>
								{sumQuantity !== 0 ? (
									<div className={styles.container__button}>
										<button onClick={() => handleSubmit()}>Замовити</button>
									</div>
								) : (
									''
								)}
							</div>
						</>
					) : (
						<>
							<CartEmpty />
						</>
					)}
				</>
			)}
		</>
	);
};
export default Cart;
