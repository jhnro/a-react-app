import React from "react";
import restaurant from "../images/restaurant.jpg";
import { useState } from "react";


const PasswordErrorMessage = () => {
    return (
      <p className="FieldError">Number of guests must be at least 1 guest</p>
    );
  };


const BookingForm = (props) => {

    const [occasion, setOccasion] = useState({
        value: "",
        isTouched: false,
    });
    const [guests, setGuests] = useState({
        value: "",
        isTouched: false,
    });
    const [date, setDate] = useState("");
    const [times, setTimes] = useState("");

    const getIsFormValid = () => {
        
        return (date && 
          times && 
         guests >= 1 && 
         ( occasion === "Birthday" || occasion ==="Anniversary"));
      };

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
                <input type="number" placeholder="1" min="1" max="10" id="guests" value={guests} onChange={(e) => {setGuests(e.target.value)}} required/>
                {guests.isTouched && guests.value < 1 ? ( <PasswordErrorMessage /> ) : null}
                </div>
                <div>
                <label htmlFor="occasion">Occasion</label>
                <select id="occasion" key={occasion} value={occasion} onChange={(e) => setOccasion(e.target.value)} required>
                <option value="">Select</option>
                    <option value="Birthday">Birthday</option>
                    <option value="Anniversary">Anniversary</option>
                </select>
                {/* {occasion.isTouched && occasion.value === "" ? ( <PasswordErrorMessage /> ) : null} */}
                </div>
                <input aria-label="On Click" type={"submit"} value={"Make Your Reservation"} disabled={!getIsFormValid()}/>
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