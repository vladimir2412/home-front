import styles from './header.module.scss';
import { Link } from 'react-router-dom';
const Header = () => {
	const isAuth = localStorage.getItem('isAuth');
	return (
		<nav className={styles.wrapper}>
			<div className={styles.links}>
				<Link to={'/'}>Home</Link>
				<Link to={'/products'}>Products</Link>
				<Link to={'/cart'}>Cart</Link>
				<Link to={'/admin'}>Admin</Link>
			</div>
		</nav>
	);
};

export default Header;
