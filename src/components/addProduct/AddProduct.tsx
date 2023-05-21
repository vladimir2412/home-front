import { Formik, Field, ErrorMessage, Form } from 'formik';
import * as Yup from 'yup';
import { useCreateProductMutation } from '../../store/services/shopApi';
import styles from './addproduct.module.scss';
interface AddProductProps {
	onClose: (value: boolean) => void;
}
const AddProduct = ({ onClose }) => {
	const [createProduct, {}] = useCreateProductMutation();

	const handleSubmit = async (values, { setSubmitting }) => {
		onClose(false);
		try {
			const response = await createProduct(values);
			console.log('Дані успішно відправлені на сервер:', response);
		} catch (error) {
			console.error('Помилка при відправці даних на сервер:', error);
		} finally {
			setSubmitting(false);
		}
	};

	const initialValues = {
		name: '',
		property1: '',
		property2: '',
		price: '',
		img: '',
	};

	// Валидация полей формы
	const validationSchema = Yup.object().shape({
		name: Yup.string().required('Обов`язкове поле'),
		property1: Yup.number().required('Обов`язкове поле'),
		property2: Yup.number().required('Обов`язкове поле'),
		price: Yup.number().required('Обов`язкове поле'),
		img: Yup.string().required('Обов`язкове поле'),
	});

	return (
		<div className={styles.modalOverlay}>
			<div className={styles.modal}>
				<button onClick={() => onClose(false)} className={styles.closeBtn}>
					<svg
						xmlns="http://www.w3.org/2000/svg"
						viewBox="0 0 24 24"
						fill="none"
						stroke="currentColor"
						strokeWidth="2"
						strokeLinecap="round"
						strokeLinejoin="round"
					>
						<line x1="18" y1="6" x2="6" y2="18"></line>
						<line x1="6" y1="6" x2="18" y2="18"></line>
					</svg>
				</button>

				<Formik
					initialValues={initialValues}
					validationSchema={validationSchema}
					onSubmit={handleSubmit}
				>
					<Form>
						<div>
							<label htmlFor="name">Назва</label>
							<Field type="text" id="name" name="name" />
							<ErrorMessage name="name" component="div" />
						</div>

						<div>
							<label htmlFor="property1">Властивість 1</label>
							<Field type="text" id="property1" name="property1" />
							<ErrorMessage name="property1" component="div" />
						</div>

						<div>
							<label htmlFor="property2">Властивість 2</label>
							<Field type="text" id="property2" name="property2" />
							<ErrorMessage name="property2" component="div" />
						</div>

						<div>
							<label htmlFor="price">Ціна</label>
							<Field type="number" id="price" name="price" />
							<ErrorMessage name="price" component="div" />
						</div>

						<div>
							<label htmlFor="img">Зображення</label>
							<Field type="text" id="img" name="img" />
							<ErrorMessage name="img" component="div" />
						</div>

						<button type="submit">Додати продукт</button>
					</Form>
				</Formik>
			</div>
		</div>
	);
};
export default AddProduct;
