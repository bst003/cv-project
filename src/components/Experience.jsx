import React, { Component } from "react";
import PropTypes from "prop-types";

import FormField from "./FormField";

class Experience extends Component {
    constructor(props) {
        super(props);

        const { editing, values, expId } = this.props;

        this.state = {
            editing,
            values,
            expId,
            deleted: false,
        };

        this.passDeleteId = this.passDeleteId.bind(this);
        this.editExperience = this.editExperience.bind(this);
        this.onInputChange = this.onInputChange.bind(this);
        this.onSubmitInfo = this.onSubmitInfo.bind(this);
    }

    onInputChange(e) {
        const currentValue = e.currentTarget.value;
        const key = e.currentTarget.getAttribute("name");

        const { values } = this.state;

        const valuesCopyObj = values.slice();

        valuesCopyObj[0][key][0].value = currentValue;

        this.setState({
            values: [...values.slice(0, 1), ...valuesCopyObj],
        });
    }

    onSubmitInfo(e) {
        e.preventDefault();

        this.setState({
            editing: false,
        });
    }

    editExperience(e) {
        e.preventDefault();

        this.setState({
            editing: true,
        });
    }

    passDeleteId(e) {
        e.preventDefault();

        const { expId } = this.state;

        const { onDeleteExp } = this.props;

        this.setState({
            deleted: true,
        });

        onDeleteExp(expId);
    }

    render() {
        const { editing, values, expId, deleted } = this.state;

        const { companyName, position, startDate, endDate, description } = values[0];

        const contents = () => {
            let expContents;

            if (editing) {
                const fieldsArray = [];

                Object.entries(values[0]).forEach(([key, value]) => {
                    const valueData = value[0];

                    if (key === "startDate" || key === "endDate") {
                        const date = new Date(valueData.value);

                        const formattedDate = date.toISOString().split("T")[0];

                        valueData.value = formattedDate;
                    }

                    fieldsArray.push(
                        <FormField
                            key={valueData.uniqid}
                            onInputChanged={this.onInputChange}
                            inputAttr={key}
                            inputName={valueData.name}
                            inputValue={valueData.value}
                            inputUniqid={valueData.uniqid}
                            inputType={valueData.inputType}
                        />
                    );
                });

                expContents = (
                    <form
                        className="cv-form"
                        data-form-id={expId}
                        onSubmit={editing ? this.onSubmitInfo : null}
                    >
                        {fieldsArray}
                        <footer className="cv-form__footer">
                            <button className="btn" type="submit">
                                Save
                            </button>
                        </footer>
                    </form>
                );
            } else {
                expContents = (
                    <div>
                        <h3>
                            {companyName[0].value}
                            {" - "}
                            <em>{position[0].value}</em>
                        </h3>
                        <p>
                            {startDate[0].value}
                            {" - "}
                            {endDate[0].value}
                        </p>
                        <p>{description[0].value}</p>

                        <div className="btn-contain">
                            <button
                                onClick={!editing ? this.editExperience : null}
                                className="btn icon"
                                type="button"
                            >
                                <i className="fas fa-edit" />
                            </button>
                            <button
                                onClick={!deleted ? this.passDeleteId : null}
                                className="btn icon"
                                type="button"
                            >
                                <i className="fas fa-trash" />
                            </button>
                        </div>
                    </div>
                );
            }

            return expContents;
        };

        return <div className="experience cv-repeat-item">{contents()}</div>;
    }
}

Experience.propTypes = {
    editing: PropTypes.bool.isRequired,
    values: PropTypes.array.isRequired,
    expId: PropTypes.string.isRequired,
    onDeleteExp: PropTypes.func.isRequired,
};

export default Experience;
