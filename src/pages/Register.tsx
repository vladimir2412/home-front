import { Formik, Form, Field, ErrorMessage } from 'formik';
import { useEffect } from 'react';
import * as Yup from 'yup';
import { useRegisterMutation } from '../store/services/shopApi';
import { AuthContext } from '../AuthContext';
import Cookies from 'js-cookie';
const Register = () => {
	const [register] = useRegisterMutation();
	const initialValues = {
		login: '',
		password: '',
	};

	const validationSchema = Yup.object({
		login: Yup.string().required('Login is required'),
		password: Yup.string().required('Password is required'),
	});

	const handleSubmit = async (values, { setSubmitting }) => {
		try {
			const response = await register({
				login: values.login,
				password: values.password,
				role: 'user',
			});
			localStorage.setItem('isAuth', 'true');
			Cookies.set('accessToken', response.data.accessToken);
			Cookies.set('refreshToken', response.data.refreshToken);
			localStorage.setItem('id', response.data.id);
		} catch (error) {
			console.log(error);
		} finally {
			setSubmitting(false);
		}
	};

	return (
		<>
			<Formik
				initialValues={initialValues}
				validationSchema={validationSchema}
				onSubmit={handleSubmit}
			>
				<Form>
					<div>
						<label htmlFor="login">Login</label>
						<Field type="text" id="login" name="login" />
						<ErrorMessage name="login" component="div" className="error" />
					</div>
					<div>
						<label htmlFor="password">Password</label>
						<Field type="password" id="password" name="password" />
						<ErrorMessage name="password" component="div" className="error" />
					</div>
					<button type="submit">Register</button>
				</Form>
			</Formik>
		</>
	);
};

export default Register;
