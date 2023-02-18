import React, { Fragment } from "react";

// CSS IMPORTS
import "../css/howItWork.css";
// media query
import "../css/mediaQuerie.css";

// COMPONENTS IMPORT
import HowCards from "./HowItWorksCard";

// IMAGES IMPORTS
import img1 from './img/Rectangle-1.png';

export default function howItWork(props) {
  return (
    <Fragment>
      <div className="how-it-works-container">
        <h1 className="how-containerr__title">How it work's</h1>
        <div className="how-containerr">
          <div className="info">
            <HowCards
              src={img1}
              alt="message-indication"
              title="Get secure messaging space. with more functionality"
            />
            <div className="line"></div>
            <HowCards
              src={img1}
              alt="message-indication"
              title="Get secure messaging space. with more functionality"
            />
            <HowCards
              src={img1}
              alt="message-indication"
              title="Get secure messaging space. with more functionality"
            />
            <div className="line"></div>
          </div>
        </div>
      </div>
    </Fragment>
  );
}
