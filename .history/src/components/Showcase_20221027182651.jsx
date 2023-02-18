import React, { Fragment } from "react";

// CSS IMPORTS
import "../css/showcase.css";

// images IMPORTS
import icon from "./img/icon.png";

export default function Showcase() {
  return (
    <Fragment>
      <div className="showcase-container">
        <div className="container">
          <div className="showcase-container__section">
            <h1 className="showcase-container__header">
              Get what you've been looking for. We
              <br /> help you find help. In just a single click of a button.
            </h1>
            <p className="showcase-container__para">
              <icon We are here to help you don't hesitate.
            </p>
            <button className="btn">Get started</button>
          </div>

          <div className="showcase-container__images bg-[#259f46]">hi</div>
        </div>
      </div>
    </Fragment>
  );
}
