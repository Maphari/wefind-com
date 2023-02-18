import React from "react";

// CSS IMPORTS
import "../css/index.css";
import "../css/navigation.css";

class NavigationBar extends React.Component {

   handleOpen() {
    cl
   }

  render() {
    return (
      <nav className="nav">
        {/* NAVIGATION CONTAINER => HEADER */}
        <div className="nav-container">
          <header className="nav-container__header">
            <img src="./img/logo.png" alt="LOGO" />
            <h1>WeFind.com</h1>
          </header>

          <div className="smaller" onClick={this.handleOpen}>
            <i class="fa-solid fa-bars text-white text-[1.7rem]"></i>
          </div>

          {/* LINK CONTAINER */}
          <div className="nav-container__links-container">
            <ul className="nav-container__links-container-links">
              <li className="nav-container__links-container-link hover:scale-107">
                <a href="#home">Home</a>
              </li>
              <li className="nav-container__links-container-link">
                <a href="#service">Services</a>
              </li>
              <li className="nav-container__links-container-link">
                <a href="#about">About</a>
              </li>
            </ul>

            <button className="dropshadow-sm">Create account</button>
          </div>
        </div>
      </nav>
    );
  }
}

export default NavigationBar;
