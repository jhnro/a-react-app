import React from 'react';
import Adrian from '../images/Mario-and-Adrian-A.jpg';
import Mario from '../images/restaurant-chef-B.jpg';
const Chicago = () => {

    return (

        <React.Fragment>
            <section className="about">
            <div>
            <h1>Little Lemon</h1>
            <h2>Chicago</h2>            
            <p>Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint.
                Velit officia consequat duis enim velit mollit. Exercitation veniam consequat
                 sunt nostrud amet. Amet minim mollit non deserunt ullamco est sit aliqua dolor 
                 do amet sint. Velit officia consequat duis enim velit mollit. </p>
            </div>
            <div>
                <img src={Adrian} width={250} height={350} alt="Adrian" />
            </div>
            <div>
                <img src={Mario} width={250} height={350} alt="Mario" />
            </div>
            </section>
        </React.Fragment>
    );
}

export default Chicago;