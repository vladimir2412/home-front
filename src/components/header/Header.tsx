import { useGetCartByIdQuery } from '../../store/services/shopApi';
import styles from './header.module.scss';
import { Link } from 'react-router-dom';
const Header = () => {
	const id = Number(localStorage.getItem('id'));
	const { data } = useGetCartByIdQuery(id);
	const cartCounter = data?.items.map((item) => item.quantity);
	const sum = cartCounter?.reduce((acc, curr) => acc + curr, 0);
	return (
		<nav className={styles.wrapper}>
			<div className={styles.navigation}>
				<Link to={'/'}>
					<svg
						width="17"
						height="17"
						viewBox="0 0 24 24"
						fill="none"
						xmlns="http://www.w3.org/2000/svg"
					>
						<path
							d="M4.455 2.025C4.59583 1.86035 4.77066 1.72817 4.96745 1.63754C5.16425 1.54691 5.37834 1.49999 5.595 1.5H18.405C18.6217 1.49999 18.8358 1.54691 19.0325 1.63754C19.2293 1.72817 19.4042 1.86035 19.545 2.025L23.4585 6.591C23.8079 6.99875 24 7.51802 24 8.055V8.4375C24.0001 9.17996 23.7682 9.9039 23.3367 10.5081C22.9053 11.1124 22.2958 11.5667 21.5935 11.8076C20.8912 12.0485 20.1312 12.064 19.4197 11.8519C18.7082 11.6398 18.0807 11.2107 17.625 10.6245C17.2922 11.0532 16.8657 11.4 16.3783 11.6384C15.8908 11.8768 15.3552 12.0005 14.8125 12C14.2698 12.0006 13.7342 11.877 13.2467 11.6385C12.7592 11.4001 12.3327 11.0532 12 10.6245C11.6673 11.0532 11.2408 11.4001 10.7533 11.6385C10.2658 11.877 9.73019 12.0006 9.1875 12C8.64481 12.0006 8.10919 11.877 7.62168 11.6385C7.13416 11.4001 6.70771 11.0532 6.375 10.6245C5.91929 11.2107 5.29182 11.6398 4.58031 11.8519C3.86879 12.064 3.10877 12.0485 2.40649 11.8076C1.7042 11.5667 1.09473 11.1124 0.663273 10.5081C0.231813 9.9039 -8.18979e-05 9.17996 2.16968e-08 8.4375V8.055C1.89113e-05 7.51802 0.192085 6.99875 0.5415 6.591L4.4565 2.0235L4.455 2.025ZM7.125 8.4375C7.125 8.98451 7.3423 9.50911 7.72909 9.89591C8.11589 10.2827 8.64049 10.5 9.1875 10.5C9.73451 10.5 10.2591 10.2827 10.6459 9.89591C11.0327 9.50911 11.25 8.98451 11.25 8.4375C11.25 8.23859 11.329 8.04782 11.4697 7.90717C11.6103 7.76652 11.8011 7.6875 12 7.6875C12.1989 7.6875 12.3897 7.76652 12.5303 7.90717C12.671 8.04782 12.75 8.23859 12.75 8.4375C12.75 8.98451 12.9673 9.50911 13.3541 9.89591C13.7409 10.2827 14.2655 10.5 14.8125 10.5C15.3595 10.5 15.8841 10.2827 16.2709 9.89591C16.6577 9.50911 16.875 8.98451 16.875 8.4375C16.875 8.23859 16.954 8.04782 17.0947 7.90717C17.2353 7.76652 17.4261 7.6875 17.625 7.6875C17.8239 7.6875 18.0147 7.76652 18.1553 7.90717C18.296 8.04782 18.375 8.23859 18.375 8.4375C18.375 8.98451 18.5923 9.50911 18.9791 9.89591C19.3659 10.2827 19.8905 10.5 20.4375 10.5C20.9845 10.5 21.5091 10.2827 21.8959 9.89591C22.2827 9.50911 22.5 8.98451 22.5 8.4375V8.055C22.5 7.87624 22.4362 7.70336 22.32 7.5675L18.405 3H5.595L1.68 7.5675C1.56382 7.70336 1.49999 7.87624 1.5 8.055V8.4375C1.5 8.98451 1.7173 9.50911 2.10409 9.89591C2.49089 10.2827 3.01549 10.5 3.5625 10.5C4.10951 10.5 4.63411 10.2827 5.02091 9.89591C5.4077 9.50911 5.625 8.98451 5.625 8.4375C5.625 8.23859 5.70402 8.04782 5.84467 7.90717C5.98532 7.76652 6.17609 7.6875 6.375 7.6875C6.57391 7.6875 6.76468 7.76652 6.90533 7.90717C7.04598 8.04782 7.125 8.23859 7.125 8.4375ZM2.25 12.75C2.44891 12.75 2.63968 12.829 2.78033 12.9697C2.92098 13.1103 3 13.3011 3 13.5V22.5H4.5V15C4.5 14.6022 4.65804 14.2206 4.93934 13.9393C5.22064 13.658 5.60218 13.5 6 13.5H10.5C10.8978 13.5 11.2794 13.658 11.5607 13.9393C11.842 14.2206 12 14.6022 12 15V22.5H21V13.5C21 13.3011 21.079 13.1103 21.2197 12.9697C21.3603 12.829 21.5511 12.75 21.75 12.75C21.9489 12.75 22.1397 12.829 22.2803 12.9697C22.421 13.1103 22.5 13.3011 22.5 13.5V22.5H23.25C23.4489 22.5 23.6397 22.579 23.7803 22.7197C23.921 22.8603 24 23.0511 24 23.25C24 23.4489 23.921 23.6397 23.7803 23.7803C23.6397 23.921 23.4489 24 23.25 24H0.75C0.551088 24 0.360322 23.921 0.21967 23.7803C0.0790177 23.6397 2.16968e-08 23.4489 2.16968e-08 23.25C2.16968e-08 23.0511 0.0790177 22.8603 0.21967 22.7197C0.360322 22.579 0.551088 22.5 0.75 22.5H1.5V13.5C1.5 13.3011 1.57902 13.1103 1.71967 12.9697C1.86032 12.829 2.05109 12.75 2.25 12.75ZM6 22.5H10.5V15H6V22.5ZM13.5 15C13.5 14.6022 13.658 14.2206 13.9393 13.9393C14.2206 13.658 14.6022 13.5 15 13.5H18C18.3978 13.5 18.7794 13.658 19.0607 13.9393C19.342 14.2206 19.5 14.6022 19.5 15V19.5C19.5 19.8978 19.342 20.2794 19.0607 20.5607C18.7794 20.842 18.3978 21 18 21H15C14.6022 21 14.2206 20.842 13.9393 20.5607C13.658 20.2794 13.5 19.8978 13.5 19.5V15ZM18 15H15V19.5H18V15Z"
							fill="black"
						/>
					</svg>{' '}
					Shop
				</Link>
			</div>
			<div className={styles.links}>
				<Link to={'/login'}>
					<svg
						width="35"
						height="35"
						viewBox="0 0 24 24"
						fill="none"
						xmlns="http://www.w3.org/2000/svg"
					>
						<path
							d="M12 2C9.35831 2.03369 6.8343 3.09807 4.96618 4.96618C3.09807 6.8343 2.03369 9.35831 2 12C2.01235 13.5389 2.37972 15.0542 3.07351 16.4279C3.7673 17.8016 4.76879 18.9967 6 19.92V20H6.1C7.79318 21.2975 9.86685 22.0006 12 22.0006C14.1332 22.0006 16.2068 21.2975 17.9 20H18V19.92C19.2312 18.9967 20.2327 17.8016 20.9265 16.4279C21.6203 15.0542 21.9877 13.5389 22 12C21.9663 9.35831 20.9019 6.8343 19.0338 4.96618C17.1657 3.09807 14.6417 2.03369 12 2ZM8.07 18.93C8.21599 18.2614 8.58615 17.6629 9.11908 17.2336C9.65202 16.8044 10.3157 16.5702 11 16.57H13C13.6843 16.5702 14.348 16.8044 14.8809 17.2336C15.4138 17.6629 15.784 18.2614 15.93 18.93C14.7389 19.6308 13.382 20.0004 12 20.0004C10.618 20.0004 9.26113 19.6308 8.07 18.93ZM17.61 17.64C17.2296 16.7309 16.5891 15.9546 15.7689 15.4084C14.9487 14.8622 13.9854 14.5705 13 14.57H11C10.0146 14.5705 9.05127 14.8622 8.23108 15.4084C7.41088 15.9546 6.77037 16.7309 6.39 17.64C5.64066 16.903 5.0439 16.0255 4.63381 15.0578C4.22373 14.0901 4.00835 13.051 4 12C4.02594 9.88633 4.87712 7.86653 6.37183 6.37183C7.86653 4.87712 9.88633 4.02594 12 4C14.1137 4.02594 16.1335 4.87712 17.6282 6.37183C19.1229 7.86653 19.9741 9.88633 20 12C19.9916 13.051 19.7763 14.0901 19.3662 15.0578C18.9561 16.0255 18.3593 16.903 17.61 17.64Z"
							fill="black"
						/>
						<path
							d="M12 5.99996C11.4713 5.98765 10.9456 6.08269 10.4548 6.27935C9.96391 6.47601 9.51803 6.7702 9.14411 7.14411C8.7702 7.51803 8.47601 7.96391 8.27935 8.45478C8.08269 8.94565 7.98765 9.47131 7.99996 9.99996C7.98765 10.5286 8.08269 11.0543 8.27935 11.5451C8.47601 12.036 8.7702 12.4819 9.14411 12.8558C9.51803 13.2297 9.96391 13.5239 10.4548 13.7206C10.9456 13.9172 11.4713 14.0123 12 14C12.5286 14.0123 13.0543 13.9172 13.5451 13.7206C14.036 13.5239 14.4819 13.2297 14.8558 12.8558C15.2297 12.4819 15.5239 12.036 15.7206 11.5451C15.9172 11.0543 16.0123 10.5286 16 9.99996C16.0123 9.47131 15.9172 8.94565 15.7206 8.45478C15.5239 7.96391 15.2297 7.51803 14.8558 7.14411C14.4819 6.7702 14.036 6.47601 13.5451 6.27935C13.0543 6.08269 12.5286 5.98765 12 5.99996ZM12 12C11.7339 12.0128 11.4681 11.9699 11.2196 11.8739C10.9712 11.778 10.7455 11.6311 10.5572 11.4428C10.3688 11.2544 10.2219 11.0288 10.126 10.7803C10.03 10.5318 9.9871 10.266 9.99996 9.99996C9.9871 9.73391 10.03 9.46811 10.126 9.21964C10.2219 8.97116 10.3688 8.7455 10.5572 8.55716C10.7455 8.36881 10.9712 8.22195 11.2196 8.12599C11.4681 8.03003 11.7339 7.9871 12 7.99996C12.266 7.9871 12.5318 8.03003 12.7803 8.12599C13.0288 8.22195 13.2544 8.36881 13.4428 8.55716C13.6311 8.7455 13.778 8.97116 13.8739 9.21964C13.9699 9.46811 14.0128 9.73391 14 9.99996C14.0128 10.266 13.9699 10.5318 13.8739 10.7803C13.778 11.0288 13.6311 11.2544 13.4428 11.4428C13.2544 11.6311 13.0288 11.778 12.7803 11.8739C12.5318 11.9699 12.266 12.0128 12 12Z"
							fill="black"
						/>
					</svg>
				</Link>
				<Link to={'/cart'} className={styles.links__cart}>
					<svg
						width="35"
						height="35"
						viewBox="0 0 24 24"
						fill="none"
						xmlns="http://www.w3.org/2000/svg"
					>
						<path
							d="M21 9H19.58L15.868 2.504L14.132 3.496L17.277 9H6.72302L9.86902 3.496L8.13202 2.504L4.42002 9H3.00002C2.84631 9.00017 2.69472 9.03573 2.55697 9.10393C2.41923 9.17213 2.29904 9.27113 2.20572 9.39327C2.1124 9.5154 2.04846 9.65738 2.01886 9.80821C1.98926 9.95904 1.99479 10.1147 2.03502 10.263L4.83402 20.527C4.95037 20.9498 5.20213 21.3228 5.55072 21.5888C5.89931 21.8549 6.3255 21.9993 6.76402 22H17.237C18.135 22 18.929 21.395 19.167 20.525L21.966 10.262C22.0067 10.1136 22.0126 9.9578 21.9831 9.80677C21.9536 9.65574 21.8896 9.51358 21.7961 9.39138C21.7025 9.26919 21.582 9.17028 21.4439 9.10239C21.3058 9.03449 21.1539 8.99945 21 9ZM17.236 20V21V20H6.76402L4.31002 11H19.69L17.236 20Z"
							fill="black"
						/>
						<path d="M9 13H11V18H9V13ZM13 13H15V18H13V13Z" fill="black" />
					</svg>
					<p className={styles.cart__counter}>{sum ? sum : 0}</p>
				</Link>
			</div>
		</nav>
	);
};

export default Header;
