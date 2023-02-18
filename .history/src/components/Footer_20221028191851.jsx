import React from "react";
// images imports
import mainLog from "./img/logo.png";
// css imports
import "../css/footer.css";

export default function Footer() {
    const handleForm = (e) => {
        e.preve
    }
  return (
    <>
      <div className="container-footer">
        <div className="main-logo">
          <img src={mainLog} alt="main logo" />
          <h1 className="container-footer__title">WeFind.com</h1>
        </div>

        <div className="container-footer__news-letter">
          <h1 className="container-footer__news-letter">Subscribe to our news lettter</h1>
          <form action="#" onSubmit={handleForm}>
            <input type="text" placeholder="Enter email address" />
            <button>Submit Email</button>
          </form>
        </div>
      </div>
    </>
  );
}