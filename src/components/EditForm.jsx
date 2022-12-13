import React, { Component } from "react";
import PropTypes from "prop-types";

// import uniqid from "uniqid";

class EditForm extends Component {
    constructor(props) {
        super(props);

        this.state = {
            editing: true,
        };

        this.passFormSubmit = this.passFormSubmit.bind(this);
    }

    passFormSubmit(e) {
        const { onSubmitForm } = this.props;

        e.preventDefault();
        onSubmitForm();
    }

    render() {
        const { editing } = this.state;

        return (
            <form onSubmit={editing ? this.passFormSubmit : null}>
                <button type="submit">Save</button>
            </form>
        );
    }
}

EditForm.propTypes = {
    onSubmitForm: PropTypes.func.isRequired,
};

export default EditForm;
