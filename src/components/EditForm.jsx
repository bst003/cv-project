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
        this.passInputChange = this.passInputChange.bind(this);
    }

    passFormSubmit(e) {
        const { onSubmitForm } = this.props;

        e.preventDefault();
        onSubmitForm();
    }

    passInputChange(e) {
        const { onInputChanged } = this.props;

        onInputChanged(e);
    }

    render() {
        const { editing } = this.state;
        const { formFields } = this.props;

        const inputs = [];

        formFields.forEach((field) => {
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
                        onChange={editing ? this.passInputChange : null}
                    />
                </div>
            );
        });

        return (
            <form onSubmit={editing ? this.passFormSubmit : null}>
                {inputs}
                <button type="submit">Save</button>
            </form>
        );
    }
}

EditForm.propTypes = {
    onSubmitForm: PropTypes.func.isRequired,
    onInputChanged: PropTypes.func.isRequired,
    formFields: PropTypes.array.isRequired,
};

export default EditForm;
