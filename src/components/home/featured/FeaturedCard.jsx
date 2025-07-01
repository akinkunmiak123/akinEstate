import React from 'react'
import { featured } from '../../data/Data'
import './featuredCard.css'
import { Swiper, SwiperSlide } from 'swiper/react'
import { Autoplay, Navigation } from 'swiper/modules'
import 'swiper/swiper-bundle.css'
import SwiperNavButtons from '../recent/SwiperNavButton'

const FeaturedCard = () => {
  return (
    <div className="featured-section">
      <Swiper
        spaceBetween={20}
        slidesPerView={1}
        loop={true}
        autoplay={{
          delay: 3000,
          disableOnInteraction: false,
        }}
        breakpoints={{
          480: { slidesPerView: 1 },
          768: { slidesPerView: 2 },
          1024: { slidesPerView: 3 },
        }}
        modules={[Autoplay, Navigation]}
      >
        {featured.map((item, index) => (
          <SwiperSlide key={index}>
            <div className="boxs">
              {/* Image Section */}
              {/* <div className="img-container">
                <img
                  src={item.cover}
                  alt={item.name}
                  className="property-image"
                />
              </div> */}

              {/* Text Section */}
              <div className="text-container">
                <h4>{item.name}</h4>
                <h6>{item.desc}</h6>
              </div>
            </div>
          </SwiperSlide>
        ))}
        <SwiperNavButtons />
      </Swiper>
    </div>
  )
}

export default FeaturedCard
