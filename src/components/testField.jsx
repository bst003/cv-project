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
        const { inputKey, inputValue, inputType, inputName, inputUniqid } = this.props;

        return (
            <div className="input-contain">
                <label htmlFor={inputKey}>{inputName}</label>
                <input
                    type={inputType}
                    name={inputName}
                    id={inputName}
                    value={inputValue}
                    data-uniqid={inputUniqid}
                    onChange={editing ? this.passInputChange : null}
                />
            </div>
        );
    }
}

TestField.defaultProps = {
    inputType: "text",
    inputUniqid: null,
};

TestField.propTypes = {
    onInputChanged: PropTypes.func.isRequired,
    inputKey: PropTypes.string.isRequired,
    inputValue: PropTypes.string.isRequired,
    inputType: PropTypes.string,
    inputName: PropTypes.string.isRequired,
    // eslint-disable-next-line react/require-default-props
    inputUniqid: PropTypes.string,
};

export default TestField;
