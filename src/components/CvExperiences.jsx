import React, { Component } from "react";
import uniqid from "uniqid";

import Experience from "./Experience";

/*

Streamline variable/key names!!!

*/

class CvExperiences extends Component {
    constructor(props) {
        super(props);

        this.state = {
            positions: [
                {
                    editing: false,
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
    }

    render() {
        const { positions } = this.state;

        const contents = () => {
            const posArr = [];

            positions.forEach((position) => {
                console.log(position);
                posArr.push(
                    <Experience
                        key={position.uniqid}
                        editing={position.editing}
                        values={position.values}
                    />
                );
            });

            const contentsInfo = (
                <div>
                    {posArr}
                    <button className="btn" type="button">
                        + Add Experience
                    </button>
                </div>
            );

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

export default CvExperiences;
