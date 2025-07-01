import React from 'react'
import './YouTube.css'
import { IoMdArrowForward } from 'react-icons/io'
import { FaYoutube } from 'react-icons/fa'

const YouTube = () => {
  const handleYouTubeClick = () => {
    const youtubeUrl = 'http://youtube.com/@findvillerealty/videos'
    window.open(youtubeUrl, '_blank')
  }

  return (
    <div className="youtube-container">
      <div className="heading">
        <h1 style={{ color: '#262626' }}>
          Want to Learn More About Real Estate?
        </h1>
        <p style={{ color: '#262626' }}>
          Better understand how real estate works
        </p>
      </div>

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
            See Our Other Videos
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
