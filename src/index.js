import React from "react";
import ReactDOM from "react-dom";
import "./styles.css";
//import App from "./App";

const Counter = () => {
  // const hOne = React.createElement("h1", null, "JS Counter");
  //const counterContainer = React.createElement(
  //"div",
  /*props*/ //{ className: "counter" },
  /*children*/ // [hOne, hOne, hOne]
  //);
  //return counterContainer;
  // document.createElement("div");

  return (
    <div className="counter">
      <h1>JS Counter</h1>
      <p className="click_desc">
        The total is currently <span>0</span>
      </p>
      <div className="button_container">
        <button>Add 1</button>
        <button>Multiply by 5</button>
        <button>Reset</button>
      </div>
    </div>
  );
};

const App = () => {
  //return Counter();
  //return <Counter />; //React will find a JSX vlaued Component and then run it as a function
  return (
    // this is also valid and is according to Dan F faster!
    <div>
      <Counter />
    </div>
  );
};

const rootElement = document.getElementById("root");
ReactDOM.render(
  <React.StrictMode>
    {" "}
    <App />{" "}
  </React.StrictMode>,
  rootElement
);
