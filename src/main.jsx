import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import Home from "./home.jsx";
import "bootstrap/dist/css/bootstrap.rtl.min.css";
import { ThemeProvider } from "react-bootstrap";
ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <ThemeProvider dir="rtl">
      <Home />
    </ThemeProvider>
  </React.StrictMode>
);
