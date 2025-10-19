import React from "react";
import ReactDOM from "react-dom/client";
import "bootstrap/dist/css/bootstrap.css";
import "./components/Building_Forms/indexForm.css";
import HookFormZod from "./components/Building_Forms/HookFormZod";
import ExpenseTracker from "./components/Mini_Project/ExpenseTracker";

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <React.StrictMode>
    <ExpenseTracker />
  </React.StrictMode>
);
