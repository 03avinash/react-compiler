import React from "react";
import ReactDOM from "react-dom/client";

const heading = React.createElement(
  "center",
  { id: "heading" },
  "HII EVERYONE 😊"
);
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(heading);
