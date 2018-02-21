import React from 'react'
import { NavLink } from 'react-router-dom'
import './Nav.css'

const Nav = () => {
  return (
    <header className="nav-header">
      <h1>
        <NavLink to="/">
          SITE HEADER
        </NavLink>
      </h1>
      <nav>
        <div>
          <NavLink to="/analyzed">
            Analyzed
          </NavLink>
        </div>
        <div>
          <NavLink to="/">
            About
          </NavLink>
        </div>
      </nav>
    </header>
  )
}

export default Nav