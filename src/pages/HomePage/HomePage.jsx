import React, { Component } from 'react';
import './HomePage.css'
import HeroConfig from "../../component/HeroSection/HeroConfig.json";
import HeroSection from "../../component/HeroSection/HeroSection.jsx";
import HomeSection from "../../component/HomeSection/HomeSection.jsx";

class HomePage extends Component {
  render() {
    return (
      <div>
        <div className="Home">
          <HomeSection heroConfig={HeroConfig} />
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