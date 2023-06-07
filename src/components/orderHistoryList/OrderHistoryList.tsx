import OrderHistoryCard from '../orderHistoryCard/OrderHistoryCard';
import styles from '../../styles/modules/OderHistory.module.scss';

const OrderHistoryList = ({ items }) => {
	const totalQuantity = items.reduce((sum, tovar) => sum + tovar.quantity, 0);
	const totalAmount = items.reduce((sum, tovar) => sum + tovar.price * tovar.quantity, 0);
	console.log(items);
	return (
		<>
			{items.map((tovar) => (
				<OrderHistoryCard
					key={tovar.id}
					image={tovar.image}
					price={tovar.price}
					quantity={tovar.quantity}
					title={tovar.title}
					weight={Number(tovar.weight) === 1 ? undefined : Number(tovar.weight)}
				/>
			))}
			<p className={styles.total__quantity}>X{totalQuantity} Items</p>
			<p className={styles.total__amount}>{totalAmount} UAH</p>
		</>
	);
};

export default OrderHistoryList;
