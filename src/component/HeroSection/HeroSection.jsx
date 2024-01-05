import React from "react";
import "./HeroSection.css";

const HeroSection = ({
  title,
  subtitle,
  hasButton,
  buttonLabel,
  imageUrl,
  profileImg,
}) => {
  return (
      <div
        className="hero-section"
        style={{ backgroundImage: `url(${imageUrl})` }}
      >
        {profileImg && (
          <img src={profileImg} alt="Profile" className="hero-profile-img" />
        )}
        <div className="hero-content">
          <h1 className="hero-title">{title}</h1>
          <p className="hero-subtitle">{subtitle}</p>
          {hasButton && <button className="hero-cta">{buttonLabel}</button>}
        </div>
      </div>
  );
};

export default HeroSection;
