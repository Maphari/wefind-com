import React, { Fragment } from "react";

// CSS IMPORTS
import "../css/howItWork.css";
// media query
import "../css/mediaQuerie.css";

//IMAGES IMPORTS
import showImg from "./img/phone.png";
import img1 from "./img/Rectangle-1.png";
// import img2 from "./img/Rectangle-2.png";
// import img3 from "./img/Rectangle-3.png";

// COMPONENTS
import CardServices from "./CardService";

export default function howItWork() {
  return (
    <Fragment className="how-it-works-container">
      <div className="how-it-works-container">
        <div className="how-containerr">
          <h1 className="how-containerr__title">How it work's</h1>

          <div className="info">
            <div className="how-it-works-cards">
              <div className="how-it-works-cards__images">
                <img src={showImg} alt="showcase img-1" />
              </div>
              <div className="how-it-works-cards__information">
                <h1 className="how-it-works-cards__information-title">
                  Search for help, and you can
                  <br /> browse available categories.
                  <br /> No need to worry .
                </h1>
                <div className="how-it-works-cards__information-btn">
                  <button className="btn-btn-1">Learn more</button>
                  <button className="btn-btn-2">Get started</button>
                </div>
              </div>
            </div>

            <div className="line"></div>

            <div className="how-it-works-cards-1">
              <div className="how-it-works-cards__images">
                <img src={img1} alt="showcase img-2" />
              </div>
              <div className="how-it-works-cards__information">
                <h1 className="how-it-works-cards__information-title">
                  WeFind gives you the fexibility
                  <br /> of messaging so that you
                  <br /> communicate with your helper.
                </h1>
                <div className="how-it-works-cards__information-btn">
                  <button className="btn-btn-1">Learn more</button>
                  <button className="btn-btn-2">Get started</button>
                </div>
              </div>
            </div>
          </div>
          <div className="how-it-works-more">
            <CardServices number="01"
          </div>
        </div>
      </div>
    </Fragment>
  );
}
