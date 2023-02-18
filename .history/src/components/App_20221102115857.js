import React, { Fragment } from "react";

// COMPONENTS EXPORTS
import Navigation from "./Navigation";
import Showcase from "./Showcase";
import Service from "./Services";
import HowItWorks from "./HowItWork";
import NewsLetter from "./NewsLetter";
import Footer from "./Footer";


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
      <HowItWorks />

      {/* NewsLetter */}
      <N

      {/* footer */}
      <Footer />
    </Fragment>
  );
}

export default App;
