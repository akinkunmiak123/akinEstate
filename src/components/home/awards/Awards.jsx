import React from 'react'
import { awards } from '../../data/Data'
import { Swiper, SwiperSlide } from 'swiper/react'
import { Autoplay } from 'swiper/modules'
import 'swiper/swiper-bundle.css'
import './awards.css'
import SwiperNavButtons from '../recent/SwiperNavButton'

const Awards = () => {
  return (
    <section className="awards padding">
      <div className="container">
        <Swiper
          spaceBetween={20}
          slidesPerView={1}
          loop={true}
          autoplay={{
            delay: 2500,
            disableOnInteraction: false,
          }}
          breakpoints={{
            480: { slidesPerView: 2 },
            768: { slidesPerView: 3 },
            1024: { slidesPerView: 4 },
          }}
          modules={[Autoplay]}
        >
          {awards.map((val, index) => (
            <SwiperSlide key={index}>
              <div className="card">
                <div className="con">
                  <span>{val.icon}</span>
                </div>
                <h6>{val.num}</h6>
                <p>{val.name}</p>
              </div>
            </SwiperSlide>
          ))}
          <div className='visible'>
            <SwiperNavButtons />
          </div>
        </Swiper>
      </div>
    </section>
  )
}

export default Awards
