import {
	useGetUsersQuery,
	useRemoveUserMutation,
	useUpdateUserMutation,
} from '../../../store/services/shopApi';
import styles from '../../../styles/modules/AdminTables.module.scss';
import Sidebar from '../../sidebar/Sidebar';
const UsersTable = () => {
	const { data, isLoading } = useGetUsersQuery();
	const [updateUser] = useUpdateUserMutation();
	const [removeUser] = useRemoveUserMutation();
	const handleDelete = (id: number) => {
		removeUser(id);
	};
	return (
		<div style={{ display: 'flex' }}>
			<Sidebar />

			<div className={styles.container}>
				<p>Таблиця Юзерів</p>

				<table className={styles.table}>
					<thead>
						<tr>
							<th>ID</th>
							<th>Login</th>
							<th>Role</th>
							<th>Actions</th>
						</tr>
					</thead>
					{isLoading ? (
						'Loading...'
					) : (
						<tbody>
							{data?.map((user) => {
								return (
									<tr key={user.id}>
										<td>{user.id}</td>
										<td>{user.login}</td>
										<td>{user.role}</td>
										<td>
											<button>Update</button>
											<button onClick={() => handleDelete(user.id)}>Delete</button>
										</td>
									</tr>
								);
							})}
						</tbody>
					)}
				</table>
			</div>
		</div>
	);
};

export default UsersTable;
