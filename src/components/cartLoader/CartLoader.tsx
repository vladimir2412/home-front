import styles from './cartLoading.module.scss';

const CartLoading = () => {
	return (
		<div className={styles.container}>
			<div className={styles.loader}></div>
		</div>
	);
};

export default CartLoading;
