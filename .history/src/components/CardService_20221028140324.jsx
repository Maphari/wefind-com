import React from "react";

// CSS IMPORTS
import "../css/service.css";
import ''

export default function CardsService(props) {
  return (
    <>
      <div className="container-service__information drop-shadow-xl rounded-md">
        <div className="container-service__information-i">
          <span className="span-number">{props.number}</span>
          <h1 className="container-service__information__header">
            {props.title}
          </h1>
        </div>
        <p className="container-service__information__para">
          {props.message}
        </p>
        <button className="container-service__information__btn">
          Learn More
        </button>
      </div>
    </>
  );
}
