import { Formik, Field, ErrorMessage, Form } from 'formik';
import * as Yup from 'yup';
import { useCreateProductMutation } from '../../store/services/shopApi';
const AddProduct = () => {
	const [createProduct, {}] = useCreateProductMutation();

	// Обработчик отправки формы
	const handleSubmit = async (values, { setSubmitting }) => {
		try {
			console.log(values);
			const response = await createProduct(values);
			// const response = await axios.post('http://example.com/api/submit', values);
			console.log('Данные успешно отправлены на сервер:', response);
		} catch (error) {
			console.error('Ошибка при отправке данных на сервер:', error);
		} finally {
			setSubmitting(false);
		}
	};

	// Инициализация начальных значений формы
	const initialValues = {
		name: '',
		property1: '',
		property2: '',
		price: '',
		img: '',
	};

	// Валидация полей формы
	const validationSchema = Yup.object().shape({
		name: Yup.string().required('Обязательное поле'),
		property1: Yup.number().required('Обязательное поле'),
		property2: Yup.number().required('Обязательное поле'),
		price: Yup.number().required('Обязательное поле'),
		img: Yup.string().required('Обязательное поле'),
	});

	return (
		<Formik
			initialValues={initialValues}
			validationSchema={validationSchema}
			onSubmit={handleSubmit}
		>
			<Form>
				<div>
					<label htmlFor="name">Название</label>
					<Field type="text" id="name" name="name" />
					<ErrorMessage name="name" component="div" />
				</div>

				<div>
					<label htmlFor="property1">Свойство 1</label>
					<Field type="text" id="property1" name="property1" />
					<ErrorMessage name="property1" component="div" />
				</div>

				<div>
					<label htmlFor="property2">Свойство 2</label>
					<Field type="text" id="property2" name="property2" />
					<ErrorMessage name="property2" component="div" />
				</div>

				<div>
					<label htmlFor="price">Цена</label>
					<Field type="number" id="price" name="price" />
					<ErrorMessage name="price" component="div" />
				</div>

				<div>
					<label htmlFor="img">Изображение</label>
					<Field type="text" id="img" name="img" />
					<ErrorMessage name="img" component="div" />
				</div>

				<button type="submit">Отправить</button>
			</Form>
		</Formik>
	);
};
export default AddProduct;
