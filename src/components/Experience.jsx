import React, { useState } from "react";
import PropTypes from "prop-types";

import FormField from "./FormField";

const Experience = (props) => {
    const { editingProp, valuesProp, expIdProp } = props;

    const [editing, setEditing] = useState(editingProp);
    const [values, setValues] = useState(valuesProp);
    const [expId, setexpId] = useState(expIdProp);
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

    const editExperience = (e) => {
        e.preventDefault();

        setEditing(true);
    };

    const passDeleteId = (e) => {
        e.preventDefault();

        const { onDeleteExp } = props;

        setDeleted(true);

        onDeleteExp(expId);
    };

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
                        onInputChanged={onInputChange}
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
                            onClick={!editing ? editExperience : null}
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

        return expContents;
    };

    return <div className="experience cv-repeat-item">{contents()}</div>;
};

Experience.propTypes = {
    editingProp: PropTypes.bool.isRequired,
    valuesProp: PropTypes.array.isRequired,
    expIdProp: PropTypes.string.isRequired,
    onDeleteExp: PropTypes.func.isRequired,
};

export default Experience;
