import { useState } from 'react';
import { useGetProductsQuery } from '../../store/services/shopApi';
import styles from './productstable.module.scss';
import ProductCell from './ProductCell';
const ProductsTable = () => {
	const [updateOrderVisible, setUpdateOrderVisible] = useState({
		visible: false,
		id_tovara: 0,
	});
	const { data } = useGetProductsQuery();
	const handleUpdate = (id: number) => {
		setUpdateOrderVisible((prev) => ({ ...prev, visible: true, id_tovara: id }));
	};

	return (
		<div>
			<h2 style={{ textAlign: 'center', marginTop: '20px', fontSize: '24px', fontWeight: '500' }}>
				Таблиця продуктів
			</h2>
			<table className={styles.table}>
				<thead>
					<tr>
						<th>ID</th>
						<th>Name</th>
						<th>Property 1</th>
						<th>Property 2</th>
						<th>Price</th>
						<th>Actions</th>
					</tr>
				</thead>
				<tbody>
					{/* {data?.orders.map((order) => (
						<ProductCell key={order.id_tovara} product={product} handleUpdate={handleUpdate} />
					))} */}
				</tbody>
			</table>
			{/* {updateOrderVisible.visible && (
				<UpdateProduct id_tovara={updateOrderVisible.id_tovara} onClose={setUpdateOrderVisible} />
			)} */}
		</div>
	);
};

export default OrdersTable;
