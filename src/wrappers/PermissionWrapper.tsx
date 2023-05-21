import { useGetRoleQuery } from '../store/services/shopApi';
import { Navigate } from 'react-router';
const PermissionWrapper = ({ children, allowedRole }) => {
	const { data, isLoading } = useGetRoleQuery();
	if (!isLoading) {
		const role = data;
		if (!role || !allowedRole.includes(role)) {
			return <Navigate to="/" />;
		} else {
			return children;
		}
	}
};
export default PermissionWrapper;
