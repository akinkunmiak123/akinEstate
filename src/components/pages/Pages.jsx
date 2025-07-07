import React from 'react'
import Header from '../common/header/Header'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom' // Use Switch from v5
import Home from '../home/Home'
import Footer from '../common/footer/Footer'
import About from '../about/About'
import Properties from '../properties/Properties'
import Services from '../services/Services'
import Contact from '../contact/Contact'
import DetailsPage from '../details/DetailsPage'
import Blog from '../Blog/Blog'
import BlogDetails from '../BlogDetails/BlogDetails'
import Line from '../Line/LineSection'
import WhatsAppChat from '../whatsapp/WhatsAppChat'
import ScrollToTop from '../Scroll/ScrollToTop'
import ComparePage from '../Compare/ComparePage'
import CompareBar from '../Compare/CompareBar'

const Pages = () => {
  return (
    <Router>
      <Header />
      <ScrollToTop />
      <Switch>
        <Route exact path="/" component={Home} />
        <Route path="/about" component={About} />
        <Route path="/services" component={Services} />
        <Route path="/properties" component={Properties} />
        <Route path="/blog" component={Blog} />
        <Route path="/blogs/:slug" component={BlogDetails} />
        <Route path="/contact" component={Contact} />
        <Route path="/details/:slug" component={DetailsPage} />
        <Route path="/compare" component={ComparePage} />
      </Switch>
      <CompareBar />
      <WhatsAppChat />
      <Line />
      <Footer />
    </Router>
  )
}


export default Pages
