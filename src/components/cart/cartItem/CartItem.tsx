import { useActions } from '../../../hooks/useCartActions';
import styles from '../../../styles/modules/Cart.module.scss';
interface Props {
	title: string;
	image: string;
	price: number;
	weight: number;
	quantity: number;
	id: number;
}
const CartItem = ({ title, image, price, weight, quantity, id }: Props) => {
	const { increaseQuantity, decreaseQuantity, removeItem } = useActions();
	return (
		<>
			<div className={styles.info}>
				<div className={styles.info__img}>
					<img src={image} alt={title} />
				</div>
				<div className={styles.info__container}>
					<div className={styles.container__title}>
						<p className={styles.container__name}>{title}</p>
						<p className={styles.container__price}>{price} UAH</p>

						<svg
							width="24"
							height="24"
							viewBox="0 0 24 24"
							fill="none"
							xmlns="http://www.w3.org/2000/svg"
							className={styles.container__XSvg}
							onClick={() => removeItem(id)}
						>
							<path
								d="M5 20C5 20.5304 5.21071 21.0391 5.58579 21.4142C5.96086 21.7893 6.46957 22 7 22H17C17.5304 22 18.0391 21.7893 18.4142 21.4142C18.7893 21.0391 19 20.5304 19 20V8H21V6H17V4C17 3.46957 16.7893 2.96086 16.4142 2.58579C16.0391 2.21071 15.5304 2 15 2H9C8.46957 2 7.96086 2.21071 7.58579 2.58579C7.21071 2.96086 7 3.46957 7 4V6H3V8H5V20ZM9 4H15V6H9V4ZM8 8H17V20H7V8H8Z"
								fill="black"
							/>
							<path d="M9 10H11V18H9V10ZM13 10H15V18H13V10Z" fill="black" />
						</svg>
					</div>
					<div className={styles.container__paragraph}>
						{weight === undefined ? '' : <p>{weight} g.</p>}

						<p className={styles.container__quantity}>Quantity</p>
						<span>
							<svg
								width="10"
								height="10"
								viewBox="0 0 24 24"
								fill="none"
								xmlns="http://www.w3.org/2000/svg"
								onClick={() => decreaseQuantity(id)}
							>
								<path d="M5 11H19V13H5V11Z" fill="black" />
							</svg>
							{quantity}
							<svg
								width="10"
								height="10"
								viewBox="0 0 24 24"
								fill="none"
								xmlns="http://www.w3.org/2000/svg"
								onClick={() => increaseQuantity(id)}
							>
								<path d="M19 11H13V5H11V11H5V13H11V19H13V13H19V11Z" fill="black" />
							</svg>
						</span>
					</div>
				</div>
			</div>
			<hr />
		</>
	);
};

export default CartItem;
