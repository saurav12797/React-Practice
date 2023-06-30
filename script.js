{
  /* <div id="parent">
  <div id="child">
    <h1>I am heading 1</h1>
        <h2>I am heading 2</h2>
  </div>
   <div id="child2">
    <h1>I am heading 1</h1>
        <h2>I am heading 2</h2>
  </div>
</div>; */
}

const parent = React.createElement("div", { id: "parent" }, [
  React.createElement("div", { id: "child" }, [
    React.createElement("h1", {}, "I am heading 1 "),
    React.createElement("h2", {}, "I am heading  2"),
  ]),
  ,
  React.createElement("div", { id: "child2" }, [
    React.createElement("h1", {}, "I am heading 1 "),
    React.createElement("h2", {}, "I am heading  2"),
  ]),
]); // for printing i am a child

console.log(parent);
const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(parent);
