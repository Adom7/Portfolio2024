import React, { Component } from "react";
import "./../HomeSection/HomeSection.css";
import Header from "../Header/Header.jsx";
import web from "../../media/AppleDevices/MacbookBlack.png";
import mobile from "../../media/AppleDevices/iPhoneBlack.png";

class HomeSection extends Component {

  render() {
    const { heroConfig } = this.props; // Récupère heroConfig des props

    return (
      <div className="home-section-master">
        <div className="home-section noise">
          <Header sections={heroConfig} />
          <div class="home-content">
            <h1 className="home-title">Adlane Ould Mohand</h1>
            <h1 className="home-title">A . M</h1>
            <h2 className="home-sub-title">Developpeur</h2>
            <div className="web-and-mobile">
               <div className="title-and-image-container">
                <h2>Web</h2>
                  <a href="#Prices-Web">
                  <img  className="floating-rotate" height='300px' src={web} alt="" srcset="" />
                  </a>
              </div>
              <div className="title-and-image-container">
                <h2>Mobile</h2>
                <a href="#Prices-Mobile">
                  <img  className="floating-rotate" height='300px' src={mobile} alt="" srcset="" />
                  </a>
              </div>  
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default HomeSection;
