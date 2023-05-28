import { useState } from 'react';
import styles from './orderstable.module.scss';
import Order from './order/Order';

const OrdersTable = () => {
	const [updateOrderVisible, setUpdateOrderVisible] = useState({
		visible: false,
		id_tovara: 0,
	});
	const handleUpdate = (id: number) => {
		setUpdateOrderVisible((prev) => ({ ...prev, visible: true, id_tovara: id }));
	};
	return (
		<div>
			<h2 style={{ textAlign: 'center', marginTop: '20px', fontSize: '24px', fontWeight: '500' }}>
				Таблиця Замовлень
			</h2>
			<table className={styles.table}>
				<thead>
					<tr>
						<th>ID</th>
						<th>Summary price</th>
						<th>User ID</th>
						<th>Products</th>
						<th>Actions</th>
					</tr>
				</thead>
				<tbody>
					<Order />
				</tbody>
			</table>
		</div>
	);
};

export default OrdersTable;
