import React, { useState } from 'react'
import { list } from '../../data/Data'
import { useHistory } from 'react-router-dom'
import { Swiper, SwiperSlide } from 'swiper/react'
import { Autoplay, Navigation} from 'swiper/modules'
import SwiperNavButtons from '../recent/SwiperNavButton'

import 'swiper/swiper-bundle.css'
import './recentCard.css'

const RecentCard = () => {
  const [selectedType, setSelectedType] = useState('All')
  const history = useHistory()

  // Handle type filter change
  const handleFilterChange = (e) => {
    setSelectedType(e.target.value)
  }

  // Filter the list based on the selected type
  const filteredList =
    selectedType === 'All'
      ? list
      : list.filter((item) => item.type === selectedType)

  // Handle "Read More" click
  const handleReadMore = (item) => {
    history.push(`/details/${item.slug}`, { item })
  }

  // Handle "Chat to Purchase" click
  const handleChatToPurchase = (name) => {
    const phone = '09130000004'
    const message = `Hello, I am interested in purchasing ${name}.`
    const whatsappUrl = `https://wa.me/${phone}?text=${encodeURIComponent(
      message
    )}`
    window.open(whatsappUrl, '_blank')
  }

  return (
    <div className="recent-section">
      {/* Filter by type */}
      <div className="filter-container">
        <select
          className="filter-select"
          onChange={handleFilterChange}
          value={selectedType}
        >
          <option value="All">All Types</option>
          <option value="Land">Land</option>
          <option value="Bungalow">Bungalow</option>
          <option value="Maisonette">Maisonette</option>
          <option value="Homes & Villas">Homes & Villas</option>
        </select>
      </div>

      {/* Swiper Carousel */}
      <Swiper
        spaceBetween={20}
        slidesPerView={1}
        loop={true}
        autoplay={{
          delay: 3000,
          disableOnInteraction: false,
        }}
        pagination={{ clickable: true }}
        breakpoints={{
          480: { slidesPerView: 1 },
          768: { slidesPerView: 2 },
          1024: { slidesPerView: 3 },
        }}
        modules={[Autoplay, Navigation]}
        className="recent-swiper"
      >
        {filteredList.map((item) => {
          const { id, cover, location, name, type } = item
          return (
            <SwiperSlide key={id}>
              <div className="box">
                {/* Image section */}
                <div className="img-container">
                  <img src={cover} alt={name} />
                </div>

                {/* Text section */}
                <div className="text-container">
                  {/* <div className="category">
                    <span
                      style={{
                        background:
                          category === 'For Sale' ? '#25b5791a' : '#ff98001a',
                        color: category === 'For Sale' ? '#25b579' : '#ff9800',
                      }}
                    >
                      {category}
                    </span>
                    <i className="fa fa-heart"></i>
                  </div> */}
                  <h4>{name}</h4>
                  <p>
                    <i className="fa fa-location-dot"></i> {location}
                  </p>
                  <p>
                    <strong>Type:</strong> {type}
                  </p>

                  {/* Buttons */}
                  <div className="button-container">
                    <button
                      className="btn2 small-btn"
                      onClick={() => handleChatToPurchase(name)}
                    >
                      Chat to Purchase
                    </button>
                    <button
                      className="btn2 small-btn"
                      onClick={() => handleReadMore(item)}
                    >
                      Read More
                    </button>
                  </div>
                </div>
              </div>
            </SwiperSlide>
          )
        })}
        <SwiperNavButtons />
      </Swiper>
    </div>
  )
}

export default RecentCard
