import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import { BrowserRouter } from "react-router-dom";
import { SearchContextProvider } from ".././src/context/SearchContext.jsx";
import { AuthContextProvider } from ".././src/context/AuthContext.jsx";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <AuthContextProvider>
        <SearchContextProvider>
          <BrowserRouter>
            <App />
          </BrowserRouter>
        </SearchContextProvider>
    </AuthContextProvider>
  </React.StrictMode>
);
