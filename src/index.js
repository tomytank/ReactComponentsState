//import React from "react";
import ReactDOM from "react-dom";
import React, { useState } from "react";
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
  //{currentValueOfTheState, functionThatAllowsUsToChangeState}
  const [total, setTotal] = useState(0);//this is a hook!

  return (
    <div className="counter">
      <h1>JS Counter</h1>
      <p className="click_desc">
        The total is currently <span>{total}</span>
      </p>
      <div className="button_container">
        <button
          onClick={() => {
            setTotal(total + 1);
          }}
        >
          Add 1
        </button>
        <button
          onClick={() => {
            setTotal(total * 5);
          }}
        >
          Multiply by 5
        </button>
        <button
          onClick={() => {
            setTotal(0);
          }}
        >
          Reset
        </button>
      </div>
      <h1 id="big_total">{total}</h1>
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
