import axios from 'axios'

export const searchApi = axios.create({
	baseURL: 'https://api.mapbox.com/geocoding/v5/mapbox.places',
	params: {
		language: 'es',
		access_token: import.meta.env.VITE_MAPBOX_API_KEY,
		limit: 5,
	},
})
