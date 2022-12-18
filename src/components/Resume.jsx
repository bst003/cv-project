// Contact.jsx

import "./Resume.scss";

import React, { Component } from "react";

import CvHeader from "./CvHeader";

class Resume extends Component {
    render() {
        return (
            <div className="resume-contain">
                <div className="resume">
                    <CvHeader />
                </div>
            </div>
        );
    }
}

export default Resume;
