import React, { Component } from "react";
import PropTypes from "prop-types";

import FormField from "./FormField";

class Degree extends Component {
    constructor(props) {
        super(props);

        const { editing, values, degId } = this.props;

        this.state = {
            editing,
            values,
            degId,
            deleted: false,
        };

        this.passDeleteId = this.passDeleteId.bind(this);
        this.editDegree = this.editDegree.bind(this);
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

    editDegree(e) {
        e.preventDefault();

        this.setState({
            editing: true,
        });
    }

    passDeleteId(e) {
        e.preventDefault();

        const { degId } = this.state;

        const { onDeleteDeg } = this.props;

        this.setState({
            deleted: true,
        });

        onDeleteDeg(degId);
    }

    render() {
        const { editing, values, degId, deleted } = this.state;

        const { schoolName, degree, startDate, endDate } = values[0];

        const contents = () => {
            let degContents;

            if (editing) {
                const fieldsArray = [];

                Object.entries(values[0]).forEach(([key, value]) => {
                    const valueData = value[0];

                    if (valueData.inputType === "date") {
                        const date = new Date(valueData.value);

                        const formattedDate = date.toISOString().split("T")[0];

                        valueData.value = formattedDate;
                    }

                    if (valueData.inputType === "month") {
                        const date = new Date(valueData.value);

                        const formattedDate = date.toISOString().split("-");

                        valueData.value = `${formattedDate[0]}-${formattedDate[1]}`;
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

                degContents = (
                    <form
                        className="cv-form"
                        data-form-id={degId}
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
                degContents = (
                    <div>
                        <h3>
                            {schoolName[0].value}
                            {" - "}
                            <em>{degree[0].value}</em>
                        </h3>
                        <p>
                            {startDate[0].value}
                            {" - "}
                            {endDate[0].value}
                        </p>

                        <div className="btn-contain">
                            <button
                                onClick={!editing ? this.editDegree : null}
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

            return degContents;
        };

        return <div className="degree cv-repeat-item">{contents()}</div>;
    }
}

Degree.propTypes = {
    editing: PropTypes.bool.isRequired,
    values: PropTypes.array.isRequired,
    degId: PropTypes.string.isRequired,
    onDeleteDeg: PropTypes.func.isRequired,
};

export default Degree;
