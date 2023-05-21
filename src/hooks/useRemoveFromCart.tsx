import { useAddProductToCartMutation } from '../store/services/shopApi';

const useRemoveFromCart = () => {
	const [addToCartMutation] = useAddProductToCartMutation();

	const removeFromCart = async (id: number) => {
		const user_id = Number(localStorage.getItem('id'));
		const item = {
			id_tovara: id,
			quantity: -1,
		};
		const body = { user_id, item };
		await addToCartMutation(body);
	};

	return { removeFromCart };
};

export default useRemoveFromCart;
