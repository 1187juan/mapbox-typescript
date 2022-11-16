import { Map, Marker, Popup } from 'mapbox-gl'
import { useEffect, useReducer } from 'react'
import { usePlaces } from '../../hooks'
import { MapContext } from './MapContext'
import { mapReducer } from './mapReducer'

export interface MapState {
	isMapReady: boolean
	map?: Map
	markers: Marker[]
}

const INITIAL_STATE: MapState = {
	isMapReady: false,
	map: undefined,
	markers: [],
}

interface Props {
	children: JSX.Element | JSX.Element
}

export const MapProvider = ({ children }: Props) => {
	const [state, dispatch] = useReducer(mapReducer, INITIAL_STATE)
	const { places } = usePlaces()

	const setMap = (map: Map) => {
		const popup = new Popup().setHTML(`
    <h3>Mi ubicación</h3>
    <p>Ubicación actual.</p>
    `)

		new Marker({
			color: '#00cdff',
		})
			.setLngLat(map.getCenter())
			.setPopup(popup)
			.addTo(map)

		dispatch({ type: 'setMap', payload: map })
	}

	const getRouteBetweenPoints = async (
		pointStart: [number, number],
		pointEnd: [number, number]
	) => {}

	useEffect(() => {
		state.markers.forEach(marker => marker.remove())
		const newMarkers: Marker[] = []

		for (const place of places) {
			const [lng, lat] = place.center
			const popup = new Popup().setHTML(`
			<H3>${place.text_es}</h3>
			<p>${place.place_name_es}</p>
			`)
			const newMarker = new Marker()
				.setPopup(popup)
				.setLngLat([lng, lat])
				.addTo(state.map!)

			newMarkers.push(newMarker)
		}

		dispatch({ type: 'setMarkers', payload: newMarkers })
	}, [places])

	return (
		<MapContext.Provider
			value={{
				...state,
				setMap,
				getRouteBetweenPoints,
			}}
		>
			{children}
		</MapContext.Provider>
	)
}
