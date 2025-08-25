import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { BrowserRouter } from 'react-router-dom'  // <-- import BrowserRouter
import App from './App.jsx'
import './globals.css'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <BrowserRouter basename="/Pyari-Walls">  {/* <-- add basename */}
      <App />
    </BrowserRouter>
  </StrictMode>,
)
