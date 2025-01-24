import React, { useState, useEffect, useMemo } from 'react'
import '@fontsource/poppins'; // Default weight
import '@fontsource/poppins/500.css'; // Medium weight
import '@fontsource/pacifico'; // Pacifico cursive font
import './hero.css'
import { FaWhatsapp } from 'react-icons/fa' // Importing WhatsApp logo

const Hero = () => {
  const words = useMemo(() => ['properties', 'lands', 'apartments'], []) // Memoize words array
  const [currentWord, setCurrentWord] = useState('')
  const [wordIndex, setWordIndex] = useState(0)
  const [isDeleting, setIsDeleting] = useState(false)
  const typingSpeed = isDeleting ? 50 : 150 // Adjust typing speed dynamically

  useEffect(() => {
    const handleTyping = () => {
      const current = words[wordIndex]

      if (!isDeleting) {
        setCurrentWord((prev) => current.slice(0, prev.length + 1))
        if (currentWord === current) {
          setTimeout(() => setIsDeleting(true), 1000) // Pause before deleting
        }
      } else {
        setCurrentWord((prev) => current.slice(0, prev.length - 1))
        if (currentWord === '') {
          setIsDeleting(false)
          setWordIndex((prev) => (prev + 1) % words.length) // Move to the next word
        }
      }
    }

    const timer = setTimeout(handleTyping, typingSpeed)
    return () => clearTimeout(timer)
  }, [currentWord, isDeleting, wordIndex, words, typingSpeed])

  const handleWhatsAppClick = () => {
    const phone = '09130000004 '
    const message = 'I am interested in your services.'
    const whatsappUrl = `https://wa.me/${phone}?text=${encodeURIComponent(message)}`
    window.open(whatsappUrl, '_blank')
  }

  return (
    <section className="heros">
      <div className="overlay"></div>
      <div className="container">
        <p>
          We Have <span className="typing-animation">{currentWord}</span> <br />
          Available Across Nigeria
        </p>

        <button className="cta-button" onClick={handleWhatsAppClick}>
          <div className="fleChange">
            Message us
            <FaWhatsapp className="whatsapp-logo" />
            <span className="arrow">→</span>
          </div>
        </button>
      </div>
    </section>
  )
}

export default Hero
