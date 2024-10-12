import ReactDOM from "react-dom/client";
import App from "./App.js";
import "./index.css";
import React from "react";

const entryPoint = document.getElementById("root");

if (entryPoint) {
  ReactDOM.createRoot(entryPoint).render(<App />);
} else {
  console.error("Root element not found");
}
