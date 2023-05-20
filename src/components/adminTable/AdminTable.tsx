import { useState } from 'react';
import { useGetProductsQuery } from '../../store/services/shopApi';
import AdminCells from './AdminCells';
import AddModal from './AddModal';
const AdminTable = () => {
	const { data } = useGetProductsQuery();
	const handleAdd = () => {
		console.log('Добавление нового товара');
	};
	return (
		<div>
			<table>
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
					{data?.products.map((product) => (
						<AdminCells product={product} />
					))}
				</tbody>
			</table>

			<button onClick={handleAdd}>Add</button>
		</div>
	);
};

export default AdminTable;
