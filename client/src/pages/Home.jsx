import React from 'react'
import Banner from '../components/Home/Banner'
import Hero from '../components/Home/Hero'
import Feature from '../components/Home/Feature'
import Testimonial from '../components/Home/Testimonial'
import CallToAction from '../components/Home/CallToAction'
import Footer from '../components/Home/Footer'

const Home = () => {
  return (
    <div>
        <Banner />
        <Hero />
        <Feature />
        <Testimonial />
        <CallToAction />
        <Footer />
    </div>
  )
}

export default Home
