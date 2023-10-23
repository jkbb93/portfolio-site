import React from "react";
import ReactDOM from "react-dom/client";
import { DarkModeProvider } from "./features/darkMode";
import { NavLinksProvider } from "./features/navLinks";
import App from "./App.jsx";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <DarkModeProvider>
      <NavLinksProvider>
        <App />
      </NavLinksProvider>
    </DarkModeProvider>
  </React.StrictMode>
);
