import React from "react"
import './Properties.css'
import Back from "../common/Back"
import "../home/recent/recent.css"
import img from "../images/about.jpeg"
import PropertiesPage from "../home/recent/Properties"
import Location from '../home/location/Location'

const Properties = () => {
  return (
    <>
      <section className='properties mb'>
        <Back name='Properties' title='Search For a Property' cover={img} />
        <div className='container recent'>
         <PropertiesPage/>
         <Location/>
        </div>
        
      </section>
    </>
  )
}

export default Properties
