import React from 'react'
import { footer } from '../../data/Data'
import { Link } from 'react-router-dom'
import './footer.css'

const Footer = () => {
  // Function to handle WhatsApp link
  const handleWhatsAppClick = () => {
    const phone = '09068457292'
    const message = 'Hi, I need assistance.'
    const whatsappUrl = `https://wa.me/${phone}?text=${encodeURIComponent(
      message
    )}`
    window.open(whatsappUrl, '_blank')
  }

  return (
    <>
      <section className="footerContact">
        <div className="container">
          <div className="send flex">
            <div className="text">
              <h1>Do You Have Questions?</h1>
              <p>We'll help you to grow your career and growth.</p>
            </div>
            <button className="btn5" onClick={handleWhatsAppClick}>
              Contact Us Today
            </button>
          </div>
        </div>
      </section>

      <footer>
        <div className="container">
          <div className="box">
            <div className="logo">
              <img src="../images/logo-light.png" alt="" />
              <h2>Do You Need Help With Anything?</h2>
              <p>
                Receive updates, hot deals, tutorials, discounts sent straight
                to your inbox every month.
              </p>

              <div className="input">
                <button onClick={handleWhatsAppClick}>Contact Us</button>
              </div>
            </div>
          </div>

          {footer.map((val, index) => (
            <div className="box" key={index}>
              <h3>{val.title}</h3>
              <ul>
                {val.text.map((items, idx) => (
                  <li key={idx}>
                    <Link to={items.path}>{items.list}</Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </footer>
      <div className="legal">
        {/* <span>
          © 2025 FindVille. Designed By{' '}
          <span className="green">Akk Technology.</span>
        </span> */}
      </div>
    </>
  )
}

export default Footer
