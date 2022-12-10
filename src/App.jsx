// App.js

import React, { Component } from "react";
// import uniqid from "uniqid";

import Header from "./components/Header";
import Resume from "./components/Resume";

class App extends Component {
    constructor() {
        super();

        this.state = {};
    }

    render() {
        // const { task, tasks } = this.state;

        return (
            <div>
                <Header />
                <Resume />
            </div>
        );
    }
}

export default App;
