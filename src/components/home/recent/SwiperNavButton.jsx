import React from 'react'
import './swiperNavButton.css'
import { useSwiper } from 'swiper/react'

export const SwiperNavButtons = () => {
  const swiper = useSwiper()

  return (
    <div className="swiper-nav-buttons">
      <button onClick={() => swiper.slidePrev()} className="nav-btn prev-btn">
        Prev
      </button>
      <button onClick={() => swiper.slideNext()} className="nav-btn next-btn">
        Next
      </button>
    </div>
  )
}
