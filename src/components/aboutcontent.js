import "./aboutcontent.css"

import React from 'react'
import { Link } from "react-router-dom"
import Mern1 from "../assets/mern1.jpg"

const Aboutcontent = () => {
  return (
    <div className="about">
        <div className="left">
            <h1>who am i?</h1>
            <p>I'm A Well Trained Web Developer And Designing With New Features From Ideation To Production. And Also Take Into Consideration A User Experience While Writing Reusable And Efficient Code. And To Be Passionately Combine Good Design, Updated Technology And Innovative In All My Projects Which I Like To Accompany From The First Idea To Release Currently I Am Focused On The Full Stack Developement..</p>
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