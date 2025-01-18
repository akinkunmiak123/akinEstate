import React from 'react'
import { featured } from '../../data/Data'
import { Link } from 'react-router-dom' // Import Link for navigation

const FeaturedCard = () => {
  return (
    <>
      <div className="content grid5 mtop">
        {featured.map((item, index) => (
          <div className="box" key={index}>
            <img src={item.cover} alt={item.name} />
            <h4>{item.name}</h4>
            <label>{item.total}</label>
            <div>
              <Link to="/services" className="see-property-btn">
                See Property
              </Link>
            </div>
          </div>
        ))}
      </div>
    </>
  )
}

export default FeaturedCard
