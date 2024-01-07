import React from "react";
import './App.css';
import Header from "./components/Header";
import Main from "./components/Main";
import Footer from "./components/Footer";
import HomePage from "./components/HomePage";
import BookingPage from "./components/BookingPage";
import {Routes, Route} from 'react-router-dom';

function App() {
  return (
    <React.Fragment>
      <Header />
      <Main />      
      <Footer />
      <Routes>
        <Route path="/" element={<HomePage />}></Route>
        <Route path="/booking" element={<BookingPage />}></Route>
      </Routes>
    </React.Fragment>
  );
}

export default App;
