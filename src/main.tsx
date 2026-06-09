import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.tsx'
import LogOut from './Pages/LogOut.tsx'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <LogOut/>
    <App />
  </StrictMode>,
)
