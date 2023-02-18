import React, { Fragment } from "react";

// COMPONENTS EXPORTS
import Navigation from "./Navigation";
import Showcase from "./Showcase";
import Service from "./Services";

function App() {
  return (
    <Fragment>
      {/* NAVIGATION */}
      <Navigation />

      {/* SHOWCASE */}
      <Showcase />

      {/* Servive sections */}
      <Service />
    </Fragment>
  );
}

export default App;
