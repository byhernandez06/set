import React from 'react'
import PageHeader from '../components/common/pageHeaderContact'
import ContactForm from '../components/contactForm'
import InstagramGallery from '../components/instagramGallery'
import { ScrollRestoration } from 'react-router-dom'

const Contact = () => {
  return (
    <>
      <PageHeader pageName={"Contacto"} />
      <ContactForm />
      {/* <InstagramGallery /> */}
      <ScrollRestoration/>
    </>
  )
}

export default Contact