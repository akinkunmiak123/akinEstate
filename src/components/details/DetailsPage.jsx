import React, { useState } from 'react'
import './style.css'
import { useLocation, useHistory } from 'react-router-dom'
import { list } from '../data/Data'

const DetailsPage = () => {
  const { state } = useLocation()
  const { item } = state
  const history = useHistory()

  const [searchTitle, setSearchTitle] = useState('')
  const [searchLocation, setSearchLocation] = useState('')
  const [filteredList, setFilteredList] = useState(list)

  const handleFilter = () => {
    const filtered = list.filter(
      (property) =>
        property.name.toLowerCase().includes(searchTitle.toLowerCase()) &&
        property.location.toLowerCase().includes(searchLocation.toLowerCase())
    )
    setFilteredList(filtered)
  }

  const handleReadMore = (property) => {
    history.push(`/details/${property.slug}`, { item: property })
  }

  return (
    <>
      <div className="details-page-grid">
        {/* Left Sidebar Filter */}
        <aside className="details-filter">
          <h3>Search Filter</h3>
          <input
            type="text"
            placeholder="Search by title"
            value={searchTitle}
            onChange={(e) => setSearchTitle(e.target.value)}
          />
          <input
            type="text"
            placeholder="Location"
            value={searchLocation}
            onChange={(e) => setSearchLocation(e.target.value)}
          />
          <button className="filter-btn" onClick={handleFilter}>
            Search
          </button>
        </aside>

        {/* Main Property Details */}
        <div className="details-main">
          <img src={item.cover} alt={item.name} />
          <h2>{item.name}</h2>
          <p>
            <strong>Location:</strong> {item.location}
          </p>
          <p>
            <strong>Category:</strong> {item.category}
          </p>
          <p>
            <strong>Type:</strong> {item.type}
          </p>
          <p>
            <strong>Description:</strong> {item.description}
          </p>
          <div className="feature-list">
            <strong>Features:</strong>
            <ul>
              {item.features.split(',').map((feature, index) => (
                <li key={index}>{feature.trim()}</li>
              ))}
            </ul>
          </div>

          <button className="back-btn" onClick={() => history.push('/')}>
            Back to Home
          </button>
        </div>

        {/* Smaller Property Cards Below */}
        <div className="related-properties">
          <h3>More Properties</h3>
          {filteredList.length === 0 ? (
            <p className="no-results">Can't find your property</p>
          ) : (
            <div className="property-grid">
              {filteredList.map((related) => (
                <div key={related.id} className="property-card">
                  <img src={related.cover} alt={related.name} />
                  <div className="property-card-text">
                    <h4>{related.name}</h4>
                    <p>{related.location}</p>
                  </div>
                  <p>
                    <strong>Type:</strong> {related.type}
                  </p>
                  <button onClick={() => handleReadMore(related)}>View</button>
                </div>
              ))}
            </div>
          )}
        </div>
      </div>
    </>
  )
}

export default DetailsPage
