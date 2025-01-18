import React from 'react'
import Header from '../common/header/Header'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom' // Use Switch from v5
import Home from '../home/Home'
import Footer from '../common/footer/Footer'
import About from '../about/About'
import Blog from '../properties/Blog'
import Services from '../services/Services'
import Contact from '../contact/Contact'
import DetailsPage from '../details/DetailsPage'

const Pages = () => {
  return (
    <Router>
      <Header />
      <Switch>
        <Route exact path="/" component={Home} />
        <Route path="/about" component={About} />
        <Route path="/services" component={Services} />
        <Route path="/properties" component={Blog} />
        <Route path="/contact" component={Contact} />
        <Route path="/details/:id" component={DetailsPage} />
      </Switch>
      <Footer />
    </Router>
  )
}

export default Pages
