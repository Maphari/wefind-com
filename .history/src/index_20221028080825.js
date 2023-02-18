import React from "react";
import ReactDOM from "react-dom/client";

// CSS IMPORT
import "./css/index.css";
import './css/'

// COMPONENTS IMPORT
import App from "./components/App";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
