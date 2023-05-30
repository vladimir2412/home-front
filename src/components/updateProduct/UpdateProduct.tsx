import { Formik, Field, ErrorMessage, Form } from 'formik';
import * as Yup from 'yup';
import { useCreateProductMutation, useUpdateProductMutation } from '../../store/services/shopApi';
import styles from './updateproduct.module.scss';
import { IProduct } from '../../store/services/types';
interface UpdateProductProps {
	id_tovara: number;
	onClose: (value: boolean) => void;
}
const UpdateProduct = ({ onClose, id_tovara }: UpdateProductProps) => {
	const [updateProduct, {}] = useUpdateProductMutation();

	const handleSubmit = async (values, { setSubmitting }) => {
		onClose(false);
		try {
			const response = await updateProduct({ ...values, id_tovara });
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
		name: Yup.string().notRequired(),
		property1: Yup.number().notRequired(),
		property2: Yup.number().notRequired(),
		price: Yup.number().notRequired(),
		img: Yup.string().notRequired(),
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
							<label htmlFor="name">Title</label>
							<Field type="text" id="name" name="name" />
							<ErrorMessage name="name" component="div" />
						</div>

						<div>
							<label htmlFor="property1">Stock quantity</label>
							<Field type="text" id="property1" name="property1" />
							<ErrorMessage name="property1" component="div" />
						</div>

						<div>
							<label htmlFor="property2">Discount (in percent)</label>
							<Field type="text" id="property2" name="property2" />
							<ErrorMessage name="property2" component="div" />
						</div>

						<div>
							<label htmlFor="price">Price</label>
							<Field type="number" id="price" name="price" />
							<ErrorMessage name="price" component="div" />
						</div>

						<div>
							<label htmlFor="img">Image (URL)</label>
							<Field type="text" id="img" name="img" />
							<ErrorMessage name="img" component="div" />
						</div>

						<button type="submit">Update product</button>
					</Form>
				</Formik>
			</div>
		</div>
	);
};
export default UpdateProduct;
