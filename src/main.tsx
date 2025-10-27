import React from "react";
import ReactDOM from "react-dom/client";
import "bootstrap/dist/css/bootstrap.css";
import "./components/Building_Forms/indexForm.css";
import FechingData from "./components/Backend/FechingData";
import DataManipulation from "./components/Backend/DataManipulation";

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <React.StrictMode>
    <DataManipulation />
  </React.StrictMode>
);
