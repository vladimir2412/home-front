import { useState } from 'react';
import { useGetProductsQuery } from '../store/services/shopApi';
import ProductCard from '../components/product/ProductCard';
const ProductPage = () => {
	const [count, setCount] = useState(0);
	const { data } = useGetProductsQuery();
	return (
		<>
			<h1 style={{ textAlign: 'center', marginTop: '40px', fontWeight: '500', fontSize: '32px' }}>
				List of available products:
			</h1>
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
							key={product.id_tovara}
							id={product.id_tovara}
							img={product.img}
							name={product.name}
							price={product.price}
							availableCount={product.property1}
							discount={product.property2}
						/>
					);
				})}
			</div>
		</>
	);
};
export default ProductPage;
