import React from "react";
import ReactDOM from "react-dom";

const parent = React.createElement("div", { id: "parent" }, [
  React.createElement("div", { id: "child" }, [
    React.createElement("h1", {}, "I am heading 1 "),
    React.createElement("h2", {}, "I am heading  2"),
  ]),
]); // for printing i am a child

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(parent);
