import React from 'react'
import "./Contact.css"
import LogoTitle from "../../assets/Footer/LogoTitle.png";
import Whatsapp from "../../assets/Footer/whatsapp.png";
import GitHub from "../../assets/Footer/github.png";
import Linkedin from "../../assets/Footer/linkedin.png";
import Instagram from "../../assets/Footer/instagram.png";
import Facebook from "../../assets/Footer/facebook.png";

const Contact = () => {
  return (
    <div className="Contact">
      <div className="Contact-info">
        <div className="Contact-Logo-title">
          <img src={LogoTitle} alt="" />
        </div>
        <div className="Contact-contact">
          <div className="Networks-Page">
            <div>
              <h3>
                Contáctanos
              </h3>
            </div>
            <div className="Networks-Contact-img">
              <div>
                <a href="https://api.whatsapp.com/send?phone=+573508994476&text=Estoy%20Interesado"><img src={Whatsapp} alt="" /></a>
              </div>
              <div>
                <a href="https://www.facebook.com/profile.php?id=100083286635168&mibextid=ZbWKwL"><img src={Facebook} alt="" /></a>
                
              </div>
              <div>
                <a href="https://instagram.com/toraconbqto?igshid=ZDdkNTZiNTM="><img src={Instagram} alt="" /></a>
                
              </div>
            </div>
            
          </div>
          <div className="Developer-Page">
            <div>
              <h3>
                Manuel Pérez
              </h3>
            </div>
            <div className="Developer-Network-img">
              <div>
                <a href="https://github.com/Manuperex"><img src={GitHub} alt="" /></a>
                
              </div>
              <div>
                <a href="https://www.linkedin.com/in/manuel-perez-b3941a107/"><img src={Linkedin} alt="" /></a>
                
              </div>
            </div>
            
          </div>
        </div>
      </div>
    </div>
  )
}

export default Contact