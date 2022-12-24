import React, { Component } from "react";
import PropTypes from "prop-types";

import uniqid from "uniqid";

import FormField from "./FormField";

/*

Streamline variable/key names!!!

*/

class Experience extends Component {
    constructor(props) {
        super(props);

        // const { editing, companyName, position, startDate, endDate, description } = this.props;
        const { editing, values, expId } = this.props;

        this.state = {
            editing,
            values,
            expId,
        };

        this.onInputChange = this.onInputChange.bind(this);
    }

    onInputChange(e) {
        console.log("tedt");

        this.setState({});
    }

    render() {
        // const { editing, companyName, position, startDate, endDate, description } = this.state;
        const { editing, values, expId } = this.state;

        const { companyName, position, startDate, endDate, description } = values[0];

        const contents = () => {
            let expContents;

            console.log(typeof values[0]);

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
                            inputKey={key}
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
                    >
                        {fieldsArray}
                        <footer className="cv-form__footer">
                            <button
                                className="btn"
                                type="submit"
                            >
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
                    </div>
                );
            }

            return expContents;
        };

        return <div className="experience">{contents()}</div>;
    }
}

Experience.propTypes = {
    editing: PropTypes.bool.isRequired,
    values: PropTypes.array.isRequired,
    expId: PropTypes.string.isRequired,
};

export default Experience;
