import { Formik, Form, Field, ErrorMessage } from 'formik';
import { useNavigate } from 'react-router';
import { useSubmitOrderMutation } from '../../../store/services/shopApi';
import styles from '../../../styles/modules/Cart.module.scss';

const CartForm = () => {
	const navigate = useNavigate();

	const [submitOrder] = useSubmitOrderMutation();
	const handleSubmit = async (values) => {
		const user_id = Number(localStorage.getItem('id'));

		try {
			await submitOrder({ user_id, userInfo: values });
			alert('Замовлення оформлено');
			navigate('/');
			console.log(values);
		} catch (error) {
			console.error('Error submitting order:', error);
		}
	};

	const initialValues = {
		name: '',
		phoneNumber: '',
		address: '',
	};

	const validateForm = (values) => {
		const errors = {};

		if (!values.name) {
			errors.name = 'Required';
		}

		if (!values.phoneNumber) {
			errors.phoneNumber = 'Required';
		}

		if (!values.address) {
			errors.address = 'Required';
		}

		return errors;
	};

	return (
		<>
			<div className={styles.form}>
				<Formik initialValues={initialValues} onSubmit={handleSubmit} validate={validateForm}>
					<Form>
						<Field
							className={styles.form__input}
							type="text"
							id="name"
							name="name"
							placeholder="Name"
						/>
						<ErrorMessage className={styles.form__error} name="name" component="div" />

						<Field
							className={styles.form__input}
							type="text"
							id="phoneNumber"
							name="phoneNumber"
							placeholder="Phone number"
						/>
						<ErrorMessage className={styles.form__error} name="phoneNumber" component="div" />

						<Field
							className={styles.form__input}
							type="text"
							id="address"
							name="address"
							placeholder="Address"
						/>
						<ErrorMessage className={styles.form__error} name="address" component="div" />
						<div className={styles.container__button}>
							<button type="submit">Make an order</button>
						</div>
					</Form>
				</Formik>
			</div>
		</>
	);
};

export default CartForm;
