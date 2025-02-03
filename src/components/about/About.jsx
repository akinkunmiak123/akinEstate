import React, { useState, useEffect } from 'react'
import Back from '../common/Back'
import Heading from '../common/Heading'
import LineSection from '../Line/LineSection'
import Team from '../home/team/Team'

import img from '../images/about.jpeg'
import './about.css'
import { IoMdArrowForward } from 'react-icons/io'
import { MdMore } from 'react-icons/md'

const About = () => {
  const [isMobile, setIsMobile] = useState(window.innerWidth <= 768)
     const handleYouTubeClick = () => {
       const youtubeUrl = '/blog'
       window.open(youtubeUrl)
     }

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 768)
    }

    window.addEventListener('resize', handleResize)
    return () => window.removeEventListener('resize', handleResize)
  }, [])

  return (
    <>
      <section className="about">
        <Back
          name="About Us"
          title="Discover How We Find Your Perfect Home or Property"
          cover={img}
        />
        <div className="container flex mtop">
          <div className="left row">
            <Heading
              title="Our Agency Story"
              subtitle="Reliable Deadlines that Project Excellence"
            />

            <p>
              Take a look at Our detailed Flyer of the Different Contracts you
              can Engage FindVilleRealty In. This gives you Simplistic
              information on What to expect{' '}
              <b>
                {' '}
                According to the Square Metres of your Property and Time of
                Development,
              </b>{' '}
              We are happy to hear your thoughts.
            </p>
            <Heading
              title="More On Our Agency"
              subtitle="Developing Your Houses with Reliability"
            />
            <p>
              Our Developmental Contracts are executed in reliable periods or
              over Monthly Time Spans. This enables Us to come up with Extensive
              plan detailing the Start to Finish of Development, and provide you
              with the{' '}
              <b>
                Assurance and Reliability of Knowing What to Expect AND When to
                expect it.
              </b>
            </p>
            <div className="body">
              <button className="btn" onClick={handleYouTubeClick}>
                <div className="fleChange">
                  Explore More
                  <MdMore className="youtube-logo" />
                </div>
                <span>
                  <IoMdArrowForward />
                </span>
              </button>
            </div>
            {/* Conditionally render LineSection based on screen size */}
            {isMobile && <LineSection />}
          </div>
          <div className="right row">
            <img src="./immio.jpeg" alt="" />
          </div>
        </div>
      </section>
      <Team />
    </>
  )
}

export default About
