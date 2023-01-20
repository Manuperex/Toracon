import React from "react";
import "./Footer.css";
import LogoFinal from "../../assets/Footer/LogoFinal.png";
import LogoTitle from "../../assets/Footer/LogoTitle.png";
import Whatsapp from "../../assets/Footer/whatsapp.png";
import GitHub from "../../assets/Footer/github.png";
import Linkedin from "../../assets/Footer/linkedin.png";
import Instagram from "../../assets/Footer/instagram.png";
import Facebook from "../../assets/Footer/facebook.png";

const Footer = () => {
  return (
    <div className="Footer">
      <div className="Footer-Logo">
        <img src={LogoFinal} alt="" />
      </div>
      <div className="Footer-info">
        <div className="Footer-Logo-title">
          <img src={LogoTitle} alt="" />
        </div>
        <div className="Footer-contact">
          <div className="Contact-networks">
            <div>
              <h3>
                Contáctanos
              </h3>
            </div>
            <div className="Footer-Contact-img">
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
          <div className="Contact-Developer">
            <div>
              <h3>
                Manuel Pérez
              </h3>
            </div>
            <div className="Contact-Developer-img">
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
  );
};

export default Footer;
