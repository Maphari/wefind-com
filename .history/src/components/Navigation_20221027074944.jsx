import React from "react";

// CSS IMPORTS
import "../css/index.css";
import "../css/navigation.css";

class NavigationBar extends React.Component {
  render() {
    return (
      <nav className="px-20 py-5 nav">
      {/* NAVIGATION CONTAINER => HEADER */}
        <div className="nav-container">
          <header className="nav-container__header">
            <img src="./img/logo.png" alt="LOGO" />
            <h1>WeFind.com</h1>
          </header>


        </div>
      </nav>
    );
  }
}

export default NavigationBar;
