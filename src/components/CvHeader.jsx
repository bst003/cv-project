import "./CvHeader.scss";

import React, { useState } from "react";
import uniqid from "uniqid";

import FormField from "./FormField";

const CvHeader = (props) => {
    const [editing, setEditing] = useState(false);
    const [name, setName] = useState([
        {
            value: "Benjamin Smith",
            inputType: "text",
            uniqid: uniqid(),
        },
    ]);
    const [title, setTitle] = useState([
        {
            value: "Full Stack Web Developer",
            inputType: "text",
            uniqid: uniqid(),
        },
    ]);
    const [contactMethods, setContactMethods] = useState([
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
    ]);
    const [bio, setBio] = useState([
        {
            value: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam cursus est sed hendrerit rhoncus. Nam sit amet lectus a ipsum euismod viverra non eu tortor. In hac habitasse platea dictumst.",
            inputType: "textarea",
            uniqid: uniqid(),
        },
    ]);

    const onInputChange = (e) => {
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
    };

    const onContactInputChange = (e) => {
        const fieldData = {
            value: e.currentTarget.value,
            name: e.currentTarget.getAttribute("name"),
            inputType: e.currentTarget.getAttribute("type"),
            uniqid: e.currentTarget.getAttribute("data-uniqid"),
        };

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
    };

    const editInfo = (e) => {
        setEditing(true);
    };

    const submitInfo = (e) => {
        e.preventDefault();
        setEditing(false);
    };

    const contents = () => {
        let contentsInfo;
        const contentsArray = [];

        const stateObj = { name, title, contactMethods, bio };

        if (editing) {
            // Object.entries(stateObj).forEach(([key, value]) => {
            //     console.log(`${key}: ${value}`);
            //     contentsArray.push(
            //         <FormField
            //             key={value[0].uniqid}
            //             onInputChanged={onInputChange}
            //             inputName={key}
            //             inputUniqid={value[0].uniqid}
            //             inputValue={value[0].value}
            //             inputType={value[0].inputType}
            //         />
            //     );
            // });
            // for (let i = 0; i < stateArray.length; i++) {
            //     console.log(stateArray[i]);

            //     contentsArray.push(
            //         <FormField
            //             key={stateArray[0].uniqid}
            //             onInputChanged={onInputChange}
            //             inputName={key}
            //             inputUniqid={value[0].uniqid}
            //             inputValue={value[0].value}
            //             inputType={value[0].inputType}
            //         />
            //     );
            // }

            Object.entries(stateObj).forEach(([key, value]) => {
                if (key !== "contactMethods") {
                    contentsArray.push(
                        <FormField
                            key={value[0].uniqid}
                            onInputChanged={onInputChange}
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
                            <FormField
                                key={contactMethod.uniqid}
                                onInputChanged={onContactInputChange}
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
                <form className="cv-form" onSubmit={editing ? submitInfo : null}>
                    {contentsArray}
                    <footer className="cv-form__footer">
                        <button className="btn" type="submit">
                            Save
                        </button>
                    </footer>
                </form>
            );
        } else {
            const contactFields = [];

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
                        onClick={!editing ? editInfo : null}
                        className="btn icon ctrl"
                        type="button"
                    >
                        <i className="fas fa-edit" />
                    </button>
                    <div className="cvh__info direct-wrap">
                        <h2 className="cvh__name">{name[0].value}</h2>
                        <p className="cvh__title">{title[0].value}</p>
                        <ul className="cvh__cm">{contactFields}</ul>
                        <div className="cvh__bio direct-wrap">
                            <h3 className="cv-title">
                                <span>Professional Summary</span>
                            </h3>
                            <p className="cvh__bio">{bio[0].value}</p>
                        </div>
                    </div>
                </div>
            );
        }

        return contentsInfo;
    };

    return <div className="cvh cv-sec">{contents()}</div>;
};

export default CvHeader;
