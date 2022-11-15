import { useEffect, useReducer } from 'react'
import { searchApi } from '../../apis'
import { getCurrentPosition } from '../../helpers'
import { Feature, PlacesResponse } from '../../interfaces/places'
import { PlacesContext } from './PlacesContext'
import { placesReducer } from './placesReducer'

export interface PlacesState {
	isLoading: boolean
	userLocation?: [number, number]
	isLoadingPlaces: boolean
	places: Feature[]
}

const INITIAL_STATE: PlacesState = {
	isLoading: true,
	userLocation: undefined,
	isLoadingPlaces: false,
	places: [],
}

export interface PlacesProviderProps {
	children: JSX.Element | JSX.Element[]
}

export const PlacesProvider = ({ children }: PlacesProviderProps) => {
	const [state, dispatch] = useReducer(placesReducer, INITIAL_STATE)

	const searchPlacesByQuery = async (query: string): Promise<Feature[]> => {
		if (!query.length) return []
		if (!state.userLocation) throw new Error('No hay ubicación del usuario.')

		dispatch({ type: 'startLoadingPlaces' })

		const res = await searchApi.get<PlacesResponse>(`/${query}.json`, {
			params: {
				proximity: state.userLocation.join(','),
			},
		})

		dispatch({ type: 'setPlaces', payload: res.data.features })

		return res.data.features
	}

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
				searchPlacesByQuery,
			}}
		>
			{children}
		</PlacesContext.Provider>
	)
}
