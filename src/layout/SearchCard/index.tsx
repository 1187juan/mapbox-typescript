import { ChangeEvent, useRef } from 'react'
import { Grid, Input } from '../../components'
import { usePlaces } from '../../hooks'
import { Container } from './Container'

export const SearchCard = () => {
	const debounceRef = useRef<number | undefined>()
	const { searchPlacesByQuery } = usePlaces()

	const onQueryChange = (e: ChangeEvent<HTMLInputElement>) => {
		debounceRef.current && clearTimeout(debounceRef.current)
		debounceRef.current = setTimeout(() => {
			searchPlacesByQuery(e.target.value)
				.then(data => console.log(data))
				.catch(err => console.log(err))
		}, 300)
	}

	return (
		<Container>
			<Grid
				sx={{
					position: 'sticky',
					top: 0,
					padding: '1rem',
					backgroundColor: 'var(--colors-surface)',
				}}
			>
				<Input onChange={onQueryChange} placeholder='Escribe una dirección' />
			</Grid>
		</Container>
	)
}