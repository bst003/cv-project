import React, { Component } from "react";
import uniqid from "uniqid";

import TestField from "./testField";

class Test extends Component {
    constructor(props) {
        super(props);

        this.state = {
            editing: false,
            name: "Todd Smith",
            title: "Web Dev",
            // contactMethods: [
            //     {
            //         value: "111-222-3333",
            //         name: "Phone",
            //         inputType: "tel",
            //         id: uniqid(),
            //     },
            //     {
            //         value: "placeholder@gmail.com",
            //         name: "Email",
            //         inputType: "email",
            //         id: uniqid(),
            //     },
            //     {
            //         value: "testportfolio.com",
            //         name: "Portfolio",
            //         inputType: "text",
            //         id: uniqid(),
            //     },
            // ],
            bio: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam cursus est sed hendrerit rhoncus. Nam sit amet lectus a ipsum euismod viverra non eu tortor. In hac habitasse platea dictumst.",
        };

        this.editInfo = this.editInfo.bind(this);
        this.onInputChange = this.onInputChange.bind(this);
        this.submitInfo = this.submitInfo.bind(this);
    }

    onInputChange(e) {
        const inputValue = e.currentTarget.value;
        const key = e.currentTarget.getAttribute("name");

        this.setState({
            [key]: inputValue,
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
        const { editing } = this.state;

        const contents = () => {
            let contentsInfo;
            const contentsArray = [];

            if (editing) {
                Object.entries(this.state).forEach(([key, value]) => {
                    if (key !== "editing" && key !== "contactMethods") {
                        contentsArray.push(
                            <TestField
                                onInputChanged={this.onInputChange}
                                inputKey={key}
                                inputValue={value}
                            />
                        );
                    }

                    if (key === "contactMethods") {
                        const contactFields = [];

                        value.forEach((contactMethod) => {
                            contactFields.push(
                                <div className="input-contain" key={contactMethod.id}>
                                    <label htmlFor={contactMethod.name.toLowerCase()}>
                                        {contactMethod.name}
                                    </label>
                                    <input
                                        type={contactMethod.inputType}
                                        name={contactMethod.name.toLowerCase()}
                                        id={contactMethod.name.toLowerCase()}
                                        value={contactMethod.value}
                                        data-key={contactMethod.id}
                                        data-full-name={contactMethod.name}
                                        // onChange={editing ? this.passInputChange : null}
                                    />
                                </div>
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
                Object.entries(this.state).forEach(([key, value]) => {
                    if (key !== "editing" && key !== "contactMethods") {
                        contentsArray.push(<div key={uniqid()}>{value}</div>);
                    }

                    if (key === "contactMethods") {
                        const contactFields = [];

                        value.forEach((contactMethod) => {
                            contactFields.push(
                                <div className="contact-type" key={contactMethod.id}>
                                    {contactMethod.name}
                                    {contactMethod.value}
                                </div>
                            );
                        });

                        contentsArray.push(contactFields);
                    }
                });

                contentsInfo = (
                    <div>
                        <button onClick={!editing ? this.editInfo : null} type="button">
                            Edit
                        </button>
                        {contentsArray}
                    </div>
                );
            }

            return contentsInfo;
        };

        return (
            <div>
                <h2>test</h2>
                {contents()}
            </div>
        );
    }
}

export default Test;
