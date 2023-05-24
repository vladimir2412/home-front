import { useAddProductToCartMutation } from '../store/services/shopApi';

const useRemoveAllFromCart = () => {
	const [addToCartMutation] = useAddProductToCartMutation();

	const removeAllFromCart = async () => {
		const user_id = Number(localStorage.getItem('id'));
		const items = []; // Пустой массив, чтобы удалить все товары из корзины
		const body = { user_id, items };
		await addToCartMutation(body);
	};

	return { removeAllFromCart };
};

export default useRemoveAllFromCart;
