import React, { useState } from 'react'
import { list } from '../../data/Data'
import { useHistory } from 'react-router-dom'

const RecentCard = () => {
  const [selectedType, setSelectedType] = useState('All')
  const history = useHistory()

  // Handle type filter change
  const handleFilterChange = (e) => {
    setSelectedType(e.target.value)
  }

  // Filter the list based on the selected type
  const filteredList =
    selectedType === 'All'
      ? list
      : list.filter((item) => item.type === selectedType)

  // Handle "Read More" click
  const handleReadMore = (item) => {
    history.push(`/details/${item.id}`, { item })
  }

  // Handle "Chat to Purchase" click
  const handleChatToPurchase = (name) => {
    const phone = '09068457292'
    const message = `Hello, I am interested in purchasing ${name}.`
    const whatsappUrl = `https://wa.me/${phone}?text=${encodeURIComponent(
      message
    )}`
    window.open(whatsappUrl, '_blank')
  }

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
          const { id, cover, category, location, name, type } = val
          return (
            <div className="box shadow" key={id}>
              <div className="img">
                <img src={cover} alt={name} />
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
                <p>
                  <strong>Type:</strong> {type}
                </p>
              </div>
              <div className="button flex">
                <button
                  className="btn2 small-btn"
                  onClick={() => handleChatToPurchase(name)}
                >
                  Chat to Purchase
                </button>
                <button
                  className="btn2 small-btn"
                  onClick={() => handleReadMore(val)}
                >
                  Read More
                </button>
              </div>
            </div>
          )
        })}
      </div>
    </>
  )
}

export default RecentCard
