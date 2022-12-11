// Contact.jsx

import "./Contact.scss";

import React, { Component } from "react";
import uniqid from "uniqid";

/*

How to edit?
    ***Separate edit box that appears on click?***
    Click edit and fields change into inputs and edit turns into save?

State
    Phone
    Email
    LinkedIn

*/

class Contact extends Component {
    constructor(props) {
        super(props);

        this.state = {
            editing: false,
            fields: [
                {
                    value: "111-222-333",
                    name: "Phone",
                    inputType: "tel",
                    id: uniqid(),
                },
                {
                    value: "placeholder@gmail.com",
                    name: "Email",
                    inputType: "email",
                    id: uniqid(),
                },
                {
                    value: "testportfolio.com",
                    name: "Portfolio",
                    inputType: "text",
                    id: uniqid(),
                },
            ],
        };

        this.editContactInfo = this.editContactInfo.bind(this);
        this.onInputChange = this.onInputChange.bind(this);
        this.submitContactInfo = this.submitContactInfo.bind(this);
    }

    onInputChange(e) {
        const fieldData = {
            value: e.currentTarget.value,
            name: e.currentTarget.getAttribute("data-full-name"),
            inputType: e.currentTarget.getAttribute("type"),
            id: e.currentTarget.getAttribute("data-key"),
        };

        const { fields } = this.state;

        const findMatchingKey = (element) => {
            console.log(element);
            if (element.id === fieldData.id) {
                return true;
            }
            return false;
        };

        const editFieldIndex = fields.findIndex(findMatchingKey);

        this.setState(
            {
                fields: [
                    ...fields.slice(0, editFieldIndex),
                    fieldData,
                    ...fields.slice(editFieldIndex + 1),
                ],
            },
            () => {
                console.log(fields);
            }
        );
    }

    editContactInfo(e) {
        this.setState({
            editing: true,
        });
    }

    submitContactInfo(e) {
        e.preventDefault();

        this.setState({
            editing: false,
        });
    }

    render() {
        const { editing, fields } = this.state;

        const contactContents = () => {
            let contactInfo;

            if (editing) {
                const inputs = [];

                fields.forEach((field) => {
                    inputs.push(
                        <div className="input-contain" key={field.id}>
                            <label htmlFor={field.name.toLowerCase()}>{field.name}</label>
                            <input
                                type={field.inputType}
                                name={field.name.toLowerCase()}
                                id={field.name.toLowerCase()}
                                value={field.value}
                                data-key={field.id}
                                data-full-name={field.name}
                                onChange={editing ? this.onInputChange : null}
                            />
                        </div>
                    );
                });

                contactInfo = (
                    <form onSubmit={editing ? this.submitContactInfo : null}>
                        {inputs}
                        <button type="submit">Save</button>
                    </form>
                );
            } else {
                const contactMethods = [];

                fields.forEach((field) => {
                    contactMethods.push(
                        <div className="contact-type" key={field.id}>
                            {field.name}
                            {field.value}
                        </div>
                    );
                });

                contactInfo = (
                    <div>
                        <button onClick={!editing ? this.editContactInfo : null} type="button">
                            Edit
                        </button>
                        {contactMethods}
                    </div>
                );
            }

            return contactInfo;
        };

        return (
            <div>
                <h2>Contact</h2>
                {/* <button onClick={!editing ? this.editContactInfo : null} type="button">
                    Edit
                </button> */}
                {contactContents()}
            </div>
        );
    }
}

export default Contact;
