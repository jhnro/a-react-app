// import { render, screen } from "@testing-library/react";
// // import { fireEvent } from "@testing-library/react";
// import BookingForm from './components/BookingForm';

// describe("Booking Form", () => {
// test("Render the BookingForm", () => {
  
//   const date = "January 16, 2024";
//   // const times = "18:30";
//   const guests = "4";
//   const occasion = "Birthday";
//   const handleOnSubmitMock  = jest.fn();
//   render(<BookingForm onSubmit={handleOnSubmitMock} />);

//   const getDate = screen.getByLabelText(/Choose date/);
//   // expect(getDate).toBeInTheDocument();
//   fireEvent.change(getDate, { target: { value: date } });

//   // const getTime = screen.getByLabelText(/Choose time/);
//   // // expect(getTime).toBeInTheDocument();
//   // fireEvent.change(getTime, { target: { value: times } });
  
//   const numberInput = screen.getByLabelText(/Number of guests/);
//     // expect(numberInput).toBeInTheDocument();
//     fireEvent.change(numberInput, { target: { value: guests } });

//     const getOccasion = screen.getByLabelText(/Occasion/);
//     // expect(getOccasion).toBeInTheDocument();
//     fireEvent.change(getOccasion, { target: { value: occasion } });

//     const submitButton = screen.getByRole("button");
//     fireEvent.click(submitButton);

    

//     expect(handleOnSubmitMock).toHaveBeenCalledWith({
//       date,
//       times: "18:30",
//       guests,
//       occasion,
//     });
// });
// });



import React from 'react';
import ReactDOM from 'react-dom/client';
import { fireEvent, render, screen } from "@testing-library/react";
import userEvent from '@testing-library/user-event';
import { BrowserRouter } from 'react-router-dom';
import App from './App';
import BookingForm from './components/BookingForm';
import CallToAction from './components/CallToAction';
import Main from './components/Main';

test('Renders the CallToAction heading', () => {
    render( <BrowserRouter><CallToAction /></BrowserRouter> );
    const headingElement = screen.getByText("Reserve Table");
    expect(headingElement).toBeInTheDocument();

   
  });

