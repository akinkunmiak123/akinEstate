import React from 'react'
import './YouTube.css'
import Heading from '../common/Heading'

const YouTube = () => {
  return (
    <div className="youtube-container">
      <Heading
        title="Explore our engaging content and learn more about our real estate expertise."
        subtitle="Featured YouTube Videos"
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
        <div className="video">
          <iframe
            width="560"
            height="315"
            src="https://www.youtube.com/embed/Hm0ZFLCCvfQ?si=f5PdCV7VI3WsV0qw"
            title="YouTube video player"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            referrerPolicy="strict-origin-when-cross-origin"
            allowFullScreen
          ></iframe>
        </div>
      </div>
    </div>
  )
}

export default YouTube
