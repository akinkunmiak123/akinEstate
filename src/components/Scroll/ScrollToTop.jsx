import React, { useState, useEffect } from 'react'
import { useLocation } from 'react-router-dom'
import './ScrollToTop.css' // Ensure you add styles in a separate CSS file or inline

const ScrollToTop = () => {
  const { pathname } = useLocation()
  const [isVisible, setIsVisible] = useState(false)

  // Show the button when the user scrolls down
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 200) {
        setIsVisible(true)
      } else {
        setIsVisible(false)
      }
    }

    window.addEventListener('scroll', handleScroll)
    return () => {
      window.removeEventListener('scroll', handleScroll)
    }
  }, [])

  // Scroll to the top when the button is clicked
  const handleScrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }

  // Automatically scroll to top when the route changes
  useEffect(() => {
    window.scrollTo(0, 0)
  }, [pathname])

  return (
    <>
      {isVisible && (
        <button className="scroll-to-top-btn" onClick={handleScrollToTop}>
          ↑
        </button>
      )}
    </>
  )
}

export default ScrollToTop
