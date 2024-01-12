import React from "react";
import restaurant from "../images/restaurant.jpg";
import { useState } from "react";

const BookingForm = (props) => {

    const [occasion, setOccasion] = useState("");
    const [guests, setGuests] = useState("");
    const [date, setDate] = useState("");
    const [times, setTimes] = useState("");

    const handleSubmit = (e) => {
    e.preventDefault();
    props.submitForm(e);
    };

    const handleChange = (e) => {
        setDate(e);
        props.dispatch(e);
       }



    return (
            <section className="formular">
                <div className="f1">
                <h1 data-testid="header-table">Table Reservation</h1>
             <form onSubmit={handleSubmit} >
                <fieldset>
                <div>
                <label htmlFor="res-date">Choose date</label>
                <input type="date" id="res-date" value={date} onChange={(e) => handleChange(e.target.value)} required />
                </div>
                <div>
                <label htmlFor="res-time">Choose time </label>
                <select id="res-time" value={times} onChange={(e) => setTimes(e.target.value)} required>
                <option value="">Select time</option>
                    {props.availableTimes.availableTimes.map(time => {return <option value={time}>{time}</option>})}
                </select>
                </div>
                <div>
                <label htmlFor="guests">Number of guests</label>
                <input type="number" placeholder="1" min="1" max="10" id="guests" value={guests} onChange={(e) => {setGuests(e.target.value)}}/>
                </div>
                <div>
                <label htmlFor="occasion">Occasion</label>
                <select id="occasion" key={occasion} value={occasion} onChange={(e) => setOccasion(e.target.value)} required>
                    <option>Birthday</option>
                    <option>Anniversary</option>
                </select>
                </div>
                <input aria-label="On Click" type={"submit"} value={"Make Your Reservation"} />
                </fieldset>
            </form>
            </div>
            <div className="f2">
                <img src={restaurant} width={490} alt="restaurant little lemon" />
               </div>
            </section>
    );
}
export default BookingForm;