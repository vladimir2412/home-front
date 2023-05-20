import React from 'react';
import styles from './productCard.module.scss';
import { Link } from 'react-router-dom';
interface ProductCardProps {
	id: number;
	name: string;
	price: number;
	availableCount: number;
	discount: number;
	img: string;
}
const ProductCard = ({ id, name, price, availableCount, discount, img }: ProductCardProps) => {
	return (
		<div className={styles.container}>
			<div className={styles.imageContainer}>
				<img src={img}></img>
			</div>
			<h2>{name}</h2>
			<p>В наявності: {availableCount}</p>
			<p>Знижка до {discount}%</p>
			<p>Ціна: {price} грн</p>
			<Link to={`/products/${id}`}>
				<button>Детальніше</button>
			</Link>
		</div>
	);
};

export default ProductCard;
