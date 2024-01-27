import React from "react";
import "./Scroller.css";

let i = 3;
const images = require.context("../../media/TechLogos", true);
const imageList = images.keys().map((image) => images(image));


const Scroller = ({
    reversed
  }) => {
    function buildScroller() {
        let elements = [];
        let scrollerClassName = "scroller-elements";
        if (reversed) {
            scrollerClassName += "-reversed";
        }
      
        for (let j = 0; j < i; j++) {
          elements = elements.concat(
            <div className={scrollerClassName}>
              {imageList.map((image, index) => (
                <div className="box">
                  <img key={index} src={image} alt={`image-${index}`} />
                </div>
              ))}
            </div>
          );
        }
      
        return elements;
      }

    return (
      <>
        <div className="scroller-master">{buildScroller()}</div>
      </>
    );
  }


export default Scroller;