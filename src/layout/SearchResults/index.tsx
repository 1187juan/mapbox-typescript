import { Grid, LinearLoader } from '../../components'
import { usePlaces } from '../../hooks'
import { SearchItem } from './SearchItem'

export const SearchResults = () => {
	const { isLoadingPlaces, places } = usePlaces()

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
					onClick={() => console.log('first')}
					onClickDirection={e => {
						e.stopPropagation()
						console.log('ok')
					}}
					isActive={false}
				/>
			))}
		</Grid>
	)
}
