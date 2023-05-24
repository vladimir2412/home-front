import { useGetCartByIdQuery, useSubmitOrderMutation } from '../../store/services/shopApi';
import Loader from '../loader/Loader';
import CartItem from './cartItem/CartItem';
import { useNavigate } from 'react-router-dom';
import styles from '../../styles/modules/Cart.module.scss';
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
	return (
		<>
			{isLoading ? (
				<div className={styles.loader}>
					<Loader />
				</div>
			) : (
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
						<p className={styles.container__sum}>Разом:</p>
						{sumQuantity !== 0 ? (
							<button onClick={() => handleSubmit()} style={{ marginTop: '20px' }}>
								Замовити
							</button>
						) : (
							''
						)}
					</div>
				</>
			)}
		</>
	);
};
export default Cart;
