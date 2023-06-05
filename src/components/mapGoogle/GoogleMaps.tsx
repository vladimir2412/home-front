import { useRef, useEffect } from 'react';
import { GoogleMap, MarkerF } from '@react-google-maps/api';
import { defaultTheme } from './Theme';
import styles from '../../styles/modules/Cart.module.scss';

const defaultOptions = {
	panControls: true,
	zoomControl: false,
	mapTypeControl: false,
	scaleControl: false,
	streetViewControl: false,
	rotateControl: false,
	clickableIcons: false,
	keyboardShortcuts: false,
	scrollwell: false,
	disableDoubleClickZoom: true,
	styles: defaultTheme,
};
const directionsRendererOptions = {
	polylineOptions: {
		strokeColor: '#ef4744',
		strokeWeight: 5,
	},
};

const GoogleMaps = ({ center, markerPosition, defaultMarker, onMapClick, setMap, directions }) => {
	const mapRef = useRef(undefined);
	const directionsRendererRef = useRef(null);
	const infoWindowRef = useRef(null);

	const onLoad = (map) => {
		mapRef.current = map;
		setMap(map);
	};

	const onUnmount = () => {
		mapRef.current = undefined;
	};
	useEffect(() => {
		if (mapRef.current) {
			if (directionsRendererRef.current) {
				directionsRendererRef.current.setMap(null);
			}

			if (directions) {
				directionsRendererRef.current = new window.google.maps.DirectionsRenderer({
					suppressMarkers: true,
					...directionsRendererOptions,
				});
				directionsRendererRef.current.setMap(mapRef.current);
				directionsRendererRef.current.setDirections(directions);
				showPopup();
			}
		}
	}, [directions]);
	useEffect(() => {
		infoWindowRef.current = new window.google.maps.InfoWindow();
	}, []);

	const showPopup = () => {
		if (infoWindowRef.current && directions && directions.routes.length > 0) {
			const duration = directions.routes[0].legs[0].duration.text;
			const distance = directions.routes[0].legs[0].distance.text;

			const content = `<div>
			<p>Takes about ${duration} </p>
			<p>Distance: ${distance}</p>
		</div>`;

			infoWindowRef.current.setContent(content);
			infoWindowRef.current.setPosition(markerPosition);
			infoWindowRef.current.open(mapRef.current);
		}
	};
	return (
		<>
			<GoogleMap
				mapContainerClassName={styles.map__container}
				center={center}
				zoom={12}
				onLoad={onLoad}
				onClick={onMapClick}
				onUnmount={onUnmount}
				options={defaultOptions}
			>
				<MarkerF
					position={defaultMarker}
					icon={{
						url: 'https://www.svgrepo.com/show/269019/placeholder-pin.svg',
						scaledSize: new window.google.maps.Size(40, 40),
					}}
				/>
				<MarkerF
					position={markerPosition}
					icon={{
						url: 'https://www.svgrepo.com/show/279177/placeholder-pin.svg',
						scaledSize: new window.google.maps.Size(40, 40),
					}}
				/>
			</GoogleMap>
		</>
	);
};

export default GoogleMaps;
