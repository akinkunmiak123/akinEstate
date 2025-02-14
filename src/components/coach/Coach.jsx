import React from 'react'
import Back from '../common/Back'
import Heading from '../common/Heading'
import img from '../images/coach.jpg'
import './coach.css'


const Coach = () => {
  return (
    <>
      <section className="about">
        <Back
          name="Welcome to Property lady Real Estate Coaching"
          title="Struggling in real estate? My coaching helps you succeed!"
          cover={img}
        />
        <div className="container flex mtop">
          <div className="left row">
            <Heading title="Why Property Lady" subtitle="" />

            <p>
              I have a proven track record of success in the industry as I have
              helped over 200 client's achieve their real estate goals and I can
              help you achieve your growth goals too.
            </p>
            <p>
              My real estate coaching program is designed specifically for new
              realtors like yourself.Through one-on-one coaching sessions and
              interactive training modules, you will learn the skills and
              strategies needed to succeed in the competitive world of real
              estate.
            </p>
            <p>
              My years of experience and success in the industry gives evidence
              of the fact that I am well-equipped to share with you my knowledge
              and expertise. Whether you’re just starting or looking to take
              your existing real estate business to new heights, my coaching
              program can help.
            </p>
          </div>
          <div className="right row">
            <img src="./propertyLady1.jpeg" alt="" />
          </div>
        </div>
        <div className="container flex mtop">
          <div className="left row">
            <img src="./propertyLady2.jpg" alt="" />
          </div>
          <div className="right row marg">
            <Heading title="Hear more from Property Lady" subtitle="" />

            <p>
              This Coaching program is tailored to meet the needs of each
              Realtor. I understand that everyone has different goals and
              learning styles, so I work closely with you to create a customized
              plan that fits your unique needs.
            </p>
            <p>
              The program covers a wide range of topics, including how to find
              and qualify leads, how to effectively market your properties, and
              how to negotiate and close deals. You will also have the
              opportunity to network with other realtors and gain valuable
              insight into the industry.
            </p>
            <button className="btnStyle">Talk To Property Lady</button>
          </div>
        </div>
      </section>
    </>
  )
}

export default Coach
