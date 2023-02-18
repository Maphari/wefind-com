import React, { Fragment } from "react";

// CSS IMPORTS
import "../css/service.css";

export default function Service() {
  return (
    <Fragment>
      <div className="container-service">
        <div className="container-serv">
          <h1 className="container-service__header">Services</h1>

          <div className="container-service__information">
            <div className="container-service__information">
              <span>01</span>
              <h1 className="container-service__information__header">
                Secure Messaging
              </h1>
              <p className="container-service__information__para"></p>
            </div>
          </div>
        </div>
      </div>
    </Fragment>
  );
}
