import { MapProvider, PlacesProvider } from './context'
import { HomePage } from './pages'

export const App = () => {
	return (
		<PlacesProvider>
			<MapProvider>
				<HomePage />
			</MapProvider>
		</PlacesProvider>
	)
}
