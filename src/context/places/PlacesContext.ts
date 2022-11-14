import { createContext } from 'react'

interface Props {
	isLoading: boolean
	userLocation?: [number, number]
}
export const PlacesContext = createContext<Props>({} as Props)
