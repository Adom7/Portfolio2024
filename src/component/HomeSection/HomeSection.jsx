import React, { Component } from "react";
import "./../HomeSection/HomeSection.css";
import Header from "../Header/Header.jsx";
import web from "../../media/AppleDevices/MacbookBlack.png";
import mobile from "../../media/AppleDevices/iPhoneBlack.png";
import LogoSVG from "../Logos/Logo.jsx";

import heroConfig from "../HeroSection/HeroConfig.json";

class HomeSection extends Component {
  render() {
    return (
      <div className="home-section-master">
        <div className="home-section noise">
          <Header sections={heroConfig} />
          <div class="home-content">
            <h1 className="home-title">Adlane Ould Mohand</h1>
            <h1 className="home-title">A . M</h1>
            <h2 className="home-sub-title">Developpeur </h2>
            <h2 className="home-sub-title">Front End</h2>
            <div className="web-and-mobile">
              <div className="title-and-image-container web">
                <h2>Web</h2>
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
                <h2>Mobile</h2>
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
            <div className="big-logo">
              <LogoSVG/>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default HomeSection;
