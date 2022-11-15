import { Button } from '../components'
import { useMap, usePlaces } from '../hooks'

export const ButtonMyLocation = () => {
	const { map, isMapReady } = useMap()
	const { userLocation } = usePlaces()

	const handleClick = () => {
		if (!isMapReady) throw new Error('El mapa no esta listo.')
		if (!userLocation) throw new Error('No hay una ubicación de usuario.')
		map?.flyTo({
			zoom: 12,
			center: userLocation,
		})
	}

	return (
		<Button
			onClick={handleClick}
			sx={{
				position: 'fixed',
				top: '1rem',
				right: '1rem',
				'@media screen and (min-width: 64rem)': {
					top: '1.5rem',
					right: '1.5rem',
				},
			}}
		>
			Mi Ubicación
		</Button>
	)
}
