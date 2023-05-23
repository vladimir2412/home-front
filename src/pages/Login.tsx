import Cookies from 'js-cookie';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import { Link } from 'react-router-dom';
import { useLoginMutation } from '../store/services/shopApi';
const Login = () => {
	const [login] = useLoginMutation();
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
			const response = await login({ login: values.login, password: values.password });
			if (response.data.success) {
				const { accessToken, refreshToken, id } = response.data;
				Cookies.set('accessToken', accessToken);
				Cookies.set('refreshToken', refreshToken);
				localStorage.setItem('isAuth', 'true');
				localStorage.setItem('id', id);
				alert('Успішна авторизація');
				window.location.href = '/';
			} else {
				alert('Невірний логін або пароль');
			}
		} catch (error) {
			console.log(error);
		} finally {
			setSubmitting(false);
		}
	};

	return (
		<div>
			<h1>Login</h1>
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
					<button type="submit">Login</button>
				</Form>
			</Formik>
			<Link to="/register">Реєстрація</Link>
		</div>
	);
};

export default Login;
