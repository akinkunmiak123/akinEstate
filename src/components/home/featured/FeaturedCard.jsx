import React from 'react'
import { featured } from '../../data/Data'

const FeaturedCard = () => {
  return (
    <>
      <div className="content grid5 mtop">
        {featured.map((item, index) => (
          <div className="box" key={index}>
            <img src={item.cover} alt={item.name} />
            <h4>{item.name}</h4>
            <label>{item.total}</label>
            <p>{item.desc}</p> {/* Description in light gray and smaller */}
          </div>
        ))}
      </div>
    </>
  )
}

export default FeaturedCard
