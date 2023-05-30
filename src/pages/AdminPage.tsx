import Sidebar from '../components/sidebar/Sidebar';
import styles from '../styles/modules/AdminPage.module.scss';

const AdminPage = () => {
	return (
		<div className={styles.container}>
			<Sidebar />
			<h1>Admin Page</h1>
		</div>
	);
};

export default AdminPage;
