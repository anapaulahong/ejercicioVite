import { useEffect, useState } from 'react'
import './App.css'
import Router from './component/router'

function App() {

  const [rutaActual, setRutaActual] = useState("app")
  return (
    <>
      <div className='sitio-web'>
        <div className='header'>
          <button onClick={() => { setRutaActual("home") }}>Home</button>
          <button onClick={() => { setRutaActual("login") }}>Login</button>
          <button onClick={() => { setRutaActual("/images") }}>Imagen</button>
        <a href="/home">Home por ruta</a>
        <a href="/images">Imagen por ruta</a>
      </div>
      <div className='paginas'>
          <Router ruta={rutaActual}></Router> 
      </div>
    </div>
    </>
  )
}

export default App
