import '@fontsource/nunito/300.css'; // Light
import '@fontsource/nunito/400.css'; // Regular
import '@fontsource/nunito/700.css'; // Bold
import '@fontsource/nunito/800.css'; // Extra Bold



import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.tsx'
import WelcomePage from './Pages/Main/MainPage.tsx'
import LogOut from './Pages/LogOut.tsx'
import Header from './Components/Header.tsx'
import Footer from './Components/Footer.tsx'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <Header/>
    <WelcomePage/>
    <Footer/>
    <App />
  </StrictMode>,
)
