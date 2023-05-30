import { Link } from 'react-router-dom';
import styles from '../../styles/modules/Sidebar.module.scss';

const Sidebar = () => {
	return (
		<div className={styles.sidebar}>
			<ul className={styles.sidebar__list}>
				<li className={styles.sidebar__item}>
					<Link to="/admin/products-table">
						<p>Product table</p>
					</Link>
				</li>
				<li className={styles.sidebar__item}>
					<Link to="/admin/orders-table">
						<p>Order table</p>
					</Link>
				</li>
				<li className={styles.sidebar__item}>
					<Link to="/admin/users-table">
						<p>Users table</p>
					</Link>
				</li>
			</ul>
		</div>
	);
};

export default Sidebar;
