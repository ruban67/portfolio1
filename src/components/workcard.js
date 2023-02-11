import "./workcard.css";

import React from 'react'
import img1pro from"../assets/img1pro.png"
import { NavLink } from "react-router-dom";

const Workcard = () => {
  return (
    <div className="work-container">
        <h1 className="project-heading">projects</h1>
        <div className="project-container">
            <div className="project-card">
              <img src={img1pro} alt=""/>
              <h2 className="project-title">API ECOMMERCE </h2>
              <p>Implement the Makeup API using async/await with fetch</p>
             <div className="pro-btns">
                <NavLink to="https://famous-baklava-182993.netlify.app/" className="btn">view</NavLink>
                
             </div>
            </div>

        </div>
    </div>
  )
}

export default Workcard