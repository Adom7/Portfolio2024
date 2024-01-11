import React from "react";
import "./HeroSection.css";
import clay1 from '../../media/floating/Clay_Black0001.png'
import clay2 from '../../media/floating/Clay_Black0002.png'
import clay3 from '../../media/floating/Clay_Black0003.png'

const HeroSection = ({
  title,
  subtitle,
  hasButton,
  buttonLabel,
  profileImg,
}) => {
  return (
      <div className="hero-section">
          {/* <img  className="floating"src={clay1} alt="" style={{ position : "absolute " , marginRight : '70%' , marginBottom : '20%' , height : '20%'} } /> */}
          {/* <img  className="floating-rotate"src={clay3} alt="" style={{ position : "absolute " , marginLeft : '90%' , marginTop : '-6  0%' , height : '50%'} } /> */}

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

// export const clayStyle = {
//   position : "relative",
//   top : Math.random
// }