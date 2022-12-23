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
            uniqid: expId,
        };
    }

    render() {
        // const { editing, companyName, position, startDate, endDate, description } = this.state;
        const { editing, values } = this.state;

        const { companyName, position, startDate, endDate, description } = values[0];

        console.log(companyName);

        const contents = () => {
            console.log(this.state);
            let expContents;

            if (editing) {
                const fieldsArray = [];

                // Object.entries(this.state).forEach(([key, value]) => {
                //     if (key !== "editing" && key !== "contactMethods") {
                //         contentsArray.push(
                //             <FormField
                //                 key={value[0].uniqid}
                //                 onInputChanged={this.onInputChange}
                //                 inputKey={key}
                //                 inputName={key}
                //                 inputUniqid={value[0].uniqid}
                //                 inputValue={value[0].value}
                //                 inputType={value[0].inputType}
                //             />
                //         );
                //     }
                // });

                expContents = (
                    <form>
                        {fieldsArray}
                        test
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
