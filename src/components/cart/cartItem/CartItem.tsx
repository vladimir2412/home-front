import { useGetProductByIdQuery } from '../../../store/services/shopApi';
import useRemoveFromCart from '../../../hooks/useRemoveFromCart';
import useAddToCart from '../../../hooks/useAddToCart';
import styles from '../../../styles/modules/Cart.module.scss';
import Loader from '../../loader/PageLoader';
import useRemoveAllFromCart from '../../../hooks/useRemoveAllFromCart';
import { useState } from 'react';
import CartLoading from '../../cartLoader/CartLoader';

interface CartItemProps {
	quantity: number;
	id_tovara: number;
}

const CartItem = ({ quantity, id_tovara }: CartItemProps) => {
	const { data, isLoading } = useGetProductByIdQuery(id_tovara);
	const { addToCart } = useAddToCart();
	const { removeFromCart } = useRemoveFromCart();
	const { removeAllFromCart } = useRemoveAllFromCart();

	const [isProcessing, setIsProcessing] = useState(false);
	const [isRemovingAll, setIsRemovingAll] = useState(false);

	const handleRemoveAllFromCart = async () => {
		if (isProcessing || isRemovingAll) return;

		setIsProcessing(true);
		setIsRemovingAll(true);

		try {
			await removeAllFromCart(id_tovara);
		} catch (error) {
			// Обработка ошибки, если необходимо
		} finally {
			setIsProcessing(false);
			setIsRemovingAll(false);
		}
	};

	const handleRemoveFromCart = async () => {
		if (isProcessing || quantity <= 1) return;

		setIsProcessing(true);

		try {
			await removeFromCart(id_tovara);
		} catch (error) {
			// Обработка ошибки, если необходимо
		} finally {
			setIsProcessing(false);
		}
	};

	const handleAddToCart = async () => {
		if (isProcessing || !data?.price) return;

		setIsProcessing(true);

		try {
			await addToCart(id_tovara, data.price);
		} catch (error) {
			// Обработка ошибки, если необходимо
		} finally {
			setIsProcessing(false);
		}
	};

	return (
		<>
			{isLoading ? (
				<Loader />
			) : (
				<>
					<div className={styles.info}>
						<div className={styles.info__img}>
							<img src={data?.img} alt={data?.name} />
						</div>
						<div className={styles.info__container}>
							<div className={styles.container__title}>
								<p className={styles.container__name}>{data?.name}</p>
								<p className={styles.container__price}>{data?.price} UAH</p>
								<svg
									width="24"
									height="24"
									viewBox="0 0 24 24"
									fill="none"
									xmlns="http://www.w3.org/2000/svg"
									className={styles.container__XSvg}
									onClick={handleRemoveAllFromCart}
								>
									<path
										d="M5 20C5 20.5304 5.21071 21.0391 5.58579 21.4142C5.96086 21.7893 6.46957 22 7 22H17C17.5304 22 18.0391 21.7893 18.4142 21.4142C18.7893 21.0391 19 20.5304 19 20V8H21V6H17V4C17 3.46957 16.7893 2.96086 16.4142 2.58579C16.0391 2.21071 15.5304 2 15 2H9C8.46957 2 7.96086 2.21071 7.58579 2.58579C7.21071 2.96086 7 3.46957 7 4V6H3V8H5V20ZM9 4H15V6H9V4ZM8 8H17V20H7V8H8Z"
										fill="black"
									/>
									<path d="M9 10H11V18H9V10ZM13 10H15V18H13V10Z" fill="black" />
								</svg>
							</div>
							<div className={styles.container__paragraph}>
								<p className={styles.container__quantity}>Quantity</p>
								<span>
									<svg
										width="10"
										height="10"
										viewBox="0 0 24 24"
										fill="none"
										xmlns="http://www.w3.org/2000/svg"
										onClick={handleRemoveFromCart}
										// Добавляем disabled атрибут, чтобы заблокировать клик во время загрузки или если quantity <= 1
									>
										<path d="M5 11H19V13H5V11Z" fill="black" />
									</svg>
									{isProcessing ? <CartLoading /> : <>{quantity}</>}
									<svg
										width="10"
										height="10"
										viewBox="0 0 24 24"
										fill="none"
										xmlns="http://www.w3.org/2000/svg"
										onClick={handleAddToCart}
									>
										<path d="M19 11H13V5H11V11H5V13H11V19H13V13H19V11Z" fill="black" />
									</svg>
								</span>
							</div>
						</div>
					</div>
					<hr />
				</>
			)}
		</>
	);
};

export default CartItem;
