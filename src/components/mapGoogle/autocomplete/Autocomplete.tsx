import { useEffect, useState } from 'react';
import usePlacesAutocomplete, { getGeocode, getLatLng } from 'use-places-autocomplete';
import useOnclickOutside from 'react-cool-onclickoutside';
import styles from '../../../styles/modules/Cart.module.scss';
import { useField } from 'formik';

const Autocomplete = ({
	name,
	isLoaded,
	onSelect,
	address,
	setAddress,
	map,
	center,
	setMarkerPosition,
}) => {
	const [field, meta, helpers] = useField(name);
	const { setValue: setValueInput } = helpers;
	const [coordinates, setCoordinates] = useState('');

	const {
		ready,
		value,
		suggestions: { status, data },
		init,
		setValue,
		clearSuggestions,
	} = usePlacesAutocomplete({
		initOnMount: false,
		debounce: 300,
	});
	const ref = useOnclickOutside(() => {
		clearSuggestions();
	});

	const handleInput = (e) => {
		setValue(e.target.value);
		setAddress(e.target.value);
	};

	const handleSelect =
		({ description }) =>
		() => {
			setValue(description, false);
			clearSuggestions();

			getGeocode({ address: description }).then((results) => {
				const { lat, lng } = getLatLng(results[0]);
				setValueInput(description);
				setCoordinates(description);
				onSelect({ lat, lng });
				setMarkerPosition({ lat, lng });
			});
		};

	const renderSuggestions = () =>
		data.map((suggestion) => {
			const {
				place_id,
				structured_formatting: { main_text, secondary_text },
			} = suggestion;

			return (
				<li className={styles.list__item} key={place_id} onClick={handleSelect(suggestion)}>
					<strong>{main_text}</strong> <small>{secondary_text}</small>
				</li>
			);
		});

	useEffect(() => {
		if (isLoaded) {
			init();
		}
	}, [isLoaded, init]);

	useEffect(() => {
		if (value && value !== coordinates && value !== address) {
			setValueInput(value);
		} else if (!value && address !== coordinates) {
			setValueInput(address);
		}
	}, [value, address, coordinates]);

	return (
		<>
			<div ref={ref} className={styles.from__container}>
				<input
					type="text"
					id="address"
					name="address"
					className={styles.form__input}
					value={value || address}
					onChange={handleInput}
					disabled={!ready}
					placeholder="Choose address"
				/>
				<svg
					width="24"
					height="24"
					viewBox="0 0 24 24"
					fill="none"
					xmlns="http://www.w3.org/2000/svg"
					className={styles.shop__navigate}
					onClick={() => map.panTo(center)}
				>
					<path
						d="M12 2C8.13 2 5 5.13 5 9C5 14.25 12 22 12 22C12 22 19 14.25 19 9C19 5.13 15.87 2 12 2ZM12 11.5C11.337 11.5 10.7011 11.2366 10.2322 10.7678C9.76339 10.2989 9.5 9.66304 9.5 9C9.5 8.33696 9.76339 7.70107 10.2322 7.23223C10.7011 6.76339 11.337 6.5 12 6.5C12.663 6.5 13.2989 6.76339 13.7678 7.23223C14.2366 7.70107 14.5 8.33696 14.5 9C14.5 9.66304 14.2366 10.2989 13.7678 10.7678C13.2989 11.2366 12.663 11.5 12 11.5Z"
						fill="black"
					/>
				</svg>

				{status === 'OK' && <ul className={styles.suggestions}>{renderSuggestions()}</ul>}
			</div>
		</>
	);
};

export default Autocomplete;
