import { Map } from 'mapbox-gl'
import { useLayoutEffect, useRef } from 'react'
import { Box, Loader } from '../components'
import { useMap, usePlaces } from '../hooks'

export const MapView = () => {
	const { isLoading, userLocation } = usePlaces()
	const { setMap } = useMap()
	const mapDiv = useRef<HTMLDivElement>(null)

	useLayoutEffect(() => {
		if (isLoading) return

		const map = new Map({
			container: mapDiv.current!,
			style: 'mapbox://styles/mapbox/light-v10',
			center: userLocation,
			zoom: 12,
		})

		setMap(map)
	}, [isLoading])

	if (isLoading)
		return (
			<Loader
				size='6rem'
				sx={{
					position: 'fixed',
					left: '50%',
					top: '25%',
					translate: '-50% -50%',
					'@media screen and (min-width: 64rem)': {
						top: '50%',
						left: 'calc(50% + (24rem + 1.5rem) / 2)',
					},
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
				height: '50%',
				'@media screen and (min-width: 64rem)': {
					height: '100%',
					width: 'calc(100% + 1.5rem + 24rem)',
				},
			}}
		/>
	)
}
