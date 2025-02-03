import React from 'react'
import Heading from '../../common/Heading'
import { location } from '../../data/Data'
import './style.css'

const Location = () => {
  const whatsappNumber = '09130000004'

  return (
    <section className="location padding">
      <div className="container">
        <Heading
          title="Explore By Location"
          subtitle="Browse properties by location to find the perfect place that suits your lifestyle and preferences."
        />

        <div className="content grid3 mtop">
          {location.map((item, index) => {
            const whatsappMessage = `I'm interested in properties at ${item.name}`
            const whatsappLink = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(
              whatsappMessage
            )}`

            return (
              <div className="box" key={index}>
                <img
                  style={{ width: '100%', height: '150px' }}
                  src={item.cover}
                  alt={item.name}
                />
                <div className="overlay">
                  <h5>{item.name}</h5>
                  <p>
                    <label>{item.Villas}</label>
                    <label>{item.Offices}</label>
                    <label>{item.Apartments}</label>
                  </p>
                </div>

                {/* WhatsApp Button */}
                <div className="whatsapp-btn-container">
                  <a
                    href={whatsappLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="whatsapp-btn"
                  >
                    Secure Now
                  </a>
                </div>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}

export default Location
