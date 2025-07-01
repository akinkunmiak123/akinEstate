import React from 'react'
import './Partners.css'
import { partners } from '../data/Data'




const Partners = () => {
    return (
      <section className="partners-section">
        <div className="partners-heading">
          <h2>OUR PARTNERS</h2> 
          <div className="underline" />
        </div>
        <div className="partners-logos">
          {partners.map((partner, index) => (
            <a
              key={index}
              href={partner.url}
              target="_blank"
              rel="noopener noreferrer"
              className="partner-card"
            >
              <img src={partner.image} alt={partner.name} />
            </a>
          ))}
        </div>
      </section>
    )
}

export default Partners
