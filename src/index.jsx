import React from "react";
import ReactDOM from "react-dom/client";

import App from "./App";

import "./assets/scss/styles.scss";

/*

Plan V2
    - 3 sections (CvHeader, Education, Experience)
    - Merge Contact into CvHeader
        - Ditch fields array idea in general?
        - Move Contact methods into sub array?

*/

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
    <React.StrictMode>
        <App />
    </React.StrictMode>
);
