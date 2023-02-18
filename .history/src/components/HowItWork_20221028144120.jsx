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

          <div className="how-it-works-cards">
            <div className="how-it-works-cards__images"><img src={showImg} alt="" /></div>
          </div>
        </div>
      </div>
    </Fragment>
  );
}
