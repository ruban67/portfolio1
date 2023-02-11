import "./aboutcontent.css"

import React from 'react'
import { Link } from "react-router-dom"
import Mern1 from "../assets/mern1.jpg"

const Aboutcontent = () => {
  return (
    <div className="about">
        <div className="left">
            <h1>who am i?</h1>
            <p>iam a fullstack developer.i develop  secure  websites for my clients..</p>
            <Link to="/contact">
                <button className="btn">contact</button>
            </Link>
        </div>
        <div className="right">
            <div className="img-container">
                <div classname="img-stack top">
                  <img src={Mern1} className="img" alt="true"/>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Aboutcontent