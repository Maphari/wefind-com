import React, { Fragment } from "react";

// CSS IMPORTS
import "../css/howItWork.css";
// media query
import "../css/mediaQuerie.css";

export default function howItWork(props) {
  return (
    <Fragment>
      <div className="how-it-works-container">
        <h1 className="how-containerr__title">How it work's</h1>
        <div className="how-containerr">
          <div className="info">
            <div className="how-it-works-cards">
              <div className="how-it-works-cards__images">
                <img src={props.src} alt="sho1"wcase img- />
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
          </div>
        </div>
      </div>
    </Fragment>
  );
}
