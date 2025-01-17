import React from 'react'
import './style.css'
import { useLocation, useHistory } from 'react-router-dom'

const DetailsPage = () => {
  const { state } = useLocation()
  const { item } = state
  const history = useHistory()

  // Handle "Back to Home" click
  const handleBackToHome = () => {
    history.push('/')
  }

  return (
    <div className="details-container">
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

      {/* Back to Home Button */}
      <button className="back-btn" onClick={handleBackToHome}>
        Back to Home
      </button>
    </div>
  )
}

export default DetailsPage
