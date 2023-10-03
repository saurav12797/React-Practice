import React from "react";
import ReactDOM from "react-dom";

const heading = React.createElement("h1", { id: "heading" }, "Hello Saurav");
const jsxHeading = <h1>This is jSX heading</h1>;
const root = ReactDOM.createRoot(document.getElementById("root"));

const data = 1000;
const TitleComponent = () => <p>This is heading</p>;

const HeadingComponent = () => (
  <div>
    <TitleComponent />
    <h1>Hello Saurav {data}</h1>
  </div>
);

root.render(<HeadingComponent />);
