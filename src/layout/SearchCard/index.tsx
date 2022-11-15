import { ChangeEvent, useRef } from 'react'
import { Grid, Input } from '../../components'
import { Container } from './Container'

export const SearchCard = () => {
	const debounceRef = useRef<number | undefined>()

	const onQueryChange = (e: ChangeEvent<HTMLInputElement>) => {
		debounceRef.current && clearTimeout(debounceRef.current)
		debounceRef.current = setTimeout(() => {
			console.log(e.target.value)
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
