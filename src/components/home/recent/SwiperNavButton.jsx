import React from 'react'
import { useSwiper } from 'swiper/react'

import { IoMdArrowForward, IoMdArrowBack} from 'react-icons/io'

import './swiperNavButton.css'

const SwiperNavButtons = () => {
  const swiper = useSwiper()

  return (
    <div className="swiper-nav-buttons">
      <button onClick={() => swiper.slidePrev()} className="nav-btn">
        <span>
          <IoMdArrowBack className="icon" />
        </span>
      </button>
      <button onClick={() => swiper.slideNext()} className="nav-btn">
        <span>
          <IoMdArrowForward className="icon" />
        </span>
      </button>
    </div>
  )
}

export default SwiperNavButtons
