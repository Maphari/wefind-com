import React from "react";
// images imports
import mainLog from "./img/logo.png";
// css imports
import "../css/footer.css";

export default function Footer() {
  const handleForm = (e) => {
    e.preventDefault();
  };
  return (
    <>
      <div className="container-footer">
        <div className="container-footer__f">
          <div className="main-logo">
            <img src={mainLog} alt="main logo" />
            <h1 className="container-footer__title">WeFind.com</h1>
            {/* <h1 className="container-footer__para">We are here so that you. </h1> */}
          </div>
          <div className="container-footer__news-letter">
            <h1 className="container-footer__news-letter">
              Subscribe to our news lettter
            </h1>
            <form action="#" onSubmit={handleForm}>
              <input type="email" placeholder="Enter email address" />
              <button className="news-btn">Submit Email</button>
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
            <button className="btn-app-1 bg-teal-800 py-2 px-5 rounded-md mt-3 mr-2">Google Play</button>
            <button className="btn-app-2">Apple Store</button>
          </div>

          <div className="socials">
            <h1 className="socials__title">Find us on social media</h1>
            <i className="fa-brands fa-facebook"></i>
            <i className="fa-brands fa-twitter"></i>
            <i className="fa-brands fa-square-instagram"></i>
          </div>
        </div>
      </div>
    </>
  );
}
