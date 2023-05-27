import { useState } from 'react';
import styles from './orderstable.module.scss';
import { useGetOrdersQuery } from '../../../store/services/shopApi';
import OrderDitails from '../../orderDetails/OrderDitails';
const OrdersTable = () => {
	const [updateOrderVisible, setUpdateOrderVisible] = useState({
		visible: false,
		id_tovara: 0,
	});
	const { data, isLoading } = useGetOrdersQuery();
	const handleUpdate = (id: number) => {
		setUpdateOrderVisible((prev) => ({ ...prev, visible: true, id_tovara: id }));
	};
	return (
		<div>
			<h2 style={{ textAlign: 'center', marginTop: '20px', fontSize: '24px', fontWeight: '500' }}>
				Таблиця Заказів
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
					{data?.map((order) => (
						<tr key={order.id_tovara}>
							<td>{order.order_id}</td>
							<td>{order.payment_sum}</td>
							<td>{order.user_id}</td>
							<td>
								<svg width={24} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
									<g id="Edit / Show">
										<g id="Vector">
											<path
												d="M3.5868 13.7788C5.36623 15.5478 8.46953 17.9999 12.0002 17.9999C15.5308 17.9999 18.6335 15.5478 20.413 13.7788C20.8823 13.3123 21.1177 13.0782 21.2671 12.6201C21.3738 12.2933 21.3738 11.7067 21.2671 11.3799C21.1177 10.9218 20.8823 10.6877 20.413 10.2211C18.6335 8.45208 15.5308 6 12.0002 6C8.46953 6 5.36623 8.45208 3.5868 10.2211C3.11714 10.688 2.88229 10.9216 2.7328 11.3799C2.62618 11.7067 2.62618 12.2933 2.7328 12.6201C2.88229 13.0784 3.11714 13.3119 3.5868 13.7788Z"
												stroke="#000000"
												stroke-width="2"
												stroke-linecap="round"
												stroke-linejoin="round"
											/>
											<path
												d="M10 12C10 13.1046 10.8954 14 12 14C13.1046 14 14 13.1046 14 12C14 10.8954 13.1046 10 12 10C10.8954 10 10 10.8954 10 12Z"
												stroke="#000000"
												stroke-width="2"
												stroke-linecap="round"
												stroke-linejoin="round"
											/>
										</g>
									</g>
								</svg>
							</td>
							<td>
								<button>Update</button>
								<button>Delete</button>
							</td>
						</tr>
					))}
				</tbody>
			</table>
		</div>
	);
};

export default OrdersTable;
