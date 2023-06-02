import { useSelector } from 'react-redux';
export const useCart = () => {
	const { cart } = useSelector((state) => state);
	return { cart };
};
