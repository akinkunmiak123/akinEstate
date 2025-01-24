import React from "react"
import Heading from "../../common/Heading"
import "./Featured.css"
import FeaturedCard from "./FeaturedCard"

const Featured = () => {
  return (
    <>
      <section className="featured background">
        <div className="container">
          <Heading
            title="Find Ville"
            subtitle="We offer services from finding homes and lands to real estate investment, securing your future."
          />
          <FeaturedCard />
        </div>
      </section>
    </>
  )
}

export default Featured
