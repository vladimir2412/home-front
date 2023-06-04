import { useCallback, useEffect, useState } from 'react';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import styles from '../../../styles/modules/Cart.module.scss';
import { useJsApiLoader } from '@react-google-maps/api';
import Autocomplete from '../../mapGoogle/autocomplete/Autocomplete';
import GoogleMaps from '../../mapGoogle/GoogleMaps';

const defaultCenter = {
	lat: 50.45755841899277,
	lng: 30.517539642943504,
};
const libraries = ['places'];

const CartForm = () => {
	const [center, setCenter] = useState(defaultCenter);
	const [address, setAddress] = useState('');
	const [map, setMap] = useState(null);
	const [markerPosition, setMarkerPosition] = useState(null);
	const [directions, setDirections] = useState(null);
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

		return errors;
	};
	const handleSubmit = (values) => {
		console.log('Form Data:', values);
	};
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
				<Formik initialValues={initialValues} validate={validateForm} onSubmit={handleSubmit}>
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

						<Autocomplete
							isLoaded={isLoaded}
							onSelect={onSearchCenter}
							address={address}
							setAddress={setAddress}
							map={map}
							center={center}
							setMarkerPosition={setMarkerPosition}
							form={Form}
							field={address}
						/>

						<div className={styles.container__button}>
							<button type="submit">Make order</button>
						</div>
					</Form>
				</Formik>
			</div>
		</>
	);
};

export default CartForm;
