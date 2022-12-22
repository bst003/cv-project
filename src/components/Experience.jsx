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

        const { editing, companyName, position, startDate, endDate, description } = this.props;

        this.state = {
            editing,
            companyName,
            position,
            startDate,
            endDate,
            description,
        };
    }

    render() {
        const { editing, companyName, position, startDate, endDate, description } = this.state;

        const contents = () => {
            console.log(this.state);
            let posContents;

            if (editing) {
                console.log("editing");
            } else {
                posContents = <h4>hello world</h4>;
            }

            const contentsInfo = (
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

            return contentsInfo;
        };

        return <div className="experience">{contents()}</div>;
    }
}

Experience.propTypes = {
    editing: PropTypes.bool.isRequired,
    companyName: PropTypes.array.isRequired,
    position: PropTypes.array.isRequired,
    startDate: PropTypes.array.isRequired,
    endDate: PropTypes.array.isRequired,
    description: PropTypes.array.isRequired,
};

export default Experience;
