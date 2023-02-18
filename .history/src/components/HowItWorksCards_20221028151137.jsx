import React from "react";

export default function HowItworksCards(props) {
  return (
    <>
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
    </>
  );
}