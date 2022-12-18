// Contact.jsx

import "./Resume.scss";

import React, { Component } from "react";

import Test from "./test";

class Resume extends Component {
    render() {
        return (
            <div className="resume-contain">
                <div className="resume">
                    <Test />
                </div>
            </div>
        );
    }
}

export default Resume;
