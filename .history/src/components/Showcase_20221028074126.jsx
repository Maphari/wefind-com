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
              Get what you've been{" "}
              <span className="before:block before:absolute before:-inset-1 before:-skew-y-2 before:bg-[#0eb05a]">
                <span className="relative text-white">looking for.</span>
              </span>{" "}
              We
              <br /> help you find help. In just a single click
              <br /> of a button.
            </h1>
            <div className="inpara">
              <img src={icon} alt="vector" />
              <p className="showcase-container__para">
                We are here to help you don't hesitate.
              </p>
            </div>
            <button className="btn hover:drop-shadow-md">Get started</button>

            <p className="get-mobile">Get our mobile application</p>
            <button className="mobile drop-shadow-lg hover:bg-slate-700 bg-slate-900 px-5 py-3 mr-3">
              Google Play
            </button>
            <button className="mobile drop-shadow-lg hover:bg-slate-700 bg-slate-900 px-5 py-3">
              Apple Store
            </button>
          </div>

          <div className="showcase-container__images">
            <img src={show} alt="showcase-img" />
          </div>
        </div>
      </div>
    </Fragment>
  );
}
