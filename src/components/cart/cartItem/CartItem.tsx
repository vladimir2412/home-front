import { useGetProductByIdQuery } from '../../../store/services/shopApi';
import useRemoveFromCart from '../../../hooks/useRemoveFromCart';
import useAddToCart from '../../../hooks/useAddToCart';
interface CartItemProps {
	quantity: number;
	id_tovara: number;
}
const CartItem = ({ quantity, id_tovara }: CartItemProps) => {
	const { data } = useGetProductByIdQuery(id_tovara);
	const { addToCart } = useAddToCart();
	const { removeFromCart } = useRemoveFromCart();
	return (
		<div>
			<h2>Name: {data?.name}</h2>
			<h2>Price: {data?.price}</h2>
			<p>Кількість на складі: {data?.property1}</p>
			<p>Знижка до {data?.property2}</p>
			<img width={200} src={data?.img} />
			<p>Кількість : {quantity}</p>
			<p>Загальна вартість : {data ? quantity * data?.price : null} грн</p>
			<button onClick={() => addToCart(id_tovara)}>Додати</button>
			<button onClick={() => removeFromCart(id_tovara)}>Відняти</button>
		</div>
	);
};

export default CartItem;
