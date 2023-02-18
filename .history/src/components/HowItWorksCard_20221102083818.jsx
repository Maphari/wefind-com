import React from "react";

// CSS IMPORTS
import "../css/howItWork.css";
// media query
import "../css/mediaQuerie.css";

export default function HowItWorksCard (props) {
    return (
      <>
        <div className="how-it-works-cards">
          <div className="how-it-works-cards__images">
            <img src={props.src} alt={props.alt} className="how-it-works-cards__images"/>
          </div>
          <div className="how-it-works-cards__information">
            <h1 className="how-it-works-cards__information-title">
              {props.title}
            </h1>
            <div className="how-it-works-cards__information-btn">
              <button className="btn-btn-1">Learn more</button>
              <button className="btn-btn-2">Get started</button>
            </div>
          </div>
        </div>
      </>
    );
}