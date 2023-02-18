import React from "react";

// CSS IMPORTS
import "../css/newsLetter.css";
import "../css/mediaQuerie.css";

export default function NewsLetter() {
  return (
    <>
      <div className="news-letter-container">
        <div className="news-letter-container__containerr">
          <div className="head">
            <h1 className="news-letter-container__title">
              Subcribe to our news letter
            </h1>
            <p className="news-letter-container__para"></p>
          </div>
        </div>
      </div>
    </>
  );
}
