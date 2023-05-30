import { useRemoveProductMutation } from '../../../store/services/shopApi';
import { IProduct } from '../../../store/services/types';
interface ProductCellProps {
	product: IProduct;
	handleUpdate: (id: number) => void;
}
const ProductCell = ({ product, handleUpdate }: ProductCellProps) => {
	const [removeProduct, {}] = useRemoveProductMutation();
	const handleDelete = (id: number) => {
		removeProduct(id);
		console.log('Товар був видалений  з ID:', id);
	};
	return (
		<>
			<tr>
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
		</>
	);
};

export default ProductCell;
