import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { BrowserRouter } from 'react-router-dom'

createRoot(document.getElementById('wrapper')).render(
  <BrowserRouter>
    <App/>
  </BrowserRouter>
)
