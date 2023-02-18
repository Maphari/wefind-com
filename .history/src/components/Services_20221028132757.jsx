import React, { Fragment } from "react";

// CSS IMPORTS
import "../css/service.css";

// COMPONENTS IMPORTS
import CardsService from "./CardService";

export default function Service() {
  return (
    <Fragment>
      <div className="container-service">
        <div className="container-serv">
          <h1 className="container-service__header">Services</h1>
          <div className="containerr">
           <CardsService number="01" />
          </div>
        </div>
      </div>
    </Fragment>
  );
}
