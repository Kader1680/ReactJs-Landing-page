import { useState } from 'react'
import { NavLink } from 'react-router-dom'


const Navbar = () => {
  const [showNavbar, setShowNavbar] = useState(false)

  const handleShowNavbar = () => {
    setShowNavbar(!showNavbar)
  }

  return (
    <nav class="navbar">
      <div class="container">
        <div class="logo fs-4">
            Landy
        </div>
        <div class="menu-icon" onClick={handleShowNavbar}>
          <i class="fa-solid fa-bars d-sm-none"></i>
        </div>
        <div class={`nav-elements ${showNavbar && 'active'}`}>
          <ul>
            <li>
              <a href='#'>Home</a>
            </li>
            <li>
              <a href='#'>About</a>
            </li>
            <li>
              <a href='#'>Mission</a>
            </li>
            <li>
              <a href='#'>Product</a>
            </li>
            <li>
              <a href='#'>Contact</a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  )
}

export default Navbar