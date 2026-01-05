import React, { useEffect } from 'react'
import Banner from './components/banner'
import Fetuses from './components/fetuses'
import About from './components/about'
import Brands from './components/brands'
import { ScrollRestoration } from 'react-router-dom'

const Home = () => {
  return (
    <>
      <Banner />
      <Fetuses />
      <About />
      <Brands />
      {/* <TeamComponent /> */}
      {/* <Gallery /> */}
      {/* <Testimonial /> */}
      {/* <PricingComponent /> */}
      {/* <BlogsComponent /> */}
      {/* <InstagramGallery /> */}
      <ScrollRestoration/>
    </>
  )
}

export default Home