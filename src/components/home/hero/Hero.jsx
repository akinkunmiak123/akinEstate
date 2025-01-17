import React, { useState, useEffect, useMemo } from 'react'
import Heading from '../../common/Heading'
import './hero.css'

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
    const phone = '09068457292'
    const message = 'I am interested in your services.'
    const whatsappUrl = `https://wa.me/${phone}?text=${encodeURIComponent(message)}`
    window.open(whatsappUrl, '_blank')
  }

  return (
    <section className="hero">
      <div className="overlay"></div>
      <div className="container">
        <Heading
          title="Search Your Next Home"
          subtitle="Find new & featured property located Across Nigeria."
        />
        <p>
          Discover a wide range of{' '}
          <span className="typing-animation">{currentWord}</span> tailored to
          your needs. Let's help you find the perfect place to call home.
        </p>
        <button className="cta-button" onClick={handleWhatsAppClick}>
          Interested? Chat Now
        </button>
      </div>
    </section>
  )
}

export default Hero
