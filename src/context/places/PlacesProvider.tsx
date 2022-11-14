import { PlacesContext } from './PlacesContext'

interface PlacesState {
	isLoading: boolean
	userLocation?: [number, number]
}

const INITIAL_STATE: PlacesState = {
	isLoading: true,
	userLocation: undefined,
}

export interface PlacesProviderProps {
	children: JSX.Element | JSX.Element[]
}

export const PlacesProvider = ({ children }: PlacesProviderProps) => {
	return (
		<PlacesContext.Provider
			value={{
				isLoading: true,
				userLocation: undefined,
			}}
		>
			{children}
		</PlacesContext.Provider>
	)
}
