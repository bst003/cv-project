// Contact.jsx

import "./Cv.scss";

import React, { Component } from "react";

import CvHeader from "./CvHeader";
import CvExperiences from "./CvExperiences";

class Cv extends Component {
    render() {
        return (
            <div className="cv-contain">
                <div className="cv">
                    <CvHeader />
                    <CvExperiences />
                </div>
            </div>
        );
    }
}

export default Cv;
