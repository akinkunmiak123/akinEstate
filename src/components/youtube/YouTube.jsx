import React from 'react'
import './YouTube.css'
import Heading from '../common/Heading'
import { IoMdArrowForward } from 'react-icons/io'
import { FaYoutube } from 'react-icons/fa'

const YouTube = () => {
  const handleYouTubeClick = () => {
    const youtubeUrl = 'http://youtube.com/@findvillerealty/videos'
    window.open(youtubeUrl, '_blank')
  }

  return (
    <div className="youtube-container">
      <Heading
        title="Explore our engaging content and learn more about our real estate expertise."
        subtitle="Understand better how real estate works"
      />

      <div className="video-wrapper">
        <div className="video">
          <iframe
            width="560"
            height="315"
            src="https://www.youtube.com/embed/D1Hsv1RVSUw?si=-cSRzaXIEB7LDeaS"
            title="YouTube video player"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            referrerPolicy="strict-origin-when-cross-origin"
            allowFullScreen
          ></iframe>
        </div>
      </div>
      <div className="body">
        <button className="btn" onClick={handleYouTubeClick}>
          <div className="fleChange">
            Explore More
            <FaYoutube className="youtube" />
          </div>
          <span>
            <IoMdArrowForward />
          </span>
        </button>
      </div>
    </div>
  )
}

export default YouTube
