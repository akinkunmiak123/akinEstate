import React from 'react'
import './SingleBlog.css'

import { useHistory } from 'react-router-dom'

const SingleBlog = ({ blog }) => {
    const history = useHistory()
     const handleReadMore = (item) => {
       history.push(`/blogs/${item.slug}`, { item })
     }
  return (
    <div className="single-blog">
      <div className="featured-blog-card">
        <div className="featured-image-container">
          <img src={blog.image} alt={blog.title} className="featured-image" />
        </div>
        <div className="featured-blog-content">
          <p className="featured-blog-date">{blog.date}</p>
          <h2 className="featured-blog-title">{blog.title}</h2>
          <p className="featured-blog-description">{blog.description}</p>
          <div>
            <button
              className="featured-blog-link btn2 small-btn"
              onClick={() => handleReadMore(blog)}
            >
              Read More
              <span className="arrow">&rarr;</span>
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default SingleBlog
