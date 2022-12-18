import React, { Component } from "react";
import PropTypes from "prop-types";

// import uniqid from "uniqid";

/*

ON UNMOUNT BE SURE TO REMOVED EDITING STATE

*/

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
        const { inputKey, inputValue, inputType, inputName, inputUniqid } =
            this.props;

        const returnInput = () => {
            let input;

            if (inputType === "textarea") {
                input = (
                    <textarea
                        type={inputType}
                        name={inputName}
                        id={inputName}
                        data-uniqid={inputUniqid}
                        onChange={editing ? this.passInputChange : null}
                        rows="4"
                    >
                        {inputValue}
                    </textarea>
                );
            } else {
                input = (
                    <input
                        type={inputType}
                        name={inputName}
                        id={inputName}
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
                <label htmlFor={inputKey}>{inputName}</label>
                {returnInput()}
            </div>
        );
    }
}

FormField.defaultProps = {
    inputType: "text",
    inputUniqid: null,
};

FormField.propTypes = {
    onInputChanged: PropTypes.func.isRequired,
    inputKey: PropTypes.string.isRequired,
    inputValue: PropTypes.string.isRequired,
    inputType: PropTypes.string,
    inputName: PropTypes.string.isRequired,
    // eslint-disable-next-line react/require-default-props
    inputUniqid: PropTypes.string,
};

export default FormField;
