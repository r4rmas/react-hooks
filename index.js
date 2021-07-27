import React from "react";
import ReactDOM from "react-dom";
import App from "./src/App.js";
import ContextProvider from "./src/components/ContextProvider";

ReactDOM.render(
  <ContextProvider>
    <App />
  </ContextProvider>,
  document.getElementById("app")
);
