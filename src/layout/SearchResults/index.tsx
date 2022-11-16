import { useState } from 'react'
import { Grid, LinearLoader } from '../../components'
import { useMap, usePlaces } from '../../hooks'
import { Feature } from '../../interfaces/places'
import { SearchItem } from './SearchItem'

export const SearchResults = () => {
	const { isLoadingPlaces, places } = usePlaces()
	const { map } = useMap()
	const [placeId, setPlaceId] = useState('')

	const onPlace = (place: Feature) => {
		const [lng, lat] = place.center
		setPlaceId(place.id)
		map?.flyTo({
			zoom: 12,
			center: [lng, lat],
		})
	}

	if (isLoadingPlaces) return <LinearLoader />

	if (!places.length) return null

	return (
		<Grid
			as='ul'
			sx={{
				padding: 0,
				margin: 0,
				listStyle: 'none',
			}}
		>
			{places.map(place => (
				<SearchItem
					key={place.id}
					title={place.text_es}
					description={place.place_name_es}
					onClick={() => onPlace(place)}
					onClickDirection={e => {
						e.stopPropagation()
						console.log('ok')
					}}
					isActive={placeId === place.id}
				/>
			))}
		</Grid>
	)
}
