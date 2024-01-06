import React, { Component } from "react";
import "./Header.css";
import LogoAM from "../../media/logo-AM.png";

class Header extends Component {
  render() {
    return (
        <header className="header-master-container">
          <nav className="logo-and-section-container">
            <a href="/" className="logo-container">
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
                <a href="/" className="section-link">
                  Who A.M I ?
                </a>
              </li>
              <li>
                <a href="/" className="section-link">
                  Project
                </a>
              </li>
            </ul>
          </nav>

          <div class="menu-icon" id="menu-icon">
            <input class="menu-icon__cheeckbox" type="checkbox" />
            <div>
              <span></span>
              <span></span>
            </div>
          </div>
          <div className="contact-container">
            <a href="/"className="contact-me-button-container">
              <button className="contact-me">Contact Me</button>
            </a>
          </div>
        </header>
    );
  }
}

export default Header;
