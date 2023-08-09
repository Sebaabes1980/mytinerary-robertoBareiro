import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <header>
        <a href="https://vitejs.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
        <nav>
        <ul class="navbar-nav">
          <li class="nav-item">
            <a class="nav-link" href="/index.html">Inicio</a>
          </li>
          <li class="nav-item">
            <a class="nav-link" href="/upcoming.html">Acceso Autorizado</a>
          </li>
          <li class="nav-item">
            <a class="nav-link" href="/past.html">Novedades de la DNRPA</a>
          </li>
          <li class="nav-item">
            <a class="nav-link" href="/contact.html">Formulario de contacto</a>
          </li>
          <li class="nav-item">
            <a class="nav-link" href="/stats.html">Radicación por dominio</a>
          </li>
        </ul>
      </nav>
      </header>
      <main>
        <h1>Vite + React</h1>
        <div className="card">
          <button onClick={() => setCount((count) => count + 1)}>
            count is {count}
          </button>
          <p>
            Edit <code>src/App.jsx</code> and save to test HMR
          </p>
        </div>
      </main> 
      <footer> 
      <div id="contenedor-redes">
        <a href="https://www.instagram.com/mytinerary"> <img class="imgFooter" src="/src/assets/instagram.png" alt="logo de facebook"/></a>
        <a href="https://web.facebook.com/mytinerary"> <img class="imgFooter" src="/src/assets/facebook.png" alt="logo de facebook"/> </a>
        <a href="https://web.whatsapp.com/"> <img class="imgFooter" src="/src/assets/whatsapp.png" alt="logo de whatsapp"/> </a>
      </div>
      <h1>INSTITUTO DE ESTUDIOS SUPERIORES ARGENTINO</h1>
      </footer>
    </>
  )
}

export default App
