import React from 'react'
import Navbar from '../components/navbar'
import Img from "../components/img"
import Footer from "../components/footer"
import Workcard from '../components/workcard'

const home = () => {
  return (
    <div>
        <Navbar/>
        <Img/>
        <Workcard/>
        <Footer/>
    </div>
  )
}

export default home