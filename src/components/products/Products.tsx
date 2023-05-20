import React from 'react';
import { useState } from 'react';
import { useGetProductsQuery } from '../../store/services/shopApi';
import ProductCard from '../product/ProductCard';

const Products = () => {
	const { data } = useGetProductsQuery();
	return (
		<>
			<h1>List of available products:</h1>
			<div
				style={{
					marginTop: '40px',
					display: 'flex',
					flexDirection: 'column',
					rowGap: '20px',
					alignItems: 'center',
				}}
			>
				{data?.products.map((product) => {
					return (
						<ProductCard
							id={product.id_tovara}
							name={product.name}
							price={product.price}
							description={product.property1}
							discount={product.property2}
						/>
					);
				})}
			</div>
		</>
	);
};

export default Products;
