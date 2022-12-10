// Contact.jsx

import "./Resume.scss";

import React, { Component } from "react";

import Contact from "./Contact";

class Resume extends Component {
    render() {
        return (
            <div className="resume-contain">
                <div className="resume">
                    <Contact />
                </div>
            </div>
        );
    }
}

export default Resume;
