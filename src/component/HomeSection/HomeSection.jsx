import React, { Component } from "react";
import "./../HomeSection/HomeSection.css";
import Header from "../Header/Header.jsx";
import web from "../../media/AppleDevices/MacbookBlack.png";
import mobile from "../../media/AppleDevices/iPhoneBlack.png";
import LogoLine from "../Logos/LogoLine.jsx";
import LogoLineLine from "../Logos/LogoLineLine.jsx";

import heroConfig from "../HeroSection/HeroConfig.json";

const homeSectionConfig = { name : "Adlane Ould Mohand" , pseudo : "A . M" , subTitle1 : "Developpeur" , subTitle2 : "Front End" , presLeft : "Web" , presRight : "Mobile"  }

class HomeSection extends Component {
  

  render() {
    return (
      <div className="home-section-master">
        <div className="home-section noise">
          <Header sections={heroConfig} />
          <div class="home-content">
            <h1 className="home-title">{homeSectionConfig.name}</h1>
            <h1 className="home-title">{homeSectionConfig.pseudo}</h1>
            <h2 className="home-sub-title">{homeSectionConfig.subTitle1}</h2>
            <h2 className="home-sub-title">{homeSectionConfig.subTitle2}</h2>
            <div className="web-and-mobile">
              <div className="title-and-image-container web">
                <h2>{homeSectionConfig.presLeft}</h2>
                <a href="#Prices-Web">
                  <div className="home-illustration">
                    <img
                      className="floating-rotate"
                      height="260px"
                      src={web}
                      alt=""
                      srcset=""
                    />
                  </div>
                </a>
              </div>
              <div className="title-and-image-container mobile">
                <h2>{homeSectionConfig.presRight}</h2>
                <a href="#Prices-Mobile">
                  <div className="home-illustration">
                    <img
                      className="floating-rotate"
                      height="260px"
                      src={mobile}
                      alt=""
                      srcset=""
                    />
                  </div>
                </a>
              </div>
            </div>
            <div className="big-logo-line">
              {/* <LogoSVG/> */}
              <LogoLineLine />
            </div>
            <div className="big-logo">
              {/* <LogoSVG/> */}
              <LogoLine />
            </div>
           
          </div>
        </div>
      </div>
    );
  }
}

export default HomeSection;
