import React, { useState, useEffect } from "react";
import PropTypes from "prop-types";

const FormField = (props) => {
    const [editing, setEditing] = useState(true);
    useEffect(() => {
        setEditing(true);
        return () => {
            setEditing(false);
        };
    });

    const passInputChange = (e) => {
        const { onInputChanged } = props;

        onInputChanged(e);
    };

    const { inputValue, inputType, inputName, inputAttr, inputUniqid } = props;

    const returnInput = () => {
        let input;

        if (inputType === "textarea") {
            input = (
                <textarea
                    type={inputType}
                    name={inputAttr ? inputAttr : inputName}
                    id={inputAttr ? inputAttr : inputName}
                    data-uniqid={inputUniqid}
                    onChange={editing ? passInputChange : null}
                    rows="4"
                    value={inputValue}
                />
            );
        } else {
            input = (
                <input
                    type={inputType}
                    name={inputAttr ? inputAttr : inputName}
                    id={inputAttr ? inputAttr : inputName}
                    value={inputValue}
                    data-uniqid={inputUniqid}
                    onChange={editing ? passInputChange : null}
                />
            );
        }

        return input;
    };

    let inputContainClasses = "input-contain";
    if (inputType === "textarea") {
        inputContainClasses += " full-width";
    }

    return (
        <div className={inputContainClasses}>
            <label htmlFor={inputAttr}>{inputName}</label>
            {returnInput()}
        </div>
    );
};

FormField.defaultProps = {
    inputType: "text",
    inputUniqid: null,
    inputAttr: null,
};

FormField.propTypes = {
    onInputChanged: PropTypes.func.isRequired,
    inputValue: PropTypes.string.isRequired,
    inputType: PropTypes.string,
    inputName: PropTypes.string.isRequired,
    inputAttr: PropTypes.string,
    // eslint-disable-next-line react/require-default-props
    inputUniqid: PropTypes.string,
};

export default FormField;
