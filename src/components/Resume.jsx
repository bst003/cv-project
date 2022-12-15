// Contact.jsx

import "./Resume.scss";

import React, { Component } from "react";

import Contact from "./Contact";
import CvHeader from "./CvHeader";
import Test from "./test";

class Resume extends Component {
    render() {
        return (
            <div className="resume-contain">
                <div className="resume">
                    {/* <Contact /> */}
                    {/* <CvHeader /> */}
                    <Test />
                </div>
            </div>
        );
    }
}

export default Resume;
