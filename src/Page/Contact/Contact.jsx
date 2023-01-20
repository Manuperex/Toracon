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
                <img src={Whatsapp} alt="" />
              </div>
              <div>
                <img src={Facebook} alt="" />
              </div>
              <div>
                <img src={Instagram} alt="" />
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
                <img src={GitHub} alt="" />
              </div>
              <div>
                <img src={Linkedin} alt="" />
              </div>
            </div>
            
          </div>
        </div>
      </div>
    </div>
  )
}

export default Contact