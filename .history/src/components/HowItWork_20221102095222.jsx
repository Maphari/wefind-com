import React, { Fragment } from "react";

// CSS IMPORTS
import "../css/howItWork.css";
// media query
import "../css/mediaQuerie.css";

// COMPONENTS IMPORT
import HowCards from "./HowItWorksCard";

// IMAGES IMPORTS
import img1 from "./img/Rectangle-2.png";
import img2 from "./img/Rectangle-1.png";
import img3 from "./img/Rectangle-3.png";
import img4 from "./img/Rectangle.png";

export default function howItWork(props) {
  return (
    <Fragment>
      <div className="how-it-works-container">
        <div className="how-containerr">
          <div className="header">
            <h1 className="how-containerr__title">How it work's</h1>
            <p className="how-containerr__parar">
              WeFind for Users-Looking for help
            </p>
          </div>
          <div className="info">
            <div className="info__container">
              <HowCards
                src={img1}
                atl="home page browse"
                title="search for help also you can browse other categories that you may find help on."
              />
              <HowCards
                src={img2}
                atl="search-accordig-your needs"
                title="You can see various people arround you according to the help you need."
              />
            </div>
            <div className="line mx-10"></div>
            <div className="info__container">
              <HowCards
                src={img3}
                atl="profile-tracking"
                title="Keep track of your previous request in case you need them in future."
              />
              <HowCards
                src={img4}
                atl="secure messaging"
                title="Secure messaging so that you communicate with the helper inform each other on what to expect."
              />
            </div>
          </div>
        </div>
      </div>
    </Fragment>
  );
}
