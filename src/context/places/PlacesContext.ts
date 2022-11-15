import { createContext } from 'react'
import { Feature } from '../../interfaces/places'

interface Props {
	isLoading: boolean
	userLocation?: [number, number]
	searchPlacesByQuery: (query: string) => Promise<Feature[]>
	isLoadingPlaces: boolean
	places: Feature[]
}
export const PlacesContext = createContext<Props>({} as Props)
