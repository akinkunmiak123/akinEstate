import React from "react"
import Awards from "./awards/Awards"
import Featured from "./featured/Featured"
import Hero from "./hero/Hero"
import Recent from "./recent/Recent"
import YouTube from "../youtube/YouTube"
import Line from '../Line/LineSection'

const Home = () => {
  return (
    <>
      <Hero />
      <Line/>
      <Featured />
      <Recent />
      <Line/>
      <Awards />
      <YouTube/>
      <Line/>
    </>
  )
}

export default Home
