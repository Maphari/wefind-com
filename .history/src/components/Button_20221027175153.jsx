import React from "react";

// css IMPORTS
import "../css/index.css";
import "../css/navigation.css";

export default function Button(props) {
  return <button className="dropshadow-sm">{props.name}</button>;
}
