import React from "react";
import smallLogo from "../images/small_logo.png";
const Footer = () => {

    return (
        <footer className="footer">
            
            <section>
            <div>
            <img src={smallLogo} className="ftlogo" height={150} alt="Little Lemon Logo" />
            </div>
            <div>
            <h3>Doormat Navigation</h3>
            <ul>
                <li><a href="#Home">Home</a></li>
                <li><a href="#About">About</a></li>
                <li><a href="#Menu">Menu</a></li>
                <li><a href="#Reservations">Reservations</a></li>
                <li><a href="#Order-online">Order online</a></li>
                <li><a href="#Login">Login</a></li>
            </ul>
            </div>
            <div>
            <h3>Contact</h3>
            <ul>
                <li><a href="#Address">Address</a></li>
                <li><a href="#Phone">Phone number</a></li>
                <li><a href="#Email">Email</a></li>
            </ul>
            </div>
            <div><h3>Social Media Links</h3>
            <ul>
                <li><a href="#Address">Address</a></li>
                <li><a href="#Phone">Phone number</a></li>
                <li><a href="#Email">Email</a></li>
            </ul>
            </div>
            </section>
        </footer>
    );
}

export default Footer;