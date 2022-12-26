import React, { Component } from "react";
import PropTypes from "prop-types";

class FormField extends Component {
    constructor(props) {
        super(props);

        this.state = {
            editing: true,
        };

        this.passInputChange = this.passInputChange.bind(this);
    }

    componentWillUnmount() {
        this.setState({
            editing: false,
        });
    }

    passInputChange(e) {
        const { onInputChanged } = this.props;

        onInputChanged(e);
    }

    render() {
        const { editing } = this.state;
        const { inputValue, inputType, inputName, inputAttr, inputUniqid } = this.props;

        const returnInput = () => {
            let input;

            if (inputType === "textarea") {
                input = (
                    <textarea
                        type={inputType}
                        name={inputAttr ? inputAttr : inputName}
                        id={inputAttr ? inputAttr : inputName}
                        data-uniqid={inputUniqid}
                        onChange={editing ? this.passInputChange : null}
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
                        onChange={editing ? this.passInputChange : null}
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
    }
}

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
