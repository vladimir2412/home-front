import { useAddProductToCartMutation } from '../store/services/shopApi';

const useAddToCart = () => {
	const [addToCartMutation] = useAddProductToCartMutation();

	const addToCart = async (id: number) => {
		const user_id = Number(localStorage.getItem('id'));
		const item = {
			id_tovara: id,
			quantity: 1,
		};
		const body = { user_id, item };
		await addToCartMutation(body);
	};

	return { addToCart };
};

export default useAddToCart;
