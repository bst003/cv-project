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

    - 5 main sections split across two areas
        - Section List
            1. Sidebar
                - contact info (phone and email)
                - skills
            2. Main Content
                - general info (name, position, bio)
                - education
                - work experience

    - How far to bury state/props?
        - handle by section?

Reusable Forms
    - "Static" sections (contact and bio)
        - on "editing" use EditForm (working title) component
            - would need make sure Contact and Bio each have access to onInputChange
            - woudld need to ensure EditForm has access to submit method to toggle
              editing on Contact and Bio
            - would need to make sure Contact and Bio have same data set up
    - "Array" sections (skills, education and work experience)

*/

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
    <React.StrictMode>
        <App />
    </React.StrictMode>
);
