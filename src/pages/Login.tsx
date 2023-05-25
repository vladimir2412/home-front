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
		<>
			<Header />
			<div className={styles.container}>
				<p className={styles.container__title}>Вхід</p>
				<div className={styles.form__container}>
					<div className={styles.form}>
						<Formik
							initialValues={initialValues}
							validationSchema={validationSchema}
							onSubmit={handleSubmit}
						>
							<Form>
								<div className={styles.form__group}>
									<p className={styles.form__title}>Заповніть форму</p>
									<Field
										className={styles.form__input}
										type="text"
										id="login"
										name="login"
										placeholder="Введіть логін"
									/>
									<ErrorMessage className={styles.form__error} name="login" component="div" />

									<Field
										className={styles.form__input}
										type="password"
										id="password"
										name="password"
										placeholder="Введіть пароль"
									/>
									<ErrorMessage className={styles.form__error} name="password" component="div" />
								</div>
								<div className={styles.form__button}>
									<button type="submit">Увійти</button>
								</div>
							</Form>
						</Formik>
					</div>
					<div className={styles.register}>
						<p className={styles.register__title}>Новий клієнт?</p>
						<p className={styles.register__info}>Реєстрація займе до 1 хвилини</p>
						<Link to="/register" className={styles.register__link}>
							<p>Реєстрація</p>
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
