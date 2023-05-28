import React from 'react';
import cartEmptyImg from '../assets/img/empty-cart.png';
import { Link } from 'react-router-dom';
const CartEmpty = () => {
	return (
		<>
			<div className="cart cart--empty">
				<h2>Кошик пустий 😕</h2>
				<p>
					Скоріш за все, ви ще нічого не замовили.
					<br />
					Для того, щоб замовити продукт, перейдіть на головну сторінку.
				</p>
				<img src={cartEmptyImg} alt="Empty cart" />
				<Link to="/" className="button button--black">
					<span>Повернутися назад</span>
				</Link>
			</div>
		</>
	);
};

export default CartEmpty;
