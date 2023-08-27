import React from "react";
import { BrowserRouter } from "react-router-dom";
import { Provider } from "react-redux";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import { Global } from "@emotion/react";
import { GlobalStyles } from "./styles/GlobalStyles";
// import "./index.css";
import { store } from "./redux/store.js";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <Provider store={store}>
      <BrowserRouter basename="/project-Dream4IT">
        <Global styles={GlobalStyles} />
        <App />
      </BrowserRouter>
    </Provider>
  </React.StrictMode>
);
