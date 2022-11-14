import { PlacesProvider } from './context'
import { HomePage } from './pages'

export const App = () => {
	return (
		<PlacesProvider>
			<HomePage />
		</PlacesProvider>
	)
}
