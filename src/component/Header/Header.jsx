import React, { Component } from "react";
import "./Header.css";
import LogoAM from "../../media/logo-AM.png";

class Header extends Component {
  navigateToSection = (sectionId) => {
    const section = document.getElementById(sectionId);
    section.scrollIntoView({ behavior: 'smooth' });
  };

  render() {
    const { sections } = this.props;
    const callToActionSection = sections.find(section => section.isCallToAction);
    const navigationSections = sections.filter(section => !section.isCallToAction);


    return (
      <header className="header-master-container">
        <nav className="logo-and-section-container">
          <a className="logo-container">
            <img src={LogoAM} width="40px" height="32px" alt="LogoAM" className="logo-img" />
          </a>
          <ul className="sections-container">
            {navigationSections.map((section) => (
              <li key={section.sectionName}>
                <button
                  onClick={() => this.navigateToSection(section.sectionName.replace(/\s+/g, ''))}
                  className="section-link"
                >
                  {section.sectionName}
                </button>
              </li>
            ))}
          </ul>
        </nav>
          {callToActionSection && (
            <div className="CTA-container">
              <button
                onClick={() => this.navigateToSection(callToActionSection.sectionName.replace(/\s+/g, ''))}
                className="CTA-button-container"
              >
                {callToActionSection.sectionName}
              </button>
            </div>
          )}
        </header>
    );
  }
}

export default Header;