import React, { useState } from 'react'
import './header.css'
import { nav } from '../../data/Data'
import { NavLink } from 'react-router-dom'
import logo from '../../images/logo.png'

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen)
  }

  const handleLinkClick = () => {
    if (window.innerWidth <= 768) {
      setIsMenuOpen(false) // Close the menu on link click for mobile
    }
  }

  return (
    <header className="header">
      <div className="header-container flex">
        <div className="header-logo">
          {/* Logo as a clickable link to the home page */}
          <NavLink to="/" onClick={handleLinkClick}>
            <img src={logo} alt="Logo" />
          </NavLink>
        </div>
        <div className="header-menu-icon" onClick={toggleMenu}>
          <span>{isMenuOpen ? 'Close' : 'Menu'}</span>
        </div>
        <nav className={`header-nav ${isMenuOpen ? 'open' : ''}`}>
          <ul>
            {nav.map((list, index) => (
              <li key={index}>
                <NavLink
                  to={list.path}
                  className="header-nav-link"
                  activeClassName={list.path === '/' ? '' : 'active'}
                  onClick={handleLinkClick} // Close the menu on link click
                >
                  {list.text}
                </NavLink>
              </li>
            ))}
          </ul>
        </nav>
      </div>
    </header>
  )
}

export default Header
