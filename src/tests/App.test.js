import React from "react";
import ReactDOM from "react-dom";
import App from "../components/App/AppView";

it("renders without crashing", () => {
  const div = document.createElement("div");
  document.body.appendChild(div);
  ReactDOM.render(<App />, div);
  ReactDOM.unmountComponentAtNode(div);
});