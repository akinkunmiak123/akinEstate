import React from 'react'
import './styles.css'
import { Link } from 'react-router-dom' // Assuming you're using React Router

const LineSection = ({ title, link, linkText }) => {
  return (
    <div className="line-section">
      <h2 className="line-title">{title}</h2>
      <div className="line"></div>
      {link &&
        (link.startsWith('http') ? (
          <a
            href={link}
            className="line-link"
            target="_blank"
            rel="noopener noreferrer"
          >
            {linkText || 'View More'}
          </a>
        ) : (
          <Link to={link} className="line-link">
            {linkText || 'View More'}
          </Link>
        ))}
    </div>
  )
}

export default LineSection
