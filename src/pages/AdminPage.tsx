import React from 'react';
import AddProduct from '../components/addProduct/AddProduct';
import AdminTable from '../components/adminTable/AdminTable';

const AdminPage = () => {
	return (
		<div style={{ display: 'flex', alignItems: 'center', flexDirection: 'column' }}>
			<h1>Admin Page</h1>
			<AdminTable />
		</div>
	);
};

export default AdminPage;
