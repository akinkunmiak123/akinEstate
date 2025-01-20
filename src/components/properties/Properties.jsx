import React from "react"
import Back from "../common/Back"
import "../home/recent/recent.css"
import img from "../images/about.jpeg"
import Recent from "../home/recent/Recent"
import Location from '../home/location/Location'

const Properties = () => {
  return (
    <>
      <section className='blog-out mb'>
        <Back name='Properties' title='Search For a Property' cover={img} />
        <div className='container recent'>
         <Recent/>
         <Location/>
        </div>
        
      </section>
    </>
  )
}

export default Properties
