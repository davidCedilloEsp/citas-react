/*
  usualmente este docuemnto no se modifica 
  este docuemnto esta enlazado a index.html y se encarga de 
  importar los componentes necesarios para que react funcione 
 */
import React from 'react'
import ReactDOM from 'react-dom/client' //todos los eventos del DOM com on click on submit etc
import App from './App.jsx'
import './index.css'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
)
