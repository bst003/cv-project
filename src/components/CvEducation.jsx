import React, { Component } from "react";
import uniqid from "uniqid";

import Degree from "./Degree";

class CvEducation extends Component {
    constructor(props) {
        super(props);

        this.state = {
            degrees: [
                {
                    editing: false,
                    values: [
                        {
                            schoolName: [
                                {
                                    value: "Test University",
                                    name: "School Name",
                                    inputType: "text",
                                    uniqid: uniqid(),
                                },
                            ],
                            degree: [
                                {
                                    value: "Bachelors in English",
                                    name: "Degree",
                                    inputType: "text",
                                    uniqid: uniqid(),
                                },
                            ],
                            startDate: [
                                {
                                    value: "2013/08",
                                    name: "Start Date",
                                    inputType: "month",
                                    uniqid: uniqid(),
                                },
                            ],
                            endDate: [
                                {
                                    value: "2017/05",
                                    name: "End Date",
                                    inputType: "month",
                                    uniqid: uniqid(),
                                },
                            ],
                        },
                    ],
                    uniqid: uniqid(),
                },
            ],
        };

        this.addDegree = this.addDegree.bind(this);
        this.deleteDegree = this.deleteDegree.bind(this);
    }

    addDegree(e) {
        const { degrees } = this.state;

        const newDegree = {
            editing: true,
            values: [
                {
                    schoolName: [
                        {
                            value: "Filler University",
                            name: "School Name",
                            inputType: "text",
                            uniqid: uniqid(),
                        },
                    ],
                    degree: [
                        {
                            value: "Filler degree name",
                            name: "Degree",
                            inputType: "text",
                            uniqid: uniqid(),
                        },
                    ],
                    startDate: [
                        {
                            value: "2020/08",
                            name: "Start Date",
                            inputType: "month",
                            uniqid: uniqid(),
                        },
                    ],
                    endDate: [
                        {
                            value: "2022/05",
                            name: "End Date",
                            inputType: "month",
                            uniqid: uniqid(),
                        },
                    ],
                },
            ],
            uniqid: uniqid(),
        };

        this.setState({
            degrees: [...degrees, newDegree],
        });
    }

    deleteDegree(id) {
        const { degrees } = this.state;

        this.setState({
            degrees: degrees.filter((degree) => degree.uniqid !== id),
        });
    }

    render() {
        const { degrees } = this.state;

        const contents = () => {
            const degArr = [];

            degrees.forEach((degree) => {
                degArr.push(
                    <Degree
                        key={degree.uniqid}
                        editingProp={degree.editing}
                        valuesProp={degree.values}
                        degIdProp={degree.uniqid}
                        onDeleteDeg={this.deleteDegree}
                    />
                );
            });

            const contentsInfo = (
                <div>
                    {degArr}
                    {degrees.length < 3 && (
                        <button
                            onClick={degrees.length < 3 ? this.addDegree : null}
                            className="btn mar-top"
                            type="button"
                        >
                            + Add Education
                        </button>
                    )}
                </div>
            );

            return contentsInfo;
        };

        return (
            <div className="cve cv-sec">
                <h3 className="cv-title">
                    <span>Education</span>
                </h3>
                {contents()}
            </div>
        );
    }
}

export default CvEducation;
