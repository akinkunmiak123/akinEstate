// import React, { useState, useEffect, useMemo } from 'react'
import '@fontsource/poppins' // Default weight
import '@fontsource/poppins/500.css' // Medium weight
import '@fontsource/pacifico' // Pacifico cursive font
import './hero.css'
import { IoMdArrowForward } from 'react-icons/io'
import { FaWhatsapp } from 'react-icons/fa' // Importing WhatsApp logo

const Hero = () => {
  // const words = useMemo(() => ['properties', 'lands', 'apartments'], []) // Memoized words
  // const [currentWord, setCurrentWord] = useState('')
  // const [wordIndex, setWordIndex] = useState(0)
  // const [charIndex, setCharIndex] = useState(0)
  // const [isTyping, setIsTyping] = useState(true)

  // useEffect(() => {
  //   const current = words[wordIndex]
  //   const typingSpeed = isTyping ? 100 : 50 // Typing is slower, deleting is faster

  //   const handleTyping = () => {
  //     if (isTyping) {
  //       if (charIndex < current.length) {
  //         setCurrentWord(current.slice(0, charIndex + 1))
  //         setCharIndex((prev) => prev + 1)
  //       } else {
  //         setTimeout(() => setIsTyping(false), 1500) // Pause before deleting
  //       }
  //     } else {
  //       if (charIndex > 0) {
  //         setCurrentWord(current.slice(0, charIndex - 1))
  //         setCharIndex((prev) => prev - 1)
  //       } else {
  //         setIsTyping(true)
  //         setWordIndex((prev) => (prev + 1) % words.length) // Move to next word
  //       }
  //     }
  //   }

  //   const timer = setTimeout(handleTyping, typingSpeed)
  //   return () => clearTimeout(timer)
  // }, [charIndex, isTyping, wordIndex, words])

  const handleWhatsAppClick = () => {
    const phone = '09130000004'
    const message = 'I am interested in your services.'
    const whatsappUrl = `https://wa.me/${phone}?text=${encodeURIComponent(
      message
    )}`
    window.open(whatsappUrl, '_blank')
  }

  return (
    <section className="heros">
      <div className="overlay"></div>
      <div className="container">
        <p>
          Welcome to Findville Realty Ltd. <br />
          {/* <span className="typing-animation">{currentWord}</span> <br /> */}
          <p className='smaller'> your seamless path to successful real estate journeys.</p>
        </p>

        <div className="body">
          <button className="btns" onClick={handleWhatsAppClick}>
            <div className="fleChange">
              WhatsApp Us
              <FaWhatsapp className="whatsapp-logo" />
            </div>
            <span>
              <IoMdArrowForward />
            </span>
          </button>
        </div>
      </div>
    </section>
  )
}

export default Hero
