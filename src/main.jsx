
import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import "flowbite";
import App from './App.jsx'
import "swiper/css";             
import "swiper/css/navigation";   
import "swiper/css/pagination";
import "swiper/css/grid"
import 'swiper/css/autoplay';



createRoot(document.getElementById('root')).render(


  <StrictMode>
    
  <App />
 
  </StrictMode>,
)
