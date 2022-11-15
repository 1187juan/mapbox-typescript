import { Loader } from '../components'
import { usePlaces } from '../hooks'

export const MapView = () => {
	const { isLoading, userLocation } = usePlaces()

	if (!isLoading)
		return (
			<Loader
				size='8rem'
				sx={{
					position: 'fixed',
					left: '50%',
					top: '50%',
					translate: '-50% -50%',
				}}
			/>
		)

	return <div>{userLocation?.join(',')}</div>
}
