import React from "react";
import BookingForm from "../components/BookingForm";
// import { useState } from "react";

const BookingPage = (props) => {

    return (
        <section id="booking" className="booking">
        <BookingForm
        availableTimes={props.availableTimes}
        dispatch={props.dispatch}
        submitForm={props.submitForm}
              />
        </section>

        
    )
}

export default BookingPage;