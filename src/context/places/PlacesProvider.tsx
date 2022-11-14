import { useEffect, useReducer } from 'react'
import { getCurrentPosition } from '../../helpers'
import { PlacesContext } from './PlacesContext'
import { placesReducer } from './placesReducer'

export interface PlacesState {
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
	const [state, dispatch] = useReducer(placesReducer, INITIAL_STATE)

	useEffect(() => {
		getCurrentPosition()
			.then(coords => dispatch({ type: 'setUserLocation', payload: coords }))
			.catch(err => {
				console.error(err)
				alert('No se pudo obtener tu ubicación.')
			})
	}, [])

	return (
		<PlacesContext.Provider
			value={{
				...state,
			}}
		>
			{children}
		</PlacesContext.Provider>
	)
}
