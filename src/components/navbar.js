import "./navbar.css"


import React, { useState } from "react";
import {Link} from "react-router-dom";
import MenuIcon from '@mui/icons-material/Menu';
import CloseIcon from '@mui/icons-material/Close';
import { color } from "@mui/system";

const Navbar = () => {
       const [click, setClick] = useState(false);
       const handleclick = () => setClick(!click);{

       const [color, setColor]=useState(false);
       const changecolor=()=>{
        if (window.scrollY >=100){
            setColor(true);
        }else{
            setColor(false);
        }
       };
       window.addEventListener("scroll",changecolor);
    }
  return (
    <div className={color ? "header header-bg" : "header"}>
        <Link to="/">
            <h1>PORTFOLIO</h1>
        </Link>
        <ul className={click ? "nav-list active":"nav-list"}>
            <li>
                <Link to="/">Home</Link>
            </li>
            <li>
                <Link to="/project">Project</Link>
            </li>
            <li>
                <Link to="/about">About</Link>
            </li>
            <li>
                <Link to="/contact">Contact</Link>
            </li>
        </ul>
        <div className="menu" onClick={handleclick}>
            {click ? ( <CloseIcon size={20} style={{color:"#f7f7f6"}}/>):(<MenuIcon size={20} style={{color:"#f7f7f6"}}/>)}
            
          
        </div>
    </div>
  );
};

export default Navbar;