import { useState } from 'react';
import { useGetProductsQuery } from '../../store/services/shopApi';
import styles from './productstable.module.scss';
import AddProduct from '../addProduct/AddProduct';
import ProductCell from './ProductCell';
import UpdateProduct from '../updateProduct/UpdateProduct';
const ProductsTable = () => {
	const [addProductVisible, setAddProductVisible] = useState(false);
	const [updateProductVisible, setUpdateProductVisible] = useState({
		visible: false,
		id_tovara: 0,
	});
	const { data } = useGetProductsQuery();
	const handleUpdate = (id: number) => {
		setUpdateProductVisible((prev) => ({ ...prev, visible: true, id_tovara: id }));
	};

	const handleAdd = () => {
		setAddProductVisible(true);
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
					{data?.products.map((product) => (
						<ProductCell key={product.id_tovara} product={product} handleUpdate={handleUpdate} />
					))}
				</tbody>
			</table>

			<div className={styles.buttonContainer}>
				<button className={styles.button} onClick={handleAdd}>
					Add Product
				</button>
			</div>

			{addProductVisible && <AddProduct onClose={setAddProductVisible} />}
			{updateProductVisible.visible && (
				<UpdateProduct
					id_tovara={updateProductVisible.id_tovara}
					onClose={setUpdateProductVisible}
				/>
			)}
		</div>
	);
};

export default ProductsTable;
