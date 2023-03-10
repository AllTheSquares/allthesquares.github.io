import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import NavBar from './components/topbar.jsx'
import Mouse from './components/customMouse.jsx'
import './index.css'

ReactDOM.createRoot(document.getElementById('root')).render(
    <React.StrictMode>
        <Mouse/>
        <NavBar/>
        <App/>

    </React.StrictMode>,
)