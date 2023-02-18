import React, { Fragment } from "react";

// CSS IMPORTS
import "../css/service.css";

export default function Service() {
  return (
    <Fragment>
      <div className="container-service">
        <div className="container-serv">
          <h1 className="container-service__header">Services</h1>
          <div className="containerr">
            <div className="container-service__information drop-shadow-xl rounded-md">
              <div className="container-service__information-i">
                <span className="span-number">01</span>
                <h1 className="container-service__information__header">
                  Secure Messaging
                </h1>
              </div>
              <p className="container-service__information__para">WeFind gives you the ability to have secure messaging space which is secure. You don't have to worry about security.</p>
              <button className="container-service__information__btn">
                Learn More
              </button>
            </div>
          </div>
        </div>
      </div>
    </Fragment>
  );
}
