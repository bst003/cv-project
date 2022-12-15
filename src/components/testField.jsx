import React, { Component } from "react";
import PropTypes from "prop-types";

// import uniqid from "uniqid";

/*

ON UNMOUNT BE SURE TO REMOVED EDITING STATE

*/

class TestField extends Component {
    constructor(props) {
        super(props);

        this.state = {
            editing: true,
        };

        this.passInputChange = this.passInputChange.bind(this);
    }

    passInputChange(e) {
        const { onInputChanged } = this.props;

        onInputChanged(e);
    }

    render() {
        const { editing } = this.state;
        const { inputKey, inputValue } = this.props;

        return (
            <div className="input-contain">
                <label htmlFor={inputKey}>{inputKey}</label>
                <input
                    type="text"
                    name={inputKey}
                    id={inputKey}
                    value={inputValue}
                    onChange={editing ? this.passInputChange : null}
                />
            </div>
        );
    }
}

TestField.propTypes = {
    onInputChanged: PropTypes.func.isRequired,
    inputKey: PropTypes.string.isRequired,
    inputValue: PropTypes.string.isRequired,
};

export default TestField;
