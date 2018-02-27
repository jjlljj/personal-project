import React from 'react'
import { NavLink, Link } from 'react-router-dom'
import './Nav.css'

const Nav = () => {
  return (
    <header className="nav-header">
      <h1>
        <Link to="/">
          toneDetector
        </Link>
      </h1>
      <nav>
        <div>
          <NavLink to="/analyze">
            Analyze
          </NavLink>
        </div>
        <div>
          <NavLink to="/example">
            Example
          </NavLink>
        </div>
        <div>
          <NavLink to="/tones">
            Tones
          </NavLink>
        </div>
      </nav>
    </header>
  )
}

export default Nav