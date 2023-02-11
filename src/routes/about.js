import React from 'react'
import Navbar from '../components/navbar'
import Footer from "../components/footer"
import Img2 from '../components/img2'
import Aboutcontent from '../components/aboutcontent'

const about = () => {
  return (
    <div>
      <Navbar/>
      <Img2 heading="ABOUT" text="iam a web developer"/>
      <Aboutcontent/>
        <Footer/>
    </div>
  )
}

export default about