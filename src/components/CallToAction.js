import React from "react";
import restaurantFood from "../images/restauranfood.jpg";
import { Link } from "react-router-dom";

const CallToAction = () => {

    return (

        <React.Fragment>
            <section className="cta">
            <div>
            <h1>Little Lemon</h1>
            <h2>Chicago</h2>            
            <p>We are a family owned Mediterranean restaurant, focused on traditional recipes served with a modern twist.</p>
            <Link to="/Booking"><button className="buttonCta" aria-label="On Click">Reserve Table</button></Link>
            </div>
            <div>
                <img width={400} height={400} src={restaurantFood} alt="food" />
            </div>
            </section>
        </React.Fragment>
    );
}

export default CallToAction;