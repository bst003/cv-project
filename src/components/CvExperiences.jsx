import React, { useState } from "react";
import uniqid from "uniqid";

import Experience from "./Experience";

const CvExperiences = (props) => {
    const basePos = {
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
                        name: "End Date",
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
    };

    const [positions, setPositions] = useState([basePos]);

    const addPosition = (e) => {
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
                            name: "End Date",
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

        setPositions([...positions, newPosition]);
    };

    const deletePosition = (id) => {
        setPositions(positions.filter((position) => position.uniqid !== id));
    };

    const contents = () => {
        const posArr = [];

        positions.forEach((position) => {
            posArr.push(
                <Experience
                    key={position.uniqid}
                    editingProp={position.editing}
                    valuesProp={position.values}
                    expIdProp={position.uniqid}
                    onDeleteExp={deletePosition}
                />
            );
        });

        const contentsInfo = (
            <div>
                {posArr}
                {positions.length < 3 && (
                    <button
                        onClick={positions.length < 3 ? addPosition : null}
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
};

export default CvExperiences;
