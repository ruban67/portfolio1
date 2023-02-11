import "./imgstyle.css"

import React from 'react'
import Intro from "../assets/img1.jpg"
import {Link} from "react-router-dom"

const img = () => {
  return (
    <div className="main">
      <div className="mask">
        <img className="intro" src={Intro} alt=""/>

      </div>

      <div className="content">

        <p>HI, IAM A FULLSTACK DEVELOPER</p>
        <h1>MERN developer</h1>
        \<div>
            <Link to="/project" className="btn">
                projects
            </Link>

            <Link to="/contact" className="btn btn-light">
                contact
            </Link>
        </div>

      </div>

    </div>
  )
}

export default img