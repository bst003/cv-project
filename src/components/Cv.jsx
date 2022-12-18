// Contact.jsx

import "./Cv.scss";

import React, { Component } from "react";

import CvHeader from "./CvHeader";

class Cv extends Component {
    render() {
        return (
            <div className="cv-contain">
                <div className="cv">
                    <CvHeader />
                </div>
            </div>
        );
    }
}

export default Cv;
