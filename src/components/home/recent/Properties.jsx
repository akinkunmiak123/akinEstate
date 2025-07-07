import React, { useState } from 'react'
import { list } from '../../data/Data'
import './PropertiesPage.css'
import { useHistory } from 'react-router-dom'

const uniqueValues = (key) => [
  ...new Set(list.map((item) => item[key]).filter(Boolean)),
]

const types = uniqueValues('type')
const offers = uniqueValues('offer')
const neighborhoods = uniqueValues('neighborhood')
const bathrooms = uniqueValues('bathrooms')
const payments = uniqueValues('payment')

const PropertiesPage = () => {
  const [filters, setFilters] = useState({
    type: '',
    offer: '',
    neighborhood: '',
    keyword: '',
    bathrooms: '',
    title: '',
    id: '',
    features: '',
    payment: '',
  })

  const history = useHistory()

  const handleChange = (e) => {
    setFilters({ ...filters, [e.target.name]: e.target.value })
  }

  const handleClear = () => {
    setFilters({
      type: '',
      offer: '',
      neighborhood: '',
      keyword: '',
      bathrooms: '',
      title: '',
      id: '',
      features: '',
      payment: '',
    })
  }

  const filteredList = list.filter((item) => {
    return (
      (!filters.type ||
        item.type.toLowerCase().includes(filters.type.toLowerCase())) &&
      (!filters.offer ||
        item.offer.toLowerCase().includes(filters.offer.toLowerCase())) &&
      (!filters.neighborhood ||
        item.neighborhood
          .toLowerCase()
          .includes(filters.neighborhood.toLowerCase())) &&
      (!filters.keyword ||
        item.keyword.toLowerCase().includes(filters.keyword.toLowerCase())) &&
      (!filters.bathrooms || item.bathrooms.toString() === filters.bathrooms) &&
      (!filters.title ||
        item.name.toLowerCase().includes(filters.title.toLowerCase())) &&
      (!filters.id || item.id.toString() === filters.id) &&
      (!filters.features ||
        item.features.toLowerCase().includes(filters.features.toLowerCase())) &&
      (!filters.payment ||
        item.payment.toLowerCase().includes(filters.payment.toLowerCase()))
    )
  })

  const handleReadMore = (item) => {
    history.push(`/details/${item.slug}`, { item })
  }

  return (
    <div className="prop-container">
      <div className="prop-heading">
        <h2>Land and Houses for Sale</h2>
      </div>
      <div className="prop-layout">
        <aside className="prop-filter">
          <h3>Filter By</h3>

          <select name="type" value={filters.type} onChange={handleChange}>
            <option value="">All Types</option>
            {types.map((value) => (
              <option key={value} value={value}>
                {value}
              </option>
            ))}
          </select>

          <select name="offer" value={filters.offer} onChange={handleChange}>
            <option value="">All Offers</option>
            {offers.map((value) => (
              <option key={value} value={value}>
                {value}
              </option>
            ))}
          </select>

          <select
            name="neighborhood"
            value={filters.neighborhood}
            onChange={handleChange}
          >
            <option value="">All Neighborhoods</option>
            {neighborhoods.map((value) => (
              <option key={value} value={value}>
                {value}
              </option>
            ))}
          </select>

          <select
            name="bathrooms"
            value={filters.bathrooms}
            onChange={handleChange}
          >
            <option value="">Any Bathrooms</option>
            {bathrooms.map((value) => (
              <option key={value} value={value}>
                {value}
              </option>
            ))}
          </select>

          <input
            name="features"
            placeholder="Features"
            value={filters.features}
            onChange={handleChange}
          />

          <select
            name="payment"
            value={filters.payment}
            onChange={handleChange}
          >
            <option value="">All Payment Plans</option>
            {payments.map((value) => (
              <option key={value} value={value}>
                {value}
              </option>
            ))}
          </select>

          <button className="prop-clear-btn" onClick={handleClear}>
            Clear
          </button>
        </aside>

        <div className="prop-grid">
          {filteredList.map((item) => (
            <div key={item.id} className="prop-card">
              <div className="prop-image-wrapper">
                <img src={item.cover} alt={item.name} />
                {item.category === 'For Sale' && (
                  <span className="prop-badge">FOR SALE</span>
                )}
                {item.category === 'For Rent' && (
                  <span className="prop-badge rent">FOR RENT</span>
                )}
              </div>
              <div className="prop-card-text">
                <h4>{item.name}</h4>
                <p>{item.location}</p>
              </div>
              <p>
                <strong>Type:</strong> {item.type}
              </p>
              <div className="prop-buttons">
                <button onClick={() => handleReadMore(item)}>Details</button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

export default PropertiesPage
