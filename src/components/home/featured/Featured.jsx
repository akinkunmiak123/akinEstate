import "./Featured.css"
import FeaturedCard from "./FeaturedCard"

const Featured = () => {
  return (
    <>
      <section className="featured background">
        <div className="container">
          <h2 className="featured-title">We Offer</h2>
          <div className="underline" />
          <FeaturedCard />
        </div>
      </section>
    </>
  )
}

export default Featured
