import React from 'react';
import { useParams } from 'react-router';
const ProductInfoPage = () => {
	const { id } = useParams();
	return <div>{id}</div>;
};

export default ProductInfoPage;
