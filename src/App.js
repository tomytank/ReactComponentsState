import React from "react";
import ReactDom from "react-dom";

import { ContentWriter } from "istanbul-lib-report";

const Counter = () => {
  const hOne = React.createElement("h1", null);
  const counterContainer = React.createElement(
    "div",
    /*props*/ { className: "counter" },
    /*children*/ null
  );
  return counterContainer;

  document.createElement("div");
};

const App = () => {
  return Counter();
};

/*export default function App() {
  return (
    <div className="App">
      <h1>Hello CodeSandbox</h1>
      <h2>Start editing to see some magic happen!</h2>
    </div>
  );
}*/
