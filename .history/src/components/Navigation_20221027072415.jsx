import React from "react";

// CSS IMPORTS
import "../css/navigation.css";

class NavigationBar extends React.Component {
  render() {
    return <nav className="px-20 py-4 nav">
        <div className="nav-container">
            <header className="nav-container__header">
                <h1>WeFind.com</h1>
            </header>
        </div>
    </nav>;
  }
}

export default NavigationBar;
