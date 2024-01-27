import React, { Component } from "react";
import "./HomePage.css";
import HeroConfig from "../../section/HeroSection/HeroConfig.json";
import HeroSection from "../../section/HeroSection/HeroSection.jsx";
import HomeSection from "../../section/HomeSection/HomeSection.jsx";
import ScrollerSection from "../../section/ScollerSection/ScollerSection.jsx";
import LoadingAnimation from "../../section/LoadingAnimation/LoadingAnimation.jsx";

class HomePage extends Component {
  render() {
    return (
      <div>
        <LoadingAnimation />
        <div className="Home">
          <HomeSection heroConfig={HeroConfig} />
        </div>
        <div className="noise">
          <ScrollerSection />
        </div>
        <div className="heros">
          {HeroConfig.map((section, index) => (
            <div
              key={index}
              id={section.sectionName.replace(/\s+/g, "")}
              className="section"
            >
              <HeroSection {...section} />
            </div>
          ))}
        </div>
      </div>
    );
  }
}

export default HomePage;
