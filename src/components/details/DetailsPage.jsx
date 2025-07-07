import { useState, useRef, useEffect } from 'react'
import { useLocation, useHistory } from 'react-router-dom'
import { Swiper, SwiperSlide } from 'swiper/react'
import { Navigation } from 'swiper/modules'
import 'swiper/css'
import 'swiper/css/navigation'
import './style.css'
import { useCompare } from '../../utils/CompareContext'


const DetailsPage = () => {
const { addToCompare } = useCompare()
  const { state } = useLocation()
  const { item } = state
  const history = useHistory()

  const images = item.images || [item.cover]
  const swiperRef = useRef(null)
  const [activeIndex, setActiveIndex] = useState(0)

  useEffect(() => {
    if (item.instagram) {
      const script = document.createElement('script')
      script.src = 'https://www.instagram.com/embed.js'
      script.async = true
      document.body.appendChild(script)
    }
  }, [item.instagram])

  // YouTube embed helper
  const getYoutubeEmbedUrl = (url) => {
    const match = url.match(
      /(?:youtube\.com\/(?:watch\?v=|embed\/)|youtu\.be\/)([^\s&?/]+)/
    )
    return match ? `https://www.youtube.com/embed/${match[1]}` : null
  }

  const youtubeEmbedUrl = item.video ? getYoutubeEmbedUrl(item.video) : null

  return (
    <div className="property-details">
      {/* === Title === */}
      <h1 className="property-title">{item.title}</h1>

      {/* === Breadcrumb Navigation === */}
      <div className="breadcrumb">
        <span onClick={() => history.push('/properties')} className="back-link">
          &lt; Return to search
        </span>
        <span className="breadcrumb-divider">|</span>
        <span>{item.type}</span>
        <span className="breadcrumb-divider">|</span>
        <span className="gray-text">{item.name}</span>
      </div>

      {/* === Layout === */}
      <div className="property-grid">
        {/* === Left Column === */}
        <div className="left-column">
          {/* === Swiper Carousel === */}
          <div className="carousel">
            <Swiper
              navigation={true}
              modules={[Navigation]}
              onSwiper={(swiper) => (swiperRef.current = swiper)}
              onSlideChange={(swiper) => setActiveIndex(swiper.activeIndex)}
            >
              {images.map((img, index) => (
                <SwiperSlide key={index}>
                  <img src={img} alt={`Slide ${index}`} />
                </SwiperSlide>
              ))}
            </Swiper>
          </div>

          {/* === Thumbnail Gallery === */}
          <div className="thumbnails">
            {images.map((img, index) => (
              <img
                key={index}
                src={img}
                alt={`Thumb ${index}`}
                className={index === activeIndex ? 'swiper-thumb-active' : ''}
                onClick={() => {
                  swiperRef.current?.slideTo(index)
                  setActiveIndex(index)
                }}
              />
            ))}
          </div>

          {/* === Metadata === */}
          <div className="property-meta">
            <p>
              <strong>Property Type:</strong> {item.type}
            </p>
            <p>
              <strong>City:</strong> {item.keyword}
            </p>
            <p>
              <strong>Offer Type:</strong> {item.offer}
            </p>
            <p>
              <strong>Bedrooms:</strong> {item.bathrooms}
            </p>
            <p>
              <strong>Payment Plan:</strong> {item.payment}
            </p>
          </div>

          {/* === Description and Features === */}
          <div className="property-description">
            <h3>Description</h3>
            <p>{item.description}</p>

            <h4>Features:</h4>
            <ul>
              {item.features.split(',').map((feature, index) => (
                <li key={index}>{feature.trim()}</li>
              ))}
            </ul>

            {/* === Media Embed === */}
            {/* === Media Embeds === */}
            {youtubeEmbedUrl && (
              <div className="video-wrapper">
                <iframe
                  src={youtubeEmbedUrl}
                  title="YouTube video"
                  frameBorder="0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                ></iframe>
              </div>
            )}

            {item.instagram && (
              <div className="insta-embed">
                <blockquote
                  className="instagram-media"
                  data-instgrm-permalink={item.instagram}
                  data-instgrm-version="14"
                  style={{
                    background: '#FFF',
                    border: 0,
                    borderRadius: 3,
                    boxShadow:
                      '0 0 1px rgba(0,0,0,0.5),0 1px 10px rgba(0,0,0,0.15)',
                    margin: 1,
                    maxWidth: 540,
                    minWidth: 326,
                    padding: 0,
                    width: '100%',
                  }}
                ></blockquote>
              </div>
            )}
          </div>
        </div>

        {/* === Right Column === */}
        <div className="right-column">
          <div className="price-box">
            <h2>{item.price}</h2>
            <button
              className="map-btn"
              onClick={() =>
                document
                  .getElementById('map-section')
                  ?.scrollIntoView({ behavior: 'smooth' })
              }
            >
              See Map
            </button>
            <button className="compare-btn" onClick={() => addToCompare(item)}>
              Add to Compare
            </button>
          </div>

          <div className="reply-box">
            <h3>Reply to the Listing</h3>
            <form
              className="reply-form"
              onSubmit={(e) => {
                e.preventDefault()
                const name = e.target.name.value
                const phone = e.target.phone.value
                const email = e.target.email.value
                const message = e.target.message.value

                const text = `Hello, I'm interested in *${item.name}* (${item.location}).\n\nMy Details:\nName: ${name}\nPhone: ${phone}\nEmail: ${email}\nMessage: ${message}`
                const encodedText = encodeURIComponent(text)
                const whatsappNumber = '234XXXXXXXXXX' // Replace with your WhatsApp number

                window.open(
                  `https://wa.me/${whatsappNumber}?text=${encodedText}`,
                  '_blank'
                )
              }}
            >
              <input type="text" name="name" placeholder="Your name" required />
              <input type="tel" name="phone" placeholder="Phone" required />
              <input type="email" name="email" placeholder="Email" required />
              <textarea
                name="message"
                placeholder="Your message"
                rows="4"
                required
              ></textarea>
              <button type="submit" className="send-btn">
                Send Message
              </button>
            </form>
          </div>
        </div>
      </div>

      {/* === Google Map Section === */}
      <div id="map-section" className="map-container">
        <iframe
          src={`https://maps.google.com?q=${encodeURIComponent(
            item.location
          )}&output=embed`}
          width="100%"
          height="350"
          style={{ border: 0 }}
          allowFullScreen
          loading="lazy"
        ></iframe>
      </div>
    </div>
  )
}

export default DetailsPage
