import React from 'react'
import Navbar from '../components/navbar'
import Footer from "../components/footer"
import Img2 from '../components/img2'
import Workcard from"../components/workcard";

const project = () => {
  return (
    <div>
        <Navbar/>
        <Img2 heading="PROJETS" text=" my recent works"/>
         <Workcard/>
        <Footer/>

    </div>
  )
}

export default project 