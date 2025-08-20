import React, { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'


const ManualComponent =function(){
  return React.createElement('a',{href:"https:google.com",target:'_blank'}, "Click to visit google")
} 

createRoot(document.getElementById('root')).render(
  
    <ManualComponent/>
  
)
