import React from "react"
// import Heading from "../../common/Heading"
import { awards } from "../../data/Data"
import "./awards.css"

const Awards = () => {
  return (
    <>
      <section className="awards padding">
        <div className="container">
          {/* <Heading
            title="Our business is one of close relationship and we are very fortunate to be able to share so many positive real estate experiences with our clients"
            subtitle="Our journey"
          /> */}

          <div className="content grid4 mtop">
            {awards.map((val, index) => (
              <div className="card" key={index}>
                <div className="icon">
                  <span>{val.icon}</span>
                </div>
                <h6>{val.num}</h6>
                <p style={{ color: '#222' }}>{val.name}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  )
}

export default Awards
