import React from 'react';
import styles from './productCard.module.scss';
interface ProductCardProps {
	id: number;
	name: string;
	price: number;
	description: string;
	discount: string;
}
const ProductCard = ({ id, name, price, description, discount }: ProductCardProps) => {
	return (
		<div className={styles.container}>
			<div className={styles.imageContainer}>
				<img src="https://content.rozetka.com.ua/goods/images/preview/287705067.jpg"></img>
			</div>
			<h2>{name}</h2>
			<p>{description}</p>
			<p>{discount}</p>
			<p>{price} грн</p>
		</div>
	);
};

export default ProductCard;
