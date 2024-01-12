import React from "react";
import "./HeroSection.css";
import clay1 from '../../media/floating/Clay_Black0001.png'
import clay2 from '../../media/floating/Clay_Black0002.png'
import clay3 from '../../media/floating/Clay_Black0003.png'
import clay4 from '../../media/floating/Clay_Black0004.png'
import clay5 from '../../media/floating/Clay_Black0005.png'
import clay6 from '../../media/floating/Clay_Black0006.png'
import clay7 from '../../media/floating/Clay_Black0007.png'
import clay8 from '../../media/floating/Clay_Black0008.png'
import clay9 from '../../media/floating/Clay_Black0009.png'
import cla10 from '../../media/floating/Clay_Black0010.png'



const HeroSection = ({
  title,
  subtitle,
  hasButton,
  buttonLabel,
  profileImg,
}) => {
  const clayImages = [
    clay1, clay2, clay3, clay4, clay5, clay6, clay7, clay8, clay9, cla10
  ];
  
  const randomIndex = Math.floor(Math.random() * clayImages.length);
  const randomClayImage = clayImages[randomIndex];
  
  console.log(randomClayImage);
  return (
      <div className="hero-section">
        <div className="meteorite">
        <img  className=" flight-throught-tl-br"src={clay1} alt="" style={{ position : "absolute " , marginRight : '70%' , marginBottom : '20%' , height : '20%'} } />

        </div>
        <img  className="floating-rotate"src={randomClayImage} alt="" style={{ position : "absolute " , marginLeft : '90%' , marginTop : '-6  0%' , height : '50%'} } />

        
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