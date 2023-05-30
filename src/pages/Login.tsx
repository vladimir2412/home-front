import Cookies from 'js-cookie';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import { Link } from 'react-router-dom';
import { useLoginMutation } from '../store/services/shopApi';
import Header from '../components/header/Header';
import Footer from '../components/footer/Footer';
import styles from '../styles/modules/Auth.module.scss';
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
			if (response?.data?.success) {
				const { accessToken, refreshToken, id } = response.data;
				Cookies.set('accessToken', accessToken);
				Cookies.set('refreshToken', refreshToken);
				localStorage.setItem('isAuth', 'true');
				localStorage.setItem('id', id);
				alert('Successful authorization');
				window.location.href = '/';
			} else {
				alert('Incorrect login or password');
			}
		} catch (error) {
			console.log(error);
		} finally {
			setSubmitting(false);
		}
	};

	return (
		<>
			<Header />
			<div className={styles.container}>
				<p className={styles.container__title}>Login</p>
				<div className={styles.form__container}>
					<div className={styles.form}>
						<Formik
							initialValues={initialValues}
							validationSchema={validationSchema}
							onSubmit={handleSubmit}
						>
							<Form>
								<div className={styles.form__group}>
									<p className={styles.form__title}>Fill out the form</p>
									<Field
										className={styles.form__input}
										type="text"
										id="login"
										name="login"
										placeholder="Enter your login"
									/>
									<ErrorMessage className={styles.form__error} name="login" component="div" />

									<Field
										className={styles.form__input}
										type="password"
										id="password"
										name="password"
										placeholder="Enter your password"
									/>
									<ErrorMessage className={styles.form__error} name="password" component="div" />
								</div>
								<div className={styles.form__button}>
									<button type="submit">Login</button>
								</div>
							</Form>
						</Formik>
					</div>
					<div className={styles.register}>
						<p className={styles.register__title}>New customer?</p>
						<p className={styles.register__info}>Registration takes up to 1 minute</p>
						<Link to="/register" className={styles.register__link}>
							<p>Registration</p>
						</Link>
					</div>
				</div>
			</div>
			<div style={{ height: '22vh' }}></div>
			<Footer />
		</>
	);
};

export default Login;
