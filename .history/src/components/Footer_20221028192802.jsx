import React from "react";
// images imports
import mainLog from "./img/logo.png";
// css imports
import "../css/footer.css";

export default function Footer() {
    const handleForm = (e) => {
        e.preventDefault();
    }
  return (
    <>
      <div className="container-footer">
        <div className="main-logo">
          <img src={mainLog} alt="main logo" />
          <h1 className="container-footer__title">WeFind.com</h1>
        </div>
        <div className="container-footer__news-letter">
          <h1 className="container-footer__news-letter">
            Subscribe to our news lettter
          </h1>
          <form action="#" onSubmit={handleForm}>
            <input type="text" placeholder="Enter email address" />
            <button>Submit Email</button>
          </form>
        </div>
        <div className="container-footer__info">
          <ul className="container-footer__info__links">
            <li className="container-footer__info__link">
              <a href="#about">About US</a>
            </li>
            <li className="container-footer__info__link">
              <a href="#about">Help ?</a>
            </li>
            <li className="container-footer__info__link">
              <a href="#about">Mission</a>
            </li>
          </ul>

          <ul className="container-footer__info__links">
            <li className="container-footer__info__link">
              <a href="#about">Services</a>
            </li>
            <li className="container-footer__info__link">
              <a href="#about">Contact US</a>
            </li>
            <li className="container-footer__info__link">
              <a href="#about">More information</a>
            </li>
          </ul>
        </div>

        <div className="mobile-apps">
          <h1 className="mobile-apps__title">Get mobile applications</h1>
          <button>Google Play</button>
          <button>Apple </button>
        </div>
      </div>
    </>
  );
}
