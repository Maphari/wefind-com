import React from "react";

// CSS IMPORTS
import "../css/howItWork.css";
// media query
import "../css/mediaQuerie.css";

export default function HowItworksCards(props) {
  return (
    <>
      <div className="how-it-works-cards border-r-2 m">
        <div className="how-it-works-cards__images">
          <img src={props.src} alt={props.alt} />
        </div>
        <div className="how-it-works-cards__information">
          <h1 className="how-it-works-cards__information-title">
            {props.title}
          </h1>
          <div className="how-it-works-cards__information-btn">
            <button className="btn-btn-1">{props.learn}</button>
            <button className="btn-btn-2">{props.get}</button>
          </div>
        </div>
      </div>
    </>
  );
}
