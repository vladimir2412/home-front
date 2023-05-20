import { useGetUsersQuery } from '../../../store/services/shopApi';
import styles from './userstable.module.scss';
const UsersTable = () => {
	const { data } = useGetUsersQuery();
	console.log(data);

	return (
		<div>
			<h2 style={{ textAlign: 'center', marginTop: '20px', fontSize: '24px', fontWeight: '500' }}>
				Таблиця Юзерів
			</h2>
			<table className={styles.table}>
				<thead>
					<tr>
						<th>ID</th>
						<th>Login</th>
						<th>Role</th>
						<th>Actions</th>
					</tr>
				</thead>
				<tbody>
					{data?.map((user) => {
						return (
							<tr key={user.id}>
								<td>{user.id}</td>
								<td>{user.login}</td>
								<td>{user.role}</td>
								<td>
									<button>Update</button>
									<button>Delete</button>
								</td>
							</tr>
						);
					})}
				</tbody>
			</table>
		</div>
	);
};

export default UsersTable;
