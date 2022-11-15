import { createContext } from 'react'

interface Props {
	isLoading: boolean
	userLocation?: [number, number]
	searchPlacesByQuery: (query: string) => Promise<any>
}
export const PlacesContext = createContext<Props>({} as Props)
