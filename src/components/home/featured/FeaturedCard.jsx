import React from 'react'
import { featured } from '../../data/Data'
import './featuredCard.css' // Add this for light theme and carousel styles
import { Swiper, SwiperSlide } from 'swiper/react'
import { Autoplay, Navigation } from 'swiper/modules' // Import Autoplay module
import 'swiper/swiper-bundle.css'
import SwiperNavButtons from '../recent/SwiperNavButton'


const FeaturedCard = () => {
  return (
    <>
      <div className="featured-section">
        <Swiper
          spaceBetween={20}
          slidesPerView={1} // Default to 1 slide
          loop={true}
          autoplay={{
            delay: 3000,
            disableOnInteraction: false,
          }}
          breakpoints={{
            480: { slidesPerView: 1 }, // 1 slide for small screens
            768: { slidesPerView: 2 }, // 2 slides for tablets
            1024: { slidesPerView: 3 }, // 3 slides for larger screens
          }}
          modules={[Autoplay, Navigation]} // Register the Autoplay module
        >
          {featured.map((item, index) => (
            <SwiperSlide key={index}>
              <div className="box">
                <img
                  src={item.cover}
                  alt={item.name}
                  className="property-image"
                />
                <h4>{item.name}</h4>
                <p className="property-desc">{item.desc}</p>{' '}
                {/* Display description directly */}
              </div>
            </SwiperSlide>
          ))}
          <SwiperNavButtons />
        </Swiper>
      </div>
    </>
  )
}

export default FeaturedCard
