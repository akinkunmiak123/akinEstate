import React, { useState } from 'react'
import { blogData } from '../data/Data'
import Awards from './awards/Awards'
import Featured from './featured/Featured'
import Hero from './hero/Hero'
import Testimonials from '../Testimonial/Testimonials'
import YouTube from '../youtube/YouTube'
import Line from '../Line/LineSection'
import SingleBlog from '../Blog/SingleBlog'
import PropertiesPage from './recent/Properties'
import Partners from '../Partners/Partners'

const Home = () => {
  const [selectedBlog] = useState(
    blogData.find((blog) => blog.id === 2)
  )
  return (
    <>
      <Hero />
      <div className="properties-overlap-wrapper">
        <PropertiesPage />
      </div>
      <Line title="Services" link="/services" linkText="more on services" />

      <Featured />

      <Line title="Blog" link="/blog" linkText="View all articles" />
      <br />
      <div style={{ width: '80%', margin: '0px auto' }}>
        <SingleBlog blog={selectedBlog} />
      </div>
      <Line />
      <Testimonials />
      <Line />
      <Partners/>
      <Line />
      <Awards />
      <Line
        title="Youtube"
        link="https://www.youtube.com/@findvillerealty/videos"
        linkText="Our Videos"
      />
      <YouTube />
    </>
  )
}

export default Home
