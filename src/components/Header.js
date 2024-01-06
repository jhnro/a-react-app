import React from "react";
import Nav from "./Nav";
import logo from "../images/Logo.svg";

const Header = () => {

    return (
        <header className="AppHeader">
            <section>
            <img src={logo} className="hdlogo" alt="Little Lemon Restaurant top logo" />
            <Nav />
            </section>
        </header>
    );
}

export default Header;