import React from 'react'
import Heading from '../../common/Heading'
import './hero.css'

const Hero = () => {
  return (
    <>
      <section className="hero">
        <div className="overlay"></div>
        <div className="container">
          <Heading
            title="Search Your Next Home"
            subtitle="Find new & featured property located Across Lagos."
          />
          <p>
            Discover a wide range of properties tailored to your needs. Let's
            help you find the perfect place to call home.
          </p>
          <button className="cta-button">Get Started</button>
        </div>
      </section>
    </>
  )
}

export default Hero
