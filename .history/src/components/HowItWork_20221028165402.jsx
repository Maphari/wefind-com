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
            <HowItWorkCards
              className="border-r-2"
              src={showImg}
              alt="how it works images"
              title="Search for help, and you can browse available categories"
              learn="Learn more"
              get="Get Started"
            />

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
              title="See the helpers "
              learn="Learn more"
              get="Get Started"
            />

            <HowItWorkCards
              src={img3}
              alt="how it works images"
              title="Search for help, and you can browse available categories"
              learn="Learn more"
              get="Get Started"
            />
          </div>
        </div>
      </div>
    </Fragment>
  );
}
