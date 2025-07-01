import React, { useState } from 'react'
import './BlogDetail.css'
import { useParams, useHistory } from 'react-router-dom'
import { blogData } from '../data/Data'
import Back from '../common/Back'
import img from '../images/about.jpeg'

const BlogDetails = () => {
  const { slug } = useParams()
  const history = useHistory()
  const blog = blogData.find((blog) => blog.slug === slug)

  const [searchTerm, setSearchTerm] = useState('')
  const [relatedPosts, setRelatedPosts] = useState(
    blogData.filter((item) => item.slug !== slug)
  )

  const handleSearch = (e) => {
    e.preventDefault()
    const lower = searchTerm.toLowerCase()
    const result = blogData.filter((blog) =>
      blog.title.toLowerCase().includes(lower)
    )
    setRelatedPosts(result)
  }

  const handleReadMore = (item) => {
    history.push(`/blogs/${item.slug}`, { item })
    window.scrollTo(0, 0)
  }

  if (!blog) {
    return <h1>Blog Not Found</h1>
  }

  return (
    <>
      <section className="about">
        <Back
          name={
            searchTerm ? `You are searching for '${searchTerm}'` : 'Our Blog'
          }
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
          <div className="vertical-blog-card">
            <div className="card-image-container">
              <img src={blog.image} alt={blog.title} className="card-image" />
              <div className="image-overlay">
                <h2 className="overlay-title">{blog.title}</h2>
                <p className="overlay-sub">Published on {blog.date}</p>
              </div>
            </div>

            <div className="card-body">
              <p className="blog-date">{blog.date}</p>
              <h3 className="blog-title">{blog.title}</h3>
              <p className="blog-description">{blog.description}</p>
              <p className="blog-description">{blog.longNote}</p>

              {blog.points && (
                <ul className="blog-points">
                  {blog.points.map((point, i) => (
                    <li key={i}>{point}</li>
                  ))}
                </ul>
              )}

              {blog.endNote && (
                <p className="blog-description">{blog.endNote}</p>
              )}

              <button
                className="read-more-btn"
                onClick={() => history.push('/blog')}
              >
                Go Back
              </button>
            </div>
          </div>

          {/* Related Posts */}
          <div className="related-posts">
            <h2 className="sidebar-title">Related Posts</h2>
            <div className="related-posts-grid">
              {relatedPosts.map((item) => (
                <div
                  key={item.id}
                  className="vertical-blog-card"
                  onClick={() => handleReadMore(item)}
                  style={{ cursor: 'pointer' }}
                >
                  <div className="card-image-container">
                    <img
                      src={item.image}
                      alt={item.title}
                      className="card-image"
                    />
                    <div className="image-overlay">
                      <h2 className="overlay-title">{item.title}</h2>
                    </div>
                  </div>
                  <div className="card-body">
                    <p className="blog-date">{item.date}</p>
                    <h3 className="blog-title">{item.title}</h3>
                    <p className="blog-description">
                      {item.description.split(' ').slice(0, 25).join(' ')}...
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Sidebar */}
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

export default BlogDetails
