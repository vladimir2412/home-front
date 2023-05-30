import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import { useRegisterMutation } from '../store/services/shopApi';
import Cookies from 'js-cookie';
import styles from '../styles/modules/Auth.module.scss';
import Header from '../components/header/Header';
import Footer from '../components/footer/Footer';
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
			if (response.data.success) {
				localStorage.setItem('isAuth', 'true');
				Cookies.set('accessToken', response.data.accessToken);
				Cookies.set('refreshToken', response.data.refreshToken);
				localStorage.setItem('id', response.data.id);
				alert('Successful registration');
				window.location.href = '/';
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
				<p className={styles.container__title}>Registration</p>
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
										placeholder="Create a login"
									/>
									<ErrorMessage className={styles.form__error} name="login" component="div" />
									<Field
										className={styles.form__input}
										type="password"
										id="password"
										name="password"
										placeholder="Create a password"
									/>
									<ErrorMessage className={styles.form__error} name="password" component="div" />
								</div>
								<div className={styles.form__button}>
									<button type="submit">Register now</button>
								</div>
							</Form>
						</Formik>
					</div>
				</div>
			</div>

			<Footer />
		</>
	);
};

export default Register;
