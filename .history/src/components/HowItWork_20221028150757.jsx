import React, { Fragment } from "react";

// CSS IMPORTS
import "../css/howItWork.css";

//IMAGES IMPORTS
import showImg from "./img/phone.png";

export default function howItWork() {
  return (
    <Fragment className="how-it-works-container">
      <div className="how-it-works-container">
        <div className="how-containerr">
          <h1 className="how-containerr__title">How it work's</h1>

          <div className="how-it-works-cards border-r-2">
            <div className="how-it-works-cards__images">
              <img src={showImg} alt="how it works" />
            </div>
            <div className="how-it-works-cards__information">
              <h1 className="how-it-works-cards__information-title">
                Search for help, and you can
                <br /> browse availbale categories.
              </h1>
              <div className="how-it-works-cards__information-btn">
                <button className="btn-btn-1">Learn more</button>
                <button className="btn-btn-2">Get started</button>
              </div>
            </div>
          </div>

          <div className="how-it-works-cards border-r-2">
            <div className="how-it-works-cards__images">
              <img src={showImg} alt="how it works" />
            </div>
            <div className="how-it-works-cards__information">
              <h1 className="how-it-works-cards__information-title">
                Search for help, and you can
                <br /> browse availbale categories.
              </h1>
              <div className="how-it-works-cards__information-btn">
                <button className="btn-btn-1">Learn more</button>
                <button className="btn-btn-2">Get started</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Fragment>
  );
}
