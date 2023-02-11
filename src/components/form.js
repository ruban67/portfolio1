import "./form.css"

import React from 'react'

const Form = () => {
  return (
    <div className="form">
        <form>
            <label> name</label>
            <input type="text" ></input>
            <label> e-mail</label>
            <input type="text" ></input>
            <label> subject</label>
            <input type="text" ></input>
            <label> message</label>
            <textarea rows="6" placeholder="type your message here"/>
           <button className="btn">submit</button>
        </form>
    </div>
  )
}

export default Form