import React from "react";
import smallLogo from "../images/small_logo.png";
const Footer = () => {

    return (
        <footer>
            <img src={smallLogo} height={150} alt="Little Lemon Logo" />
            <div><p>Doormat Navigation</p>
            <ul>
                <li><a href="#Home">Home</a></li>
                <li><a href="#About">About</a></li>
                <li><a href="#Menu">Menu</a></li>
                <li><a href="#Reservations">Reservations</a></li>
                <li><a href="#Order-online">Order online</a></li>
                <li><a href="#Login">Login</a></li>
            </ul>
            </div>
            <div><p>Contact</p>
            <ul>
                <li><a href="#Address">Address</a></li>
                <li><a href="#Phone">Phone number</a></li>
                <li><a href="#Email">Email</a></li>
            </ul>
            </div>
            <div><p>Social Media Links</p>
            <ul>
                <li><a href="#Address">Address</a></li>
                <li><a href="#Phone">Phone number</a></li>
                <li><a href="#Email">Email</a></li>
            </ul>
            </div>
        </footer>
    );
}

export default Footer;