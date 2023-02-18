import React, { Fragment } from "react";

// CSS IMPORTS
import "../css/howItWork.css";
// media query
import "../css/mediaQuerie.css";

//IMAGES IMPORTS
import showImg from "./img/phone.png";
import img1 from "./img/Rectangle-1.png";
import img2 from "./img/Rectangle-2.png";
import img3 from "./img/Rectangle-3.png";

// COMPONENTS IMPORTS
import HowItWorkCards from "./HowItWorksCards";

export default function howItWork() {
  return (
    <Fragment className="how-it-works-container">
      <div className="how-it-works-container">
        <div className="how-containerr">
          <h1 className="how-containerr__title">How it work's</h1>

          <div className="info">
            <div className="how-it-works-cards">
              <div className="how-it-works-cards__images">
                <img src={showImg} alt="" />
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

            <HowItWorkCards
              src={img1}
              alt="how it works images"
              title="You can message your helper for better communication"
              learn="Learn more"
              get="Get Started"
            />

            <HowItWorkCards
              src={img2}
              alt="how it works images"
              title="See the helpers profile and all the history and recent jobs"
              learn="Learn more"
              get="Get Started"
            />

            <HowItWorkCards
              src={img3}
              alt="how it works images"
              title="You can also monitor your profile and all you previous request"
              learn="Learn more"
              get="Get Started"
            />
          </div>
        </div>
      </div>
    </Fragment>
  );
}
