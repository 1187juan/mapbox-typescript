import { Map, Marker, Popup } from 'mapbox-gl'
import { useReducer } from 'react'
import { MapContext } from './MapContext'
import { mapReducer } from './mapReducer'

export interface MapState {
	isMapReady: boolean
	map?: Map
}

const INITIAL_STATE: MapState = {
	isMapReady: false,
	map: undefined,
}

interface Props {
	children: JSX.Element | JSX.Element
}

export const MapProvider = ({ children }: Props) => {
	const [state, dispatch] = useReducer(mapReducer, INITIAL_STATE)

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

	return (
		<MapContext.Provider
			value={{
				...state,
				setMap,
			}}
		>
			{children}
		</MapContext.Provider>
	)
}
