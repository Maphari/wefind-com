import React, { Fragment } from "react";
// import { BrowserRouter, Route, Routes } from "react-router-dom";

// COMPONENTS EXPORTS
// import Register from "./account/Register";
import Navigation from "./Home_not_loggedin/Navigation";
import Showcase from "./Home_not_loggedin/Showcase";
import Service from "./Home_not_loggedin/Services";
import HowItWorks from "./Home_not_loggedin/HowItWork";
import NewsLetter from "./Home_not_loggedin/NewsLetter";
import Footer from "./Home_not_loggedin/Footer";

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
      <NewsLetter />

      {/* footer */}
      <Footer />
    </Fragment>
  );
}

export default App;
