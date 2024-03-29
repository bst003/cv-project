// Contact.jsx

import "./Cv.scss";

import React, { Component } from "react";

import CvHeader from "./CvHeader";
import CvExperiences from "./CvExperiences";
import CvEducation from "./CvEducation";

class Cv extends Component {
    render() {
        return (
            <div className="cv-contain">
                <div className="cv">
                    <CvHeader />
                    <CvExperiences />
                    <CvEducation />
                </div>
            </div>
        );
    }
}

export default Cv;
