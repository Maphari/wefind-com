import React, { Fragment } from "react";

// CSS IMPORTS
import "../css/howItWork.css";
// media query
import "../css/mediaQuerie.css";

// COMPONENTS IMPORT
import HowCards from "./HowItWorksCard";

// IMAGES IMPORTS
// import img1 from './img/Rectangle-1.png';
// import img2 from "./img/Rectangle-2.png";
// import img3 from "./img/Rectangle-3.png";

export default function howItWork(props) {
  return (
    <Fragment>
      <div className="how-it-works-container">
        <div className="how-containerr">
          <h1 className="how-containerr__title">How it work's</h1>
          <div className="info">
            <HowCards />
          </div>
        </div>
      </div>
    </Fragment>
  );
}
