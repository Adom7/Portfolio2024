import React from "react";
import "./HeroSection.css";
// import rocket from "../../media/rocket.png";
import clay1 from "../../media/floating/Clay_Black0001.png";
import clay2 from "../../media/floating/Clay_Black0002.png";
import clay3 from "../../media/floating/Clay_Black0003.png";
import clay4 from "../../media/floating/Clay_Black0004.png";
import clay5 from "../../media/floating/Clay_Black0005.png";
import clay6 from "../../media/floating/Clay_Black0006.png";
import clay7 from "../../media/floating/Clay_Black0007.png";
import clay8 from "../../media/floating/Clay_Black0008.png";
import clay9 from "../../media/floating/Clay_Black0009.png";
import cla10 from "../../media/floating/Clay_Black0010.png";

const HeroSection = ({
  title,
  subtitle,
  description,
  hasButton,
  buttonLabel,
  illustration,
}) => {
  const clayImages = [
    clay1,
    clay2,
    clay3,
    clay4,
    clay5,
    clay6,
    clay7,
    clay8,
    clay9,
    cla10,
  ];

  const randomIndex = Math.floor(Math.random() * clayImages.length);
  const randomClayImage = clayImages[randomIndex];

  const imageUrl = illustration ? require(`../../media/${illustration}`) : undefined;

  const descriptionParagraph = description.split('\n').map((str, index) => (
    <span key={index}>
      {str}
      <br />
    </span>
  ));

  return (
    <div className="hero-section">
      <div className="meteorite">
        <img
          className=" flight-throught-tl-br"
          src={clay1}
          alt=""
          style={{
            position: "absolute ",
            marginRight: "70%",
            marginBottom: "20%",
            height: "20%",
          }}
        />
      </div>
      <img
        className="floating-rotate"
        src={randomClayImage}
        alt=""
        style={{
          position: "absolute ",
          marginLeft: "90%",
          marginTop: "-6  0%",
          height: "50%",
        }}
      />

      <div className="hero-card">
        <div className="hero-content">
          <h1 >{title}</h1>
          <h2 >{subtitle}</h2>
          <p >{descriptionParagraph}</p>
          {hasButton && <button className="hero-cta">{buttonLabel}</button>}
        </div>
        {illustration && (
            <img
              src={imageUrl}
              alt="illustration"
              className="hero-card-illustration floating"
            />
        )}
      </div>
    </div>
  );
};

export default HeroSection;

// export const clayStyle = {
//   position : "relative",
//   top : Math.random
// }
