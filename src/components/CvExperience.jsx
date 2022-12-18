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
                    values: [
                        {
                            value: "Test Company",
                            name: "Company Name",
                            inputType: "text",
                            uniqid: uniqid(),
                        },
                        {
                            value: "Full Stack Developer",
                            name: "Position",
                            inputType: "text",
                            uniqid: uniqid(),
                        },
                        {
                            value: "05/22/2017",
                            name: "Start Date",
                            inputType: "date",
                            uniqid: uniqid(),
                        },
                        {
                            value: "06/02/2020",
                            name: "End Date",
                            inputType: "date",
                            uniqid: uniqid(),
                        },
                        {
                            value: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam cursus est sed hendrerit rhoncus. Nam sit amet lectus a ipsum euismod viverra non eu tortor. In hac habitasse platea dictumst.",
                            name: "Description",
                            inputType: "textarea",
                            uniqid: uniqid(),
                        },
                    ],
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
