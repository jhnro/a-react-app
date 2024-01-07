import React from 'react';
import Header from "../components/Header";
import Main from "../components/Main";
import Footer from "../components/Footer";

import BookingPage from '../components/BookingPage';
import Chicago from '../components/Chicago';

const HomePage = () => {

    return (
        <React.Fragment>
            <Header />
            <Main />
            <Chicago />
            <Footer />
        </React.Fragment>
    );
}

export default HomePage;