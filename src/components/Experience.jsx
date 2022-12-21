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

        const { editing, companyName, position, startDate, endDate } =
            this.props;

        this.state = {
            editing,
            companyName,
            position,
            startDate,
            endDate,
        };
    }

    render() {
        const { editing, companyName, position, startDate, endDate } =
            this.state;

        const contents = () => {
            console.log(values);
            let posContents;

            if (editing) {
                console.log("editing");
            } else {
                posContents = <h4>hello world</h4>;
            }

            const contentsInfo = (
                <div>
                    Test
                    {posContents}
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
};

export default Experience;
