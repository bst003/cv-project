import React from "react";
import ReactDOM from "react-dom/client";

import App from "./App";

import "./assets/scss/styles.scss";
import "./assets/scss/print.scss";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
    <React.StrictMode>
        <App />
    </React.StrictMode>
);
