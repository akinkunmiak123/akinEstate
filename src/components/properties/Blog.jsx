import React from "react"
import Back from "../common/Back"
import "../home/recent/recent.css"
import img from "../images/about.jpeg"
import Recent from "../home/recent/Recent"

const Blog = () => {
  return (
    <>
      <section className='blog-out mb'>
        <Back name='Properties' title='Search For a Property' cover={img} />
        <div className='container recent'>
         <Recent/>
        </div>
        
      </section>
    </>
  )
}

export default Blog
