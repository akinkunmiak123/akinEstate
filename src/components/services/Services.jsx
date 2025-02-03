import React from "react"
import './Services.css'
import img from "../images/services.jpg"
import Back from "../common/Back"
import "../home/featured/Featured.css"
import FeaturedCard from "../home/featured/FeaturedCard"
import Coach from "../coach/Coach"

const Services = () => {
  return (
    <>
      <section className="services mb">
        <Coach />
        <Back name="Services" title="We Offer" cover={img} />
        <div className="featured container" style={{marginTop:'3rem', marginBottom: '3rem' }}>
          <FeaturedCard />
        </div>
      </section>
    </>
  )
}

export default Services
