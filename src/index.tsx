import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import { LocaleContextProvider } from "./LocaleContext";

ReactDOM.render(
  <LocaleContextProvider>
    <App />
  </LocaleContextProvider>,
  document.getElementById("root")
);
