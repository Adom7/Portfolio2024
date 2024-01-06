import React, { Component } from "react";
import './../HomeSection/HomeSection.css'
import Header from '../Header/Header.jsx'

class HomeSection extends Component {
  render() {
    return (
      <div>
        <div class="home-section noise">
            <Header/>
          <div class="home-content">
            <h1>Adlane Ould mohand The Best Dev for the Best Future !</h1>
            <h2>Portfolio</h2>
          </div>
        </div>
      </div>
    );
  }
}

export default HomeSection;
