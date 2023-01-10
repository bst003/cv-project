// Header.jsx

import "./Header.scss";

import React from "react";

const Header = () => {
    const printPage = (e) => {
        console.log("printing page");
        window.print();
    };

    return (
        <header>
            <h1>CV Creator</h1>

            <button className="btn" type="button" onClick={printPage}>
                Print CV
            </button>
        </header>
    );
};

export default Header;
