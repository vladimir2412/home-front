import { useGetProductByIdQuery } from '../../store/services/shopApi';

const OrderDitails = ({ id_tovara, quantity }) => {
	const { data, isLoading } = useGetProductByIdQuery(id_tovara);
	console.log(data);
	return <></>;
};

export default OrderDitails;
