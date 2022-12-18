// Contact.jsx

import "./Cv.scss";

import React, { Component } from "react";

import CvHeader from "./CvHeader";
import CvExperience from "./CvExperience";

class Cv extends Component {
    render() {
        return (
            <div className="cv-contain">
                <div className="cv">
                    <CvHeader />
                    <CvExperience />
                </div>
            </div>
        );
    }
}

export default Cv;
