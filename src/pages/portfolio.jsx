import React from 'react'
import PageHeader from '../components/common/pageHeader'
import Gallery from '../components/gallery'
import Brands from '../components/brands'
import InstagramGallery from '../components/instagramGallery'
import { ScrollRestoration } from 'react-router-dom'

const Portfolio = () => {
  return (
    <>
      <PageHeader pageName={"Portafolio"} />
      <Gallery />
      <Brands />
      {/* <InstagramGallery /> */}
      <ScrollRestoration/>
    </>
  )
}

export default Portfolio