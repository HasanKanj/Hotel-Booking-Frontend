import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import "./index.css";
import { BrowserRouter } from "react-router-dom";
import { DarkModeContextProvider } from "../../client/src/context/darkModeContext";
import { SearchContextProvider } from ".././src/context/SearchContext";
import { AuthContextProvider } from ".././src/context/AuthContext";
import { Provider } from "react-redux";
import { Store } from "./Store";

ReactDOM.render(
  <React.StrictMode>
    <AuthContextProvider>
      <DarkModeContextProvider>
        <SearchContextProvider>
          <BrowserRouter>
            <Provider store={Store}>
              <App />
            </Provider>
          </BrowserRouter>
        </SearchContextProvider>
      </DarkModeContextProvider>
    </AuthContextProvider>
  </React.StrictMode>,
  document.getElementById("root")
);
