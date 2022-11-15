import { Map } from 'mapbox-gl'
import { useLayoutEffect, useRef } from 'react'
import { Box, Loader } from '../components'
import { usePlaces } from '../hooks'

export const MapView = () => {
	const { isLoading, userLocation } = usePlaces()
	const mapDiv = useRef<HTMLDivElement>(null)

	useLayoutEffect(() => {
		if (isLoading) return

		const map = new Map({
			container: mapDiv.current!,
			style: 'mapbox://styles/mapbox/streets-v11',
			center: userLocation,
			zoom: 12,
		})
	}, [isLoading])

	if (isLoading)
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

	return (
		<Box
			ref={mapDiv}
			sx={{
				position: 'fixed',
				top: 0,
				left: 0,
				width: '100%',
				height: '100%',
			}}
		/>
	)
}