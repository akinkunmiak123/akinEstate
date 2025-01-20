import React from 'react'
import './BlogDetail.css'
import { useParams, useHistory } from 'react-router-dom'
import { blogData } from '../data/Data'

const BlogDetails = () => {
  const { slug } = useParams() // Extract slug from URL
  const history = useHistory() // Use history for navigation
  const blog = blogData.find((blog) => blog.slug === slug) // Find blog by slug

  if (!blog) {
    return <h1>Blog Not Found</h1> // Handle invalid slugs
  }

  return (
    <div className="blog-details">
      <div className="details-header">
        <div>
          <p className="details-date">{blog.date}</p>
          <h1 className="details-title">{blog.title}</h1>
          <div className="details-content">
            <p>{blog.description}</p>
            <p>{blog.longNote}</p>
          </div>
        </div>

        <img src={blog.image} alt={blog.title} className="details-image" />
      </div>

      <button className="back-home-btn" onClick={() => history.push('/blog')}>
        Go Back
      </button>
    </div>
  )
}

export default BlogDetails
