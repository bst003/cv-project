// Contact.jsx

import "./Contact.scss";

import React, { Component } from "react";
import uniqid from "uniqid";
import EditForm from "./EditForm";

/*

How to edit?
    ***Separate edit box that appears on click?***
    Click edit and fields change into inputs and edit turns into save?

State
    Phone
    Email
    LinkedIn

*/

class CvHeader extends Component {
    constructor(props) {
        super(props);

        this.state = {
            editing: false,
            fields: [
                {
                    value: "Joe Smith",
                    name: "Name",
                    inputType: "text",
                    id: uniqid(),
                },
                {
                    value: "Full Stack Developer",
                    name: "Title",
                    inputType: "text",
                    id: uniqid(),
                },
                {
                    value: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam cursus est sed hendrerit rhoncus. Nam sit amet lectus a ipsum euismod viverra non eu tortor. In hac habitasse platea dictumst.",
                    name: "Bio",
                    inputType: "textarea",
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

    submitContactInfo() {
        this.setState({
            editing: false,
        });
    }

    render() {
        const { editing, fields } = this.state;

        const cvHeaderContents = () => {
            let info;

            if (editing) {
                info = (
                    <EditForm
                        onSubmitForm={this.submitContactInfo}
                        onInputChanged={this.onInputChange}
                        formFields={fields}
                    />
                );
            } else {
                const headerFields = [];

                fields.forEach((field) => {
                    headerFields.push(
                        <div className="contact-type" key={field.id}>
                            {field.name}
                            {field.value}
                        </div>
                    );
                });

                info = (
                    <div>
                        <button onClick={!editing ? this.editContactInfo : null} type="button">
                            Edit
                        </button>
                        {headerFields}
                    </div>
                );
            }

            return info;
        };

        return (
            <div>
                <h2>Bio</h2>
                {cvHeaderContents()}
            </div>
        );
    }
}

export default CvHeader;
