import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import { BrowserRouter } from "react-router-dom";
import { DarkModeContextProvider } from "../../client/src/context/darkModeContext.jsx";
import { SearchContextProvider } from ".././src/context/SearchContext.jsx";
import { AuthContextProvider } from ".././src/context/AuthContext.jsx";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <AuthContextProvider>
      <DarkModeContextProvider>
        <SearchContextProvider>
          <BrowserRouter>
            <App />
          </BrowserRouter>
        </SearchContextProvider>
      </DarkModeContextProvider>
    </AuthContextProvider>
  </React.StrictMode>
);
