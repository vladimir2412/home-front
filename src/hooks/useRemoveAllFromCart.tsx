import { useAddProductToCartMutation } from '../store/services/shopApi';

const useRemoveAllFromCart = () => {
	const [addToCartMutation] = useAddProductToCartMutation();

	const removeAllFromCart = async (id: number) => {
		const user_id = Number(localStorage.getItem('id'));
		const item = {
			id_tovara: id,
			quantity: Number.MIN_SAFE_INTEGER,
		};
		const body = { user_id, item };
		await addToCartMutation(body);
	};

	return { removeAllFromCart };
};

export default useRemoveAllFromCart;
