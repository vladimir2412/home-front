import { useCallback, useEffect, useState, useRef } from 'react';
import { useActions } from '../../../hooks/useCartActions';
import { useCart } from '../../../hooks/useCart';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import ReCAPTCHA from 'react-google-recaptcha';
import { useJsApiLoader } from '@react-google-maps/api';
import Autocomplete from '../../mapGoogle/autocomplete/Autocomplete';
import GoogleMaps from '../../mapGoogle/GoogleMaps';
import styles from '../../../styles/modules/Cart.module.scss';

const libraries = ['places'];

const CartForm = ({ shopId, submitOrder }) => {
	const formRef = useRef(null);
	let defaultCenter = {};

	switch (shopId) {
		case 0:
			defaultCenter = {
				lat: 50.45755841899277,
				lng: 30.517539642943504,
			};
			break;
		case 1:
			defaultCenter = {
				lat: 46.472583417020104,
				lng: 30.744547832728976,
			};
			break;
		case 2:
			defaultCenter = {
				lat: 48.461018547196616,
				lng: 35.05123319092612,
			};
			break;
		default:
			defaultCenter = {
				lat: 50.45755841899277,
				lng: 30.517539642943504,
			};
			break;
	}
	const { cart } = useCart();
	const { clearCart } = useActions();
	const [center, setCenter] = useState(defaultCenter);
	const [address, setAddress] = useState('');
	const [map, setMap] = useState(null);
	const [markerPosition, setMarkerPosition] = useState(null);
	const [directions, setDirections] = useState(null);
	const [cartData, setCartData] = useState(null);
	const [captchaValue, setCaptchaValue] = useState(null);
	const [captchaVerified, setCaptchaVerified] = useState(false);
	const [showRecaptcha, setShowRecaptcha] = useState(false);

	const onSearchCenter = useCallback((address) => {
		setAddress(address);
		setCenter(defaultCenter);
	}, []);

	const onMapClick = (location) => {
		const clickedCoordinates = {
			lat: location.latLng.lat(),
			lng: location.latLng.lng(),
		};
		setMarkerPosition(clickedCoordinates);
		const geocoder = new window.google.maps.Geocoder();
		geocoder.geocode({ location: clickedCoordinates }, (results, status) => {
			if (status === 'OK') {
				if (results[0]) {
					const clickedAddress = results[0].formatted_address;
					setAddress(clickedAddress);
				} else {
					console.error('No results found');
				}
			} else {
				console.error('Geocoder failed due to: ' + status);
			}
		});
	};
	const { isLoaded } = useJsApiLoader({
		id: 'google-map-script',
		googleMapsApiKey: import.meta.env.VITE_GOOGLE_MAPS_API_KEY,
		libraries,
	});

	useEffect(() => {
		const cartDataFromLocalStorage = localStorage.getItem('cartData');
		setCartData(cartDataFromLocalStorage);
	}, []);

	useEffect(() => {
		localStorage.setItem('cartData', cartData);
	}, [cartData]);

	const fetchDirections = (origin, destination) => {
		const directionsService = new window.google.maps.DirectionsService();
		directionsService.route(
			{
				origin: origin,
				destination: destination,
				travelMode: 'DRIVING',
			},
			(result, status) => {
				if (status === 'OK') {
					setDirections(result);
				}
			},
		);
	};

	useEffect(() => {
		if (map && markerPosition) {
			const origin = defaultCenter;
			const destination = markerPosition;
			fetchDirections(origin, destination);
		}
	}, [map, markerPosition]);

	const onChange = (value) => {
		if (value) {
			setCaptchaValue(value);
			setCaptchaVerified(true);
			setTimeout(() => {
				if (formRef.current) {
					formRef.current.handleSubmit();
				}
			}, 10);
			setTimeout(() => {
				setShowRecaptcha(false);
			}, 1000);
		}
	};
	const handleSubmit = async (values, { setSubmitting }) => {
		try {
			if (captchaVerified) {
				const cartItems = JSON.stringify(cart.items);
				const formData = {
					...values,
					items: cartItems,
				};

				await submitOrder(formData);
				alert(`Thank you for your order!Expect a call from the delivery service`);

				clearCart();
			}
		} catch (error) {
			console.error('Error submitting order:', error);
		} finally {
			setSubmitting(false);
		}
	};
	const handleModalClick = (event) => {
		if (event.target === event.currentTarget) {
			setShowRecaptcha(false);
		}
	};
	const initialValues = {
		name: '',
		phone: '',
		email: '',
		address: '',
	};

	const validateForm = (values) => {
		const errors = {};

		if (!values.name) {
			errors.name = 'Name is required';
		} else if (values.name.length < 4) {
			errors.name = 'Name must be at least 4 characters long';
		}
		if (!values.phone) {
			errors.phone = 'Phone number is required';
		} else if (!/^(\+380)\d{9}$/.test(values.phone)) {
			errors.phone = 'Invalid phone number format';
		}
		if (!values.email) {
			errors.email = 'Email is required';
		} else if (!/^[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.[A-Za-z]{2,}$/.test(values.email)) {
			errors.email = 'Invalid email address!';
		}
		if (!values.address) {
			errors.address = 'Required';
		}

		return errors;
	};
	return (
		<>
			{isLoaded ? (
				<GoogleMaps
					center={defaultCenter}
					markerPosition={markerPosition}
					defaultMarker={defaultCenter}
					onMapClick={onMapClick}
					setMap={setMap}
					directions={directions}
				/>
			) : (
				<div>Loading...</div>
			)}

			<div className={styles.form}>
				<Formik
					innerRef={formRef}
					initialValues={initialValues}
					validate={validateForm}
					onSubmit={handleSubmit}
				>
					{(props: FormikProps<Values>) => (
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
								id="phone"
								name="phone"
								placeholder="Phone number"
							/>
							<ErrorMessage className={styles.form__error} name="phone" component="div" />
							<Field
								className={styles.form__input}
								type="text"
								id="email"
								name="email"
								placeholder="Email"
							/>
							<ErrorMessage className={styles.form__error} name="email" component="div" />
							<Autocomplete
								name={'address'}
								isLoaded={isLoaded}
								onSelect={onSearchCenter}
								address={address}
								setAddress={setAddress}
								map={map}
								center={center}
								setMarkerPosition={setMarkerPosition}
							/>

							{showRecaptcha && (
								<div className={styles.form__modal} onClick={handleModalClick}>
									<div className={styles.form__captcha}>
										<ReCAPTCHA
											sitekey={import.meta.env.VITE_GOOGLE_RECAPCHA_API_KEY}
											onChange={onChange}
										/>
									</div>
								</div>
							)}
							<div className={styles.container__button}>
								<button type="submit" onClick={() => setShowRecaptcha(true)}>
									Make order
								</button>
							</div>
						</Form>
					)}
				</Formik>
			</div>
		</>
	);
};

export default CartForm;
