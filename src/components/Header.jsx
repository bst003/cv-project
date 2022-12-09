// Header.jsx

import "./Header.scss";

import React, { Component } from "react";

class Header extends Component {
    static printPage(e) {
        console.log("printing page");
        window.print();
    }

    render() {
        return (
            <header>
                <h1>CV Creator</h1>

                <button className="btn" type="button" onClick={Header.printPage}>
                    Print CV
                </button>
            </header>
        );
    }
}

export default Header;
