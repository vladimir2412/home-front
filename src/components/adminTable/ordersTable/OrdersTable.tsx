import { useState } from 'react';
import styles from '../../../styles/modules/AdminTables.module.scss';
import Order from './order/Order';
import Sidebar from '../../sidebar/Sidebar';

const OrdersTable = () => {
	const [updateOrderVisible, setUpdateOrderVisible] = useState({
		visible: false,
		id_tovara: 0,
	});
	const handleUpdate = (id: number) => {
		setUpdateOrderVisible((prev) => ({ ...prev, visible: true, id_tovara: id }));
	};
	return (
		<div style={{ display: 'flex' }}>
			<Sidebar />
			<div className={styles.container}>
				<p>Таблиця Замовлень</p>
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
		</div>
	);
};

export default OrdersTable;
