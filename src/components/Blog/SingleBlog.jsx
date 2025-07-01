import React from 'react'
import { useHistory } from 'react-router-dom'
import { Swiper, SwiperSlide } from 'swiper/react'
import { Autoplay, Navigation } from 'swiper/modules'
import 'swiper/css'
import 'swiper/css/navigation'
import { blogData } from '../data/Data'
import SwiperNavButtons from '../../components/home/recent/SwiperNavButton'
import './SingleBlog.css'

const SingleBlog = () => {
  const history = useHistory()

  const handleReadMore = (item) => {
    history.push(`/blogs/${item.slug}`, { item })
  }

  if (!blogData || blogData.length === 0) {
    return <p className="no-blogs">Can't find your blog posts.</p>
  }

  return (
    <div className="single-blog-carousel-container">
      <h3 className="related-heading">Recent Blog Posts</h3>
      <Swiper
        spaceBetween={30}
        slidesPerView={1}
        loop={true}
        autoplay={{
          delay: 3000,
          disableOnInteraction: false,
        }}
        breakpoints={{
          640: { slidesPerView: 1 },
          768: { slidesPerView: 2 },
          1024: { slidesPerView: 3 },
        }}
        modules={[Autoplay, Navigation]}
      >
        {blogData.map((blog, index) => (
          <SwiperSlide key={index}>
            <div className="related-blog-card">
              <img
                src={blog.image}
                alt={blog.title}
                className="related-blog-image"
              />
              <div className="related-blog-content">
                <h4 className="related-blog-title">{blog.title}</h4>
                <button
                  className="read-more-btn"
                  onClick={() => handleReadMore(blog)}
                >
                  Read More →
                </button>
              </div>
            </div>
          </SwiperSlide>
        ))}
        <SwiperNavButtons />
      </Swiper>
    </div>
  )
}

export default SingleBlog
