import React, { useState } from 'react'
import { blogData } from '../data/Data'
import Awards from './awards/Awards'
import Featured from './featured/Featured'
import Hero from './hero/Hero'
import Recent from './recent/Recent'
import YouTube from '../youtube/YouTube'
import Line from '../Line/LineSection'
import SingleBlog from '../Blog/SingleBlog'

const Home = () => {
  const [selectedBlog, setSelectedBlog] = useState(
    blogData.find((blog) => blog.id === 2)
  )
  return (
    <>
      <Hero />
      <Line />
      <Featured />
      <Recent />
      <Line />
      <br />
      <div style={{ width: '80%', margin: '0px auto' }}>
        <SingleBlog blog={selectedBlog} />
      </div>

      <Line />
      <Awards />
      <YouTube />
      <Line />
    </>
  )
}

export default Home
