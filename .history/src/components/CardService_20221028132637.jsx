import React from "react";

// CSS IMPORTS
import "../css/service.css";

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
          WeFind gives you the ability to have secure messaging space which is
          secure. You don't have to worry about security.
        </p>
        <button className="container-service__information__btn">
          Learn More
        </button>
      </div>
    </>
  );
}
