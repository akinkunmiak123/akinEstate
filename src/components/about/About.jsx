import React from "react"
import Back from "../common/Back"
import Heading from "../common/Heading"

import Team from '../home/team/Team'

import img from "../images/about.jpeg"
import "./about.css"
import { IoMdArrowForward } from 'react-icons/io'
import { MdMore } from 'react-icons/md'


const About = () => {
    const handleYouTubeClick = () => {
      const youtubeUrl = '/blog'
      window.open(youtubeUrl)
    }
  return (
    <>
      <section className="about">
        <Back
          name="About Us"
          title="Learn all about Our Special Team  and the Benefits we bring YOU when trusted with finding the suitable Home and Properties for your needs"
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
