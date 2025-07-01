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
      setIsMenuOpen(false)
    }
  }

  return (
    <>
      {/* Top Info Bar */}
      <div className="top-info-bar">
        <div className="left-info">
          <div className="contact-item">
            <i className="fas fa-thumbs-up"></i> We are licensed
          </div>
          <div className="contact-item">
            <i className="fas fa-map-marker-alt"></i>{' '}
            <a
              style={{ color: 'white' }}
              href="https://www.google.com/maps/dir/?api=1&destination=6.45306%2C3.39583"
              target="_blank"
              rel="noopener noreferrer"
            >
              Sangotedo, Lagos, Nigeria
            </a>
          </div>
          <div className="contact-item">
            <i className="fas fa-phone"></i>
            <span
              className="copy-phone"
              onClick={() => navigator.clipboard.writeText('+234913 000 0004')}
            >
              (+234) 913 000 0004
            </span>
          </div>
          <div className="contact-item">
            <i className="fas fa-envelope"></i>  <a style={{color:'white'}} href="mailto:info@findvillerealty.com">
                info@findvillerealty.com
              </a>
          </div>
        </div>
        <div className="right-icons">
          {/* <i className="fab fa-facebook-f"></i>
          <i className="fab fa-youtube"></i>
          <i className="fab fa-instagram"></i> */}
        </div>
      </div>

      {/* Navigation Bar */}
      <header className="header">
        <div className="header-container flex">
          <div className="header-logo">
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
                    onClick={handleLinkClick}
                  >
                    {list.text}
                  </NavLink>
                </li>
              ))}
            </ul>
          </nav>
        </div>
      </header>
    </>
  )
}

export default Header
