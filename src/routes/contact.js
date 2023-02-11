import React from 'react'
import Navbar from '../components/navbar'
import Footer from "../components/footer"
import Img2 from '../components/img2'
import Form from "../components/form"
const contact = () => {
  return (
    <div>
      <Navbar/>
      <Img2 heading="CONTACT" text="lets send a message..."/>
        <Form/> 
        <Footer/>
    </div>
  )
}

export default contact