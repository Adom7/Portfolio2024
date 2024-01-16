import React from "react";
import "./HeroSection.css";


import clay1 from "../../media/floating/Clay_Black0001.png";
import clay2 from "../../media/floating/Clay_Black0002.png";
import clay3 from "../../media/floating/Clay_Black0003.png";
import clay4 from "../../media/floating/Clay_Black0004.png";
import clay5 from "../../media/floating/Clay_Black0005.png";
import clay6 from "../../media/floating/Clay_Black0006.png";
import clay7 from "../../media/floating/Clay_Black0007.png";
import clay8 from "../../media/floating/Clay_Black0008.png";
import clay9 from "../../media/floating/Clay_Black0009.png";
import clay10 from "../../media/floating/Clay_Black0010.png";

const HeroSection = ({
  sectionName,
  title,
  subtitle,
  description,
  hasButton,
  buttonLabel,
  illustration,
  socialMedia,
  projectCard,
  projectCardImage

}) => {

  const cleanSectionName = sectionName.replace(/\s+/g, '')

  function getrandomMeteoritePlace() {
    const plusOrMinus = Math.random() < 0.5 ? -1 : 1;
    return {
      position: "absolute ",
      left: Math.round(Math.random() * 80) + "%",
      marginTop: Math.round(Math.random() * plusOrMinus * 10) + "px",
      height: "70%",
    };
  }


  function getrandomPosition() {
    return {
      position: "absolute ",
      marginRight: Math.round(Math.random() * 80) + "%",
      marginBottom: Math.round(Math.random() * 50) + "%",
      height: "20%",
    }
  }

  const deplacementCSS = ["flight-throught-tl-br", "rotate",];

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
    clay10,
  ];

  const randomDeplacementIndex = Math.floor(Math.random() * deplacementCSS.length);
  const randomDeplacementCSS = deplacementCSS[randomDeplacementIndex];

  function getRandomClayImage() {
    const randomClayIndex = Math.floor(Math.random() * clayImages.length);
    const randomClayImage = clayImages[randomClayIndex];
    return randomClayImage
  }


  function getImagePath(image) {
    return require(`../../media/${image}`)
  }

  const descriptionParagraph = description.split("\n").map((string, index) => (
    <span key={index}>
      {string}
      <br />
    </span>
  ));

  return (
    <div className="hero-section">
      <div>
        <img
          className={`${randomDeplacementCSS}`}
          src={getRandomClayImage()}
          alt=""
          style={getrandomPosition()}
        />

        <img
          className="floating-rotate"
          src={getRandomClayImage()}
          alt=""
          style={getrandomMeteoritePlace()}
        />
      </div>

      <div className="hero-card">
        <div className="hero-content">
          <h1 className="home-title">{title}</h1>
          <h2>{subtitle}</h2>
          {projectCard ? (
            <div className="project-card">
              <img src={getImagePath(projectCardImage)} alt="" />
            </div>
          ) : (
            <p>{descriptionParagraph}</p>
          )}
          {socialMedia && (
            <div className="hero-social-media-icons">
              {socialMedia.map((media, index) => (
                <a key={index} href={media.socialLink} target="_blank" rel="noopener noreferrer">
                  <img src={getImagePath(media.imageLink)} alt={`Social media ${index + 1}`} />
                </a>
              ))}
            </div>
          )}
          {hasButton && <button className="hero-cta">{buttonLabel}</button>}
        </div>
        {illustration && (
          <img
            src={getImagePath(illustration)}
            alt="illustration"
            className={`hero-card-illustration floating ${cleanSectionName} `}
          />
        )}
      </div>
    </div>
  );
};

export default HeroSection;

