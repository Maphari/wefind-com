import React, { Fragment } from "react";

// COMPONENTS EXPORTS
import Navigation from "./Navigation";
import Showcase from "./Showcase";
import Service from "./Services";
import HowItWorks from "./HowItWork";
import Footer from "./Footer";

import { Routes, Route } from "react-router-dom";

function App() {
  return (
    <Fragment>
      <Routes></Routes>
      {/* NAVIGATION */}
      <Navigation />

      {/* SHOWCASE */}
      <Showcase />

      {/* Servive sections */}
      <Service />

      {/* HOW it works */}
      <HowItWorks />

      {/* footer */}
      <Footer />
    </Fragment>
  );
}

export default App;
