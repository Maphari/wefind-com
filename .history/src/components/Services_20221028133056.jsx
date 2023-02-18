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

            <CardsService
              number="01"
              title="Secure messaging"
              message="WeFind gives you the ability to have secure messaging space which is
                        secure. You don't have to worry about security."
            />

            CardsService
              number="01"
              title="Secure messaging"
              message="WeFind gives you the ability to have secure messaging space which is
                        secure. You don't have to worry about security."
            />
          </div>
        </div>
      </div>
    </Fragment>
  );
}
