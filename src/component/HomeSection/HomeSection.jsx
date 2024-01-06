import React, { Component } from "react";
import "./../HomeSection/HomeSection.css";
import Header from "../Header/Header.jsx";
import web from "../../media/Web-alone.png";
import mobile from "../../media/mobile-alone.png";
import webAndMobile from "../../media/WebAndMobile.png";

class HomeSection extends Component {
  render() {
    return (
      <div className="home-section-master">
        <div class="home-section noise">
          <Header />
          <div class="home-content">
            <h1 className="home-title">Adlane Ould Mohand</h1>
            <h1 className="home-title">A . M</h1>
            <h2 className="home-sub-title">Developpeur</h2>
            <div className="web-and-mobile">
               <div className="title-and-image-container">
                <h2>Web</h2>
                <div className="image-container">
                  <img src={web} alt="" srcset="" />
                </div>
              </div>
              <div className="title-and-image-container">
                <h2>mobile</h2>
                <div className="image-container">
                  <img src={mobile} alt="" srcset="" />
                </div>
              </div>  
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default HomeSection;
