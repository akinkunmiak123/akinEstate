import React, { useState } from 'react'
import { list } from '../../data/Data'

const RecentCard = () => {
  const [selectedType, setSelectedType] = useState('All')

  // Handle type filter change
  const handleFilterChange = (e) => {
    setSelectedType(e.target.value)
  }

  // Filter the list based on the selected type
  const filteredList =
    selectedType === 'All'
      ? list
      : list.filter((item) => item.type === selectedType)

  return (
    <>
      {/* Filter by type */}
      <div className="filter-container">
        <select onChange={handleFilterChange} value={selectedType}>
          <option value="All">All Types</option>
          <option value="Apartment">Apartment</option>
          <option value="Bungalow">Bungalow</option>
          <option value="Offices">Offices</option>
          <option value="Homes & Villas">Homes & Villas</option>
          <option value="Commercial">Commercial</option>
        </select>
      </div>

      {/* Property cards */}
      <div className="content grid3 mtop">
        {filteredList.map((val, index) => {
          const { cover, category, location, name, price, type } = val
          return (
            <div className="box shadow" key={index}>
              <div className="img">
                <img src={cover} alt="" />
              </div>
              <div className="text">
                <div className="category flex">
                  <span
                    style={{
                      background:
                        category === 'For Sale' ? '#25b5791a' : '#ff98001a',
                      color: category === 'For Sale' ? '#25b579' : '#ff9800',
                    }}
                  >
                    {category}
                  </span>
                  <i className="fa fa-heart"></i>
                </div>
                <h4>{name}</h4>
                <p>
                  <i className="fa fa-location-dot"></i> {location}
                </p>
              </div>
              <div className="button flex">
                <div>
                  <button className="btn2">{price}</button>{' '}
                  <label htmlFor="">{type}</label>
                </div>
              </div>
            </div>
          )
        })}
      </div>
    </>
  )
}

export default RecentCard
