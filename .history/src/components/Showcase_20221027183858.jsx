import React, { Fragment } from "react";

// CSS IMPORTS
import "../css/showcase.css";

// images IMPORTS
import icon from "./img/icon.png";
import show from "./img/show.png";

export default function Showcase() {
  return (
    <Fragment>
      <div className="showcase-container">
        <div className="container">
          <div className="showcase-container__section">
            <h1 className="showcase-container__header">
              Get what you've been looking for. We
              <br /> help you find help. In just a single click
              <br /> of a button.
            </h1>
            <div className="inpara">
              <img src={icon} alt="vector" />
              <p className="showcase-container__para">
                We are here to help you don't hesitate.
              </p>
            </div>
            <button className="btn">Get started</button>

            <p className="get-mobile">Get our mobile application</p>
            <button className="btn">Goo</button>
          </div>

          <div className="showcase-container__images">
            <img src={show} alt="showcase-img" />
          </div>
        </div>
      </div>
    </Fragment>
  );
}
