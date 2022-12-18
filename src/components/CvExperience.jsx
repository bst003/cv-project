import React, { Component } from "react";
import uniqid from "uniqid";

import FormField from "./FormField";

/*

Streamline variable/key names!!!

*/

class CvExperience extends Component {
    constructor(props) {
        super(props);

        this.state = {
            editing: false,
            positions: [
                {
                    value: "111-222-3333",
                    name: "Phone",
                    inputType: "tel",
                    uniqid: uniqid(),
                },
                {
                    value: "placeholder@gmail.com",
                    name: "Email",
                    inputType: "email",
                    uniqid: uniqid(),
                },
                {
                    value: "testportfolio.com",
                    name: "Portfolio",
                    inputType: "text",
                    uniqid: uniqid(),
                },
            ],
        };

        this.editInfo = this.editInfo.bind(this);
        this.onInputChange = this.onInputChange.bind(this);
        this.submitInfo = this.submitInfo.bind(this);
    }

    onInputChange(e) {
        console.log("input change");

        this.setState({
            editing: true,
        });
    }

    editInfo(e) {
        this.setState({
            editing: true,
        });
    }

    submitInfo(e) {
        e.preventDefault();
        this.setState({
            editing: false,
        });
    }

    render() {
        const { editing, positions } = this.state;

        const contents = () => {
            let contentsInfo;

            console.log(positions);

            if (editing) {
                console.log("editing");
            } else {
                console.log("not editing");
            }

            return contentsInfo;
        };

        return (
            <div className="cve cv-sec">
                <h3 className="cv-title">
                    <span>Work Experience</span>
                </h3>
                {contents()}
            </div>
        );
    }
}

export default CvExperience;
