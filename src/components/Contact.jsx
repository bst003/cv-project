// Contact.jsx

import "./Contact.scss";

import React, { Component } from "react";

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
            fields: [
                { value: "111-222-333", name: "Phone" },
                { value: "placeholder@gmail.com", name: "Email" },
                { value: "testportfolio.com", name: "Portfolio" },
            ],
        };
        // this.passDeleteTask = this.passDeleteTask.bind(this);
    }

    //   passDeleteTask(dataKey) {
    //     console.log(`reached overview with key: ${dataKey}`);
    //     this.props.onDeleteTask(dataKey);
    //   }

    render() {
        const { fields } = this.state;

        const contactInfo = [];

        fields.forEach((field) => {
            contactInfo.push(
                <div className="contact-type">
                    {field.name}
                    {field.value}
                </div>
            );
        });

        return <div>{contactInfo}</div>;
    }
}

export default Contact;
