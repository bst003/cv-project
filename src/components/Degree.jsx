import React, { useState } from "react";
import PropTypes from "prop-types";

import FormField from "./FormField";

const Degree = (props) => {
    const { editingProp, valuesProp, degIdProp } = props;

    const [editing, setEditing] = useState(editingProp);
    const [values, setValues] = useState(valuesProp);
    const [degId, setdegId] = useState(degIdProp);
    const [deleted, setDeleted] = useState(false);

    const onInputChange = (e) => {
        const currentValue = e.target.value;
        const key = e.target.getAttribute("name");

        const valuesCopyObj = values.slice();

        valuesCopyObj[0][key][0].value = currentValue;

        setValues([...values.slice(0, 1), ...valuesCopyObj]);
    };

    const onSubmitInfo = (e) => {
        e.preventDefault();

        setEditing(false);
    };

    const editDegree = (e) => {
        e.preventDefault();

        setEditing(true);
    };

    const passDeleteId = (e) => {
        e.preventDefault();

        const { onDeleteDeg } = props;

        setDeleted(true);

        onDeleteDeg(degId);
    };

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
                        onInputChanged={onInputChange}
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
                    onSubmit={editing ? onSubmitInfo : null}
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
                            onClick={!editing ? editDegree : null}
                            className="btn icon"
                            type="button"
                        >
                            <i className="fas fa-edit" />
                        </button>
                        <button
                            onClick={!deleted ? passDeleteId : null}
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
};

Degree.propTypes = {
    editingProp: PropTypes.bool.isRequired,
    valuesProp: PropTypes.array.isRequired,
    degIdProp: PropTypes.string.isRequired,
    onDeleteDeg: PropTypes.func.isRequired,
};

export default Degree;
