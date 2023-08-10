import { useState } from 'react'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <header>
        <a href="/index.html" target="_blank">
          <img src="/src/assets/usuario.png" alt="logo de usuario" />
        </a>
        <h1>My Tinerary</h1>
        <nav>
          <ul class="navbar-nav">
            <li class="nav-item">
              <a class="nav-link" href="/index.html">Home</a>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="/stats.html">Cities</a>
            </li>
          </ul>
        </nav>
      </header>
      <main>
        <article>
          <h1>Find the perfect destination</h1>
          <h5>Our app will help you find the perfect path for your next trip. With an easy-to-use interface and a host of itinerary options, planning your next trip has never been easier.</h5>
          <button href="/index.html"> View More  </button>
        </article>
        <img src="/src/assets/BsAs.jpg" alt='foto de Buenos Aires'/>
      </main> 
      <footer> 
      <div id="contenedor-redes">
        <a href="https://www.instagram.com/mytinerary"> <img class="imgFooter" src="/src/assets/instagram.png" alt="logo de facebook"/></a>
        <a href="https://web.facebook.com/mytinerary"> <img class="imgFooter" src="/src/assets/facebook.png" alt="logo de facebook"/> </a>
        <a href="https://web.whatsapp.com/"> <img class="imgFooter" src="/src/assets/whatsapp.png" alt="logo de whatsapp"/> </a>
      </div>
      <h1>Powered by Minhub</h1>
      </footer>
    </>
  )
}

export default App
