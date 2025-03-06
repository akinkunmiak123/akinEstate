import React, { useState } from 'react'
import './BlogPage.css'
import { blogData } from '../data/Data'
import SingleBlog from './SingleBlog'
import { useHistory } from 'react-router-dom'

const BlogPage = () => {
  // State to manage the selected blog, default is the blog with id: 1
  const history = useHistory()
  const [selectedBlog, setSelectedBlog] = useState(
    blogData.find((blog) => blog.id === 1)
  )

  const handleReadMore = (item) => {
    history.push(`/blogs/${item.slug}`, { item })
  }

  // Function to handle blog selection
  const handleBlogSelect = (blog) => {
    setSelectedBlog(blog)
  }

  return (
    <div className="blog-page">
      <h1 className="blog-title">Blog</h1>
      {/* Pass the selected blog data to the SingleBlog component */}
      <SingleBlog blog={selectedBlog} />
      <p className="blog-subtitle">
        Stay updated with the latest news and insights in the real estate
        market.
      </p>
      <div className="blog-grid">
        {blogData.map((blog) => (
          <div
            key={blog.id}
            className={`blog-card ${
              blog.id === selectedBlog.id ? 'featured-card' : ''
            }`}
            onClick={() => handleBlogSelect(blog)} // Update selected blog on click
          >
            <img src={blog.image} alt={blog.title} className="blog-image" />
            <div>
              <p className="blog-date">{blog.date}</p>
              <h2 className="blog-card-title">
               {blog.title.split(' ').slice(0, 3).join(' ')}...
              </h2>
              <p className="blog-description">
                {blog.description.split(' ').slice(0, 10).join(' ')}...
              </p>
              <button
                className="btn2 small-btn"
                onClick={() => handleReadMore(blog)} // Navigate to the blog detail
              >
                Read More
                <span className="arrow">&rarr;</span>
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

export default BlogPage
