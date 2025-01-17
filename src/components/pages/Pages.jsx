import React from 'react'
import Header from '../common/header/Header'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import Home from '../home/Home'
import Footer from '../common/footer/Footer'
import About from '../about/About'
import Blog from '../properties/Blog'
import Services from '../services/Services'
import Contact from '../contact/Contact'
import DetailsPage from '../details/DetailsPage'

const Pages = () => {
  return (
    <>
      <Router>
        <Header />
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/about" component={About} />
          <Route path="/details/:id" component={DetailsPage} /> {/* Fixed */}
          <Route exact path="/services" component={Services} />
          <Route exact path="/properties" component={Blog} />
          <Route exact path="/contact" component={Contact} />
        </Switch>
        <Footer />
      </Router>
    </>
  )
}

export default Pages
