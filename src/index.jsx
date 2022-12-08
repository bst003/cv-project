import React from "react";
import ReactDOM from "react-dom/client";

import App from "./App";

import "./assets/scss/styles.scss";

/*

Style, multiple options

    1. Form to the left and visual to the right
    2. Just form fields that I can then generate into a cv
    ***3. A more visual example that can be updated on click***

Data

    - General contact info could be single values in state

    - Positions and education would need to be arrays in the state, to allow for multiple options

*/

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
    <React.StrictMode>
        <App />
    </React.StrictMode>
);
