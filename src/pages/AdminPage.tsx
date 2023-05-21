import React from 'react';
import ProductsTable from '../components/adminTable/ProductsTable';
import UsersTable from '../components/adminTable/usersTable/UsersTable';
import OrdersTable from '../components/adminTable/ordersTable/OrdersTable';

const AdminPage = () => {
	return (
		<div style={{ display: 'flex', alignItems: 'center', flexDirection: 'column' }}>
			<h1 style={{ marginTop: '40px' }}>Admin Page</h1>
			<ProductsTable />
			<OrdersTable />
			<UsersTable />
		</div>
	);
};

export default AdminPage;
