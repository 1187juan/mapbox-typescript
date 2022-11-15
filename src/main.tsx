import React from 'react'
import ReactDOM from 'react-dom/client'
import { App } from './App'
import './index.css'
import mapboxgl from 'mapbox-gl' // or "const mapboxgl = require('mapbox-gl');"

mapboxgl.accessToken = import.meta.env.VITE_MAPBOX_API_KEY

if (!navigator.geolocation) {
	alert('Tu navegador no soporta la Geolocation')
	throw new Error('Tu navegador no soporta la Geolocation')
}

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
	<React.StrictMode>
		<App />
	</React.StrictMode>
)
