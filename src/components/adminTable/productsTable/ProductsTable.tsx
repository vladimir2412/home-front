import { useState } from 'react';
import styles from '../../../styles/modules/AdminTables.module.scss';
import AddProduct from '../../addProduct/AddProduct';
import ProductCell from './ProductCell';
import UpdateProduct from '../../updateProduct/UpdateProduct';
import Sidebar from '../../sidebar/Sidebar';
import { useGetProductsQuery } from '../../../store/services/shopApi';
const ProductsTable = () => {
	const [addProductVisible, setAddProductVisible] = useState(false);
	const [updateProductVisible, setUpdateProductVisible] = useState({
		visible: false,
		id_tovara: 0,
	});
	const { data, isLoading } = useGetProductsQuery();
	const handleUpdate = (id: number) => {
		setUpdateProductVisible((prev) => ({ ...prev, visible: true, id_tovara: id }));
	};

	const handleAdd = () => {
		setAddProductVisible(true);
	};
	return (
		<div style={{ display: 'flex' }}>
			<Sidebar />

			<div className={styles.container}>
				<p>Таблиця продуктів</p>

				<table className={styles.table}>
					<thead>
						<tr>
							<th>ID</th>
							<th>Title</th>
							<th>Stock quantity</th>
							<th>Discount (in percent)</th>
							<th>Price</th>
							<th>Actions</th>
						</tr>
					</thead>
					{isLoading ? (
						'Loading'
					) : (
						<tbody>
							{data?.products.map((product) => (
								<ProductCell
									key={product.id_tovara}
									product={product}
									handleUpdate={handleUpdate}
								/>
							))}
						</tbody>
					)}
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
		</div>
	);
};

export default ProductsTable;
