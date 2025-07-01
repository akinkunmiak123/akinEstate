import { Link, useHistory } from 'react-router-dom'
import { list } from '../../data/Data'
import './footer.css'
import {
  FaMapMarkerAlt,
  FaPhoneAlt,
  FaEnvelope,
  FaFacebookF,
  FaTwitter,
  FaInstagram,
  FaYoutube,
} from 'react-icons/fa'
import { NavLink } from 'react-router-dom'
import logo from '../../images/logo.png'

const Footer = () => {
  const history = useHistory()

  // Extract unique property types
  const propertyTypes = [
    ...new Set(list.map((item) => item.type.toUpperCase())),
  ]

  const handleTagClick = (type) => {
    // Navigate to properties page with query parameter
    history.push(`/properties`)
  }


  return (
    <footer className="footer">
      <div className="footer-container">
        {/* Left Section */}
        <div className="footer-left">
          <div className="footer-logo">
            <NavLink to="/">
              <img
                style={{ height: '30%', width: '40%' }}
                src={logo}
                alt="Logo"
              />
            </NavLink>
          </div>

          <div className="footer-contact">
            <p>
              <FaMapMarkerAlt className="icon" /> Sangotedo, Lagos, Nigeria
            </p>
            <p>
              <FaPhoneAlt className="icon" />{' '}
              <span
                className="clickable-number"
                onClick={() =>
                  navigator.clipboard.writeText('+234913 000 0004')
                }
              >
                (+234) 913 000 0004
              </span>
            </p>
            <p>
              <FaEnvelope className="icon" />{' '}
              <a
                style={{ color: 'white' }}
                href="mailto:info@findvillerealty.com"
              >
                info@findvillerealty.com
              </a>
            </p>
          </div>
        </div>

        {/* Middle Section */}
        <div className="footer-middle">
          <h4>PROPERTY TYPES</h4>
          <div className="property-tags">
            {propertyTypes.map((type, index) => (
              <span key={index} onClick={() => handleTagClick(type)}>
                {type}
              </span>
            ))}
          </div>
        </div>

        {/* Right Section */}
        <div className="footer-right">
          <h4>FOLLOW US</h4>
          <div className="social-icons">
            <a
              target="_blank"
              rel="noopener noreferrer"
              href="https://web.facebook.com/findville"
            >
              <FaFacebookF />
            </a>
            <a
              target="_blank"
              rel="noopener noreferrer"
              href="https://web.facebook.com/findville"
            >
              <FaTwitter />
            </a>
            <a
              target="_blank"
              rel="noopener noreferrer"
              href="https://www.instagram.com/findville"
            >
              <FaInstagram />
            </a>
            <a
              target="_blank"
              rel="noopener noreferrer"
              href="https://www.youtube.com/@findvillerealty"
            >
              <FaYoutube />
            </a>
          </div>
          <ul className="quick-links">
            <li>
              <Link to="/blog">View Blogs</Link>
            </li>
            <li>
              <Link to="/about">About us</Link>
            </li>
            <li>
              <Link to="/contact">Contact</Link>
            </li>
            <li>
              <Link to="/properties">Properties</Link>
            </li>
          </ul>
        </div>
      </div>

      <div className="footer-bottom">
        <p>©2025 FindVille Realty | RC-1540506 | All rights reserved.</p>
      </div>
    </footer>
  )
}

export default Footer
