import React, { Component } from "react";
import uniqid from "uniqid";

import FormField from "./FormField";

/*

Streamline variable/key names!!!

*/

class Experience extends Component {
    constructor(props) {
        super(props);

        const { values } = this.props;

        this.state = {
            editing: false,
            values,
        };
    }

    render() {
        const { editing, values } = this.state;

        const contents = () => {
            console.log(values);
            let posContents;
            if (editing) {
                console.log("editing");
            } else {
                console.log("not editing");
            }

            const contentsInfo = <div>Test</div>;

            return contentsInfo;
        };

        return <div className="experience">{contents()}</div>;
    }
}

Experience.propTypes = {
    values: PropTypes.array.isRequired,
};

export default Experience;
