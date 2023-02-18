import React, { Fragment } from "react";

// COMPONENTS EXPORTS
import Navigation from "./Navigation";
import Showcase from "./Showcase";
import Service from "./Services";
import HowItWorks from "./HowItWork";

function App() {
  return (
    <Fragment>
      {/* NAVIGATION */}
      <Navigation />

      {/* SHOWCASE */}
      <Showcase />

      {/* Servive sections */}
      <Service />

      {/* HOW it works */}

      <h1>hi</h1>
    </Fragment>
  );
}

export default App;
