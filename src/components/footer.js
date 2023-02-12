import "../components/footerstyle.css"


import React from 'react'
import HomeIcon from '@mui/icons-material/Home';
import CallIcon from '@mui/icons-material/Call';
import EmailIcon from '@mui/icons-material/Email';
import FacebookIcon from '@mui/icons-material/Facebook';
import InstagramIcon from '@mui/icons-material/Instagram';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import GitHubIcon from '@mui/icons-material/GitHub';
const Footer = () => {
  return (
    <div className="footer">
<div className="footer-container">
    <div className="left">
        <div className="details">
             <HomeIcon size={20} style={{color:"#fff",
             marginRight:"2rem"}}/>
             <div>
                <p>100,kpm thottam,T.R.pattinam,karaikal 609606</p>
                <p>Puducherry, India</p>
             </div>
        </div>
        <div className="call">
            <h4>
            <CallIcon size={20} style={{color:"#fff",
             marginRight:"2rem"}}/>
            +91 9159259324
            </h4>
            
        </div>
        <div className="mail">
            <h4>
            <EmailIcon size={20} style={{color:"#fff",
             marginRight:"2rem"}}/>
            rubansmash17@gmail.com
            </h4>
            
        </div>
    </div>

    <div className="right">
        <h4>about us</h4>
        <p>This is Ruban.I enjoys to create new projects and challenges.</p>
        <div className="social">
            <FacebookIcon size={20} style={{color:"#fff",
             marginRight:"2rem"}}/>
             <InstagramIcon size={20} style={{color:"#fff",
             marginRight:"2rem"}}/>
             <LinkedInIcon size={20} style={{color:"#fff",
             marginRight:"2rem"}}/>
              <GitHubIcon size={20} style={{color:"#fff",
             marginRight:"2rem"}}/>
        </div>
    </div>

</div>

    </div>
    
  )
}

export default Footer