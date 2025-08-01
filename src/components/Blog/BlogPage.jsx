import React, { useState } from 'react'
import Back from '../common/Back'
import img from '../images/blog.jpg'
import './BlogPage.css'
import { blogData } from '../data/Data'
import { useHistory } from 'react-router-dom'

const BlogPage = () => {
  const history = useHistory()
  const [searchTerm, setSearchTerm] = useState('')
  const [filteredBlogs, setFilteredBlogs] = useState(blogData)

  const handleReadMore = (item) => {
    history.push(`/blogs/${item.slug}`, { item })
  }

  const handleSearch = (e) => {
    e.preventDefault()
    const lower = searchTerm.toLowerCase()
    const result = blogData.filter((blog) =>
      blog.title.toLowerCase().includes(lower)
    )
    setFilteredBlogs(result)
  }

  return (
    <>
      <section className="about">
        <Back
          name={searchTerm ? `You are searching for '${searchTerm}'` : 'Our Blog'}
          title={
            searchTerm
              ? `Pls click the search icon to see '${searchTerm}'`
              : 'Real Estate Insights, News & Tips'
          }
          cover={img}
        />
      </section>

      <div className="blog-layout">
        <div className="blog-content">
          {filteredBlogs.length === 0 ? (
            <p>No blog found for “{searchTerm}”</p>
          ) : (
            filteredBlogs.map((blog) => (
  <div key={blog.id} className="vertical-blog-card">
    <div className="card-image-container">
      <img
        src={blog.image}
        alt={blog.title}
        className="card-image"
      />
      <div className="image-overlay">
        <h2 className="overlay-title">{blog.title}</h2>
      </div>
    </div>
    <div className="card-body">
      <p className="blog-date">{blog.date}</p>
      <p className="blog-description">
        {blog.description}
      </p>
      <button
        className="read-more-btn"
        onClick={() => handleReadMore(blog)}
      >
        READ MORE
      </button>
                </div>
              </div>
            ))
          )}
        </div>

        <aside className="blog-sidebar">
          <form className="search-box" onSubmit={handleSearch}>
            <input
              type="text"
              placeholder="Search ..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
            />
            <button type="submit">🔍</button>
          </form>

          <div className="sidebar-section">
            <h4 className="sidebar-title">Recent Posts</h4>
            <ul className="recent-posts">
              {blogData.slice(0, 5).map((item) => (
                <li
                  key={item.id}
                  className="recent-post-link"
                  onClick={() => handleReadMore(item)}
                >
                  {item.title}
                </li>
              ))}
            </ul>
          </div>

          <div className="sidebar-section">
            <h4 className="sidebar-title">Follow Us</h4>
            <div className="social-icons">
              <i className="fab fa-facebook-f"></i>
              <i className="fab fa-twitter"></i>
              <i className="fab fa-instagram"></i>
              <i className="fab fa-youtube"></i>
            </div>
          </div>
        </aside>
      </div>
    </>
  )
}

export default BlogPage
