import React from 'react'
import ReactDOM from 'react-dom/client'
import { App } from './App'
import './index.css'

if (!navigator.geolocation) {
	alert('Tu navegador no soporta la Geolocation')
	throw new Error('Tu navegador no soporta la Geolocation')
}

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
	<React.StrictMode>
		<App />
	</React.StrictMode>
)
