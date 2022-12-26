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
                            companyName: [
                                {
                                    value: "Test Company",
                                    name: "Company Name",
                                    inputType: "text",
                                    uniqid: uniqid(),
                                },
                            ],
                            position: [
                                {
                                    value: "Full Stack Developer",
                                    name: "Position",
                                    inputType: "text",
                                    uniqid: uniqid(),
                                },
                            ],
                            startDate: [
                                {
                                    value: "05/22/2017",
                                    name: "Start Date",
                                    inputType: "date",
                                    uniqid: uniqid(),
                                },
                            ],
                            endDate: [
                                {
                                    value: "06/02/2020",
                                    name: "Start Date",
                                    inputType: "date",
                                    uniqid: uniqid(),
                                },
                            ],
                            description: [
                                {
                                    value: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam cursus est sed hendrerit rhoncus. Nam sit amet lectus a ipsum euismod viverra non eu tortor. In hac habitasse platea dictumst.",
                                    name: "Description",
                                    inputType: "textarea",
                                    uniqid: uniqid(),
                                },
                            ],
                        },
                    ],
                    uniqid: uniqid(),
                },
            ],
        };

        this.addPosition = this.addPosition.bind(this);
        this.deletePosition = this.deletePosition.bind(this);
    }

    addPosition(e) {
        const { positions } = this.state;

        const newPosition = {
            editing: true,
            values: [
                {
                    companyName: [
                        {
                            value: "New Position",
                            name: "Company Name",
                            inputType: "text",
                            uniqid: uniqid(),
                        },
                    ],
                    position: [
                        {
                            value: "Position Title Here",
                            name: "Position",
                            inputType: "text",
                            uniqid: uniqid(),
                        },
                    ],
                    startDate: [
                        {
                            value: "01/01/2022",
                            name: "Start Date",
                            inputType: "date",
                            uniqid: uniqid(),
                        },
                    ],
                    endDate: [
                        {
                            value: "12/11/2022",
                            name: "Start Date",
                            inputType: "date",
                            uniqid: uniqid(),
                        },
                    ],
                    description: [
                        {
                            value: "Add your job description here",
                            name: "Description",
                            inputType: "textarea",
                            uniqid: uniqid(),
                        },
                    ],
                },
            ],
            uniqid: uniqid(),
        };

        this.setState({
            positions: [...positions, newPosition],
        });
    }

    deletePosition(id) {
        console.log(id);

        const { positions } = this.state;

        this.setState({
            positions: positions.filter((position) => position.uniqid !== id),
        });
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
                        expId={position.uniqid}
                        onDeleteExp={this.deletePosition}
                    />
                );
            });

            const contentsInfo = (
                <div>
                    {posArr}
                    {positions.length < 3 && (
                        <button
                            onClick={positions.length < 3 ? this.addPosition : null}
                            className="btn mar-top"
                            type="button"
                        >
                            + Add Experience
                        </button>
                    )}
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
