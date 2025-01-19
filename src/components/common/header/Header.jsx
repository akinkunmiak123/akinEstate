import React, { useState } from 'react'
import './header.css'
import { nav as navData } from '../../data/Data'
import { NavLink } from 'react-router-dom'
import logo from '../../images/logo.png'

const Header = () => {
  const [nav, setNav] = useState(navData) // Local state for nav links
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen)
  }

  const handleLinkClick = (index) => {
    const updatedNav = nav.map((item, idx) => ({
      ...item,
      active: idx === index, // Only the clicked tab becomes active
    }))
    setNav(updatedNav)
    if (window.innerWidth <= 768) {
      setIsMenuOpen(false) // Close the menu on link click for mobile
    }
  }

  return (
    <header className="header">
      <div className="header-container flex">
        <div className="header-logo">
          <img src={logo} alt="Logo" />
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
                  className={`header-nav-link ${list.active ? 'active' : ''}`}
                  onClick={() => handleLinkClick(index)} // Handle tab click
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
