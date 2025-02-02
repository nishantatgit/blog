import App from "./components/App";
import ReactDOM from 'react-dom';
import React from "react";

window.addEventListener("DOMContentLoaded", function() {
    ReactDOM.render(<App/>, document.getElementById("app-root"));
    console.info("react application loaded");
});