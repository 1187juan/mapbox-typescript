import { Map } from 'mapbox-gl'
import { createContext } from 'react'

interface MapContextProps {
	isMapReady: boolean
	map?: Map
	setMap: (map: Map) => void
	getRouteBetweenPoints: (
		pointStart: [number, number],
		pointEnd: [number, number]
	) => Promise<void>
}
export const MapContext = createContext<MapContextProps>({} as MapContextProps)
