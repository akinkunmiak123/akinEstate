import React from "react"
import Heading from "../../common/Heading"
import "./recent.css"
import RecentCard from "./RecentCard"

const Recent = () => {
  return (
    <>
      <section className="recent padding">
        <div className="container">
          <Heading
            title="Recent Listings"
            subtitle="Explore the latest listings and find your perfect home."
          />

          <RecentCard />
        </div>
      </section>
    </>
  )
}

export default Recent
