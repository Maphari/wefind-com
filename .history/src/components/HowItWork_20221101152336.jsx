import React, { Fragment } from "react";

// CSS IMPORTS
import "../css/howItWork.css";
// media query
import "../css/mediaQuerie.css";

// COMPONENTS IMPORT
import HowCards

export default function howItWork(props) {
  return (
    <Fragment>
      <div className="how-it-works-container">
        <h1 className="how-containerr__title">How it work's</h1>
        <div className="how-containerr">
          <div className="info">
            {/* card comp here */}
            <div className="line"></div>
          </div>
        </div>
      </div>
    </Fragment>
  );
}
