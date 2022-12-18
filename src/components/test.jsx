import React, { Component } from "react";
import uniqid from "uniqid";

import TestField from "./testField";

/*

Streamline variable/key names!!!

*/

class Test extends Component {
    constructor(props) {
        super(props);

        this.state = {
            editing: false,
            name: [
                {
                    value: "Todd Smith",
                    inputType: "text",
                    uniqid: uniqid(),
                },
            ],
            title: [
                {
                    value: "Web Dev",
                    inputType: "text",
                    uniqid: uniqid(),
                },
            ],
            contactMethods: [
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
            bio: [
                {
                    value: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam cursus est sed hendrerit rhoncus. Nam sit amet lectus a ipsum euismod viverra non eu tortor. In hac habitasse platea dictumst.",
                    inputType: "textarea",
                    uniqid: uniqid(),
                },
            ],
        };

        this.editInfo = this.editInfo.bind(this);
        this.onInputChange = this.onInputChange.bind(this);
        this.onContactInputChange = this.onContactInputChange.bind(this);
        this.submitInfo = this.submitInfo.bind(this);
    }

    onInputChange(e) {
        const fieldData = {
            value: e.currentTarget.value,
            inputType: e.currentTarget.getAttribute("type"),
            uniqid: e.currentTarget.getAttribute("data-uniqid"),
        };

        const key = e.currentTarget.getAttribute("name");

        // const keyState = this.state[key];

        // console.log(keyState);

        this.setState({
            [key]: [fieldData],
        });
    }

    onContactInputChange(e) {
        const fieldData = {
            value: e.currentTarget.value,
            name: e.currentTarget.getAttribute("name"),
            inputType: e.currentTarget.getAttribute("type"),
            uniqid: e.currentTarget.getAttribute("data-uniqid"),
        };

        const { contactMethods } = this.state;

        console.log(contactMethods);

        console.log(`id: ${fieldData.id}`);

        const findMatchingKey = (element) => {
            console.log(element);
            if (element.uniqid === fieldData.uniqid) {
                return true;
            }
            return false;
        };

        const editFieldIndex = contactMethods.findIndex(findMatchingKey);

        this.setState(
            {
                contactMethods: [
                    ...contactMethods.slice(0, editFieldIndex),
                    fieldData,
                    ...contactMethods.slice(editFieldIndex + 1),
                ],
            },
            () => {
                console.log(contactMethods);
            }
        );
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
        const { editing, name, title, contactMethods, bio } = this.state;

        const contents = () => {
            let contentsInfo;
            const contentsArray = [];

            if (editing) {
                Object.entries(this.state).forEach(([key, value]) => {
                    if (key !== "editing" && key !== "contactMethods") {
                        contentsArray.push(
                            <TestField
                                key={value[0].uniqid}
                                onInputChanged={this.onInputChange}
                                inputKey={key}
                                inputName={key}
                                inputUniqid={value[0].uniqid}
                                inputValue={value[0].value}
                                inputType={value[0].inputType}
                            />
                        );
                    }

                    if (key === "contactMethods") {
                        const contactFields = [];

                        value.forEach((contactMethod) => {
                            contactFields.push(
                                <TestField
                                    key={contactMethod.uniqid}
                                    onInputChanged={this.onContactInputChange}
                                    inputKey={key}
                                    inputName={contactMethod.name}
                                    inputValue={contactMethod.value}
                                    inputUniqid={contactMethod.uniqid}
                                    inputType={contactMethod.inputType}
                                />
                            );
                        });

                        contentsArray.push(contactFields);
                    }
                });

                contentsInfo = (
                    <form onSubmit={editing ? this.submitInfo : null}>
                        {contentsArray}
                        <button type="submit">Save</button>
                    </form>
                );
            } else {
                // Object.entries(this.state).forEach(([key, value]) => {
                //     if (key !== "editing" && key !== "contactMethods") {
                //         contentsArray.push(<div key={uniqid()}>{value}</div>);
                //     }

                //     if (key === "contactMethods") {
                //         const contactFields = [];

                //         value.forEach((contactMethod) => {
                //             contactFields.push(
                //                 <div className="contact-type" key={contactMethod.id}>
                //                     {contactMethod.name}
                //                     {contactMethod.value}
                //                 </div>
                //             );
                //         });

                //         contentsArray.push(contactFields);
                //     }
                // });

                const contactFields = [];
                // const test = " - ";

                contactMethods.forEach((contactMethod) => {
                    contactFields.push(
                        <li className="contact-type" key={contactMethod.uniqid}>
                            {contactMethod.value}
                        </li>
                    );
                });

                contentsInfo = (
                    <div>
                        <button
                            onClick={!editing ? this.editInfo : null}
                            className="btn icon"
                            type="button"
                        >
                            Edit
                        </button>
                        <div className="cvh__info direct-wrap">
                            <h2>{name[0].value}</h2>
                            <p className="cvh__title">{title[0].value}</p>
                            <ul className="cvh__cm">{contactFields}</ul>
                            <p className="cvh__bio">{bio[0].value}</p>
                        </div>
                    </div>
                );
            }

            return contentsInfo;
        };

        return <div className="cvh cv-sec">{contents()}</div>;
    }
}

export default Test;
