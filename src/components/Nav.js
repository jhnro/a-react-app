import React from "react";
import { Link } from 'react-router-dom';

const Nav = () => {

    const handleClick = (anchor) => () => {
        const id = `${anchor}-section`;
        const element = document.getElementById(id);
        if (element) {
          element.scrollIntoView({
            behavior: "smooth",
            block: "start",
          });
        }
    };
    return (
        
        <nav className="nav">
            <ul>
                <li><Link to="/" className="nav-item">Home</Link></li>
                <li><a href="./#chicago" className="nav-item" onClick={handleClick("chicago")}>About</a></li>
                <li><a href="./#menu" className="nav-item" onClick={handleClick("specials")}>Menu</a></li>
                <li><Link to="/booking" className="nav-item">Reservations</Link></li>
                <li><a href="./#order-online" className="nav-item" onClick={handleClick("specials")}>Order online</a></li>
                <li><a href="./#login" className="nav-item" onClick={handleClick("login")}>Login</a></li>
            </ul>
        </nav>
        
      
    );
}

export default Nav;