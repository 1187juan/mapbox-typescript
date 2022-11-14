import { usePlaces } from '../hooks'

export const HomePage = () => {
	const { isLoading } = usePlaces()
	console.log(isLoading)
	return <div>HomePage</div>
}
