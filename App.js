import React from "react";
import ReactDOM from "react-dom/client";

const title = () => (
    <div>
        <h1>calling the function</h1>
    </div>
);

const Body = () => {
    return (
      <div>
        {title()}
        <h1>I am heading</h1>
      </div>
    );
  };



const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<Body/>);
