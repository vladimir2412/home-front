import { useGetCartByIdQuery, useSubmitOrderMutation } from '../../store/services/shopApi';
import CartItem from './cartItem/CartItem';
import { useNavigate } from 'react-router-dom';
const Cart = () => {
	const navigate = useNavigate();
	const id = Number(localStorage.getItem('id'));
	const { data } = useGetCartByIdQuery(id);
	const [submitOrder] = useSubmitOrderMutation();
	const handleSubmit = () => {
		const user_id = Number(localStorage.getItem('id'));
		submitOrder({ user_id });
		alert('Замовлення оформлено');
		navigate('/');
	};
	return (
		<>
			<h1>Hello world</h1>
			{data?.items.map((tovar) => {
				return (
					<CartItem key={tovar.id_tovara} quantity={tovar.quantity} id_tovara={tovar.id_tovara} />
				);
			})}
			<button onClick={() => handleSubmit()} style={{ marginTop: '20px' }}>
				Замовити
			</button>
		</>
	);
};
export default Cart;
