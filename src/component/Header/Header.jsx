import React, { Component } from "react";
import "./Header.css";
import LogoAM from "../../media/logo-AM.png";

class Header extends Component {
  render() {
    return (
      <div>
        <header className="header-master-container">
          <nav className="logo-and-section-container">
            <a href="AM-Logo" className="logo-container">
              <img
                src={LogoAM}
                width="40px"
                height="32px"
                alt="LogoAM"
                className="logo-img"
              />
            </a>
            <ul className="sections-container">
              <li>
                <a href="Adlane OULD c'est qui" className="section-link">
                  Who A.M I ?
                </a>
              </li>
              <li>
                <a href="Adlane OULD Projets" className="section-link">
                  Project
                </a>
              </li>
            </ul>
          </nav>
          <div className="contact-container">
            <a href="Adlane OULD ContactezMoi" className="contact-me-button-container">
              <button className="contact-me">
                Contact Me
              </button>
            </a>
          </div>
        </header>
      </div>
    );
  }
}

export default Header;
