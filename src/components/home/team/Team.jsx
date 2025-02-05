import React from 'react'
import Heading from '../../common/Heading'
import { team } from '../../data/Data'
import './team.css'

const Team = () => {
  return (
    <>
      <section className="team background">
        <div className="container">
          <Heading title="Our Team" subtitle="" />

          <div className="content mtop grid3">
            {team.map((val, index) => (
              <div className="box" key={index}>
                <div className="img-container">
                  <img src={val.cover} alt={`${val.name}`} />
                  <i className="fa-solid fa-circle-check"></i>
                </div>
                <div className="details">
                  <h4>{val.name}</h4>
                  <p className="position">{val.position}</p>
                  <label>{val.address}</label>
                  <ul className="social-icons">
                    {val.icon.map((icon, idx) => (
                      <li key={idx}>{icon}</li>
                    ))}
                  </ul>
                  <div className="button flex ">
                    <button style={{ backgroundColor: '#e65713' }}>
                      <i className="fa fa-envelope"></i> Message
                    </button>
                    <button className="btn4">
                      <i className="fa fa-phone-alt"></i>
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  )
}

export default Team
