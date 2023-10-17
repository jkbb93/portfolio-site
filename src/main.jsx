import React from "react";
import ReactDOM from "react-dom/client";
import { DarkModeProvider } from "./features/darkMode";
import App from "./App.jsx";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <DarkModeProvider>
      <App />
    </DarkModeProvider>
  </React.StrictMode>
);
