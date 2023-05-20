import React from 'react';

const AdminCells = ({ product }) => {
	const handleUpdate = (id) => {
		console.log('Обновление товара с ID:', id);
	};

	const handleDelete = (id) => {
		console.log('Удаление товара с ID:', id);
	};

	return (
		<tr key={product.id_tovara}>
			<td>{product.id_tovara}</td>
			<td>{product.name}</td>
			<td>{product.property1}</td>
			<td>{product.property2}</td>
			<td>{product.price}</td>
			<td>
				<button onClick={() => handleUpdate(product.id_tovara)}>Update</button>
				<button onClick={() => handleDelete(product.id_tovara)}>Delete</button>
			</td>
		</tr>
	);
};

export default AdminCells;
