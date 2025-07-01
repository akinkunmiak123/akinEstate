import React from 'react'
import './Testimonials.css'
import { testemonialData } from '../data/Data'
import { Swiper, SwiperSlide } from 'swiper/react'
import { Autoplay, Navigation } from 'swiper/modules'
import 'swiper/swiper-bundle.css'
import SwiperNavButtons from '../home/recent/SwiperNavButton'

const Testimonial = () => {
  return (
    <section className="testimonial-section">
      <h2 className="testimonial-title">What Our Clients Say</h2>
      <div className="underline" />
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
        {testemonialData.map((testimonial, index) => (
          <SwiperSlide key={index}>
            <div className="testimonial-card">
              <p className="testimonial-message">"{testimonial.message}"</p>
              <div className="testimonial-footer">
                <img
                  src={testimonial.avatar}
                  alt={testimonial.name}
                  className="avatar"
                />
                <div>
                  <p className="testimonial-name">{testimonial.name}</p>
                  <p className="testimonial-role">{testimonial.role}</p>
                </div>
              </div>
            </div>
          </SwiperSlide>
        ))}
        <SwiperNavButtons />
      </Swiper>
    </section>
  )
}

export default Testimonial
