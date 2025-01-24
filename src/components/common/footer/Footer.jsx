import React from 'react'
import { Link } from 'react-router-dom'
import './footer.css'

const Footer = () => {
  // Function to handle WhatsApp link
  const handleWhatsAppClick = () => {
    const phone = '09130000005'
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
              <p>We'll help you grow your career and growth.</p>
            </div>
            <button className="btn5" onClick={handleWhatsAppClick}>
              Message us
            </button>
          </div>
        </div>
      </section>

      <footer className="footer">
          <div className="boxs">
            <Link to="/about">About</Link>
            <Link to="/services">Services</Link>
            <Link to="/properties">Properties</Link>
          </div>
        
      </footer>
    </>
  )
}

export default Footer
