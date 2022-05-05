import React from 'react';
import SendMessages from '../../Home/SendMessage/SendMessages';
import Footer from '../../Shared/Footer/Footer';
import Navigation from '../../Shared/Navigation/Navigation';
import Doctors from '../Doctors/Doctors/Doctors';

const Supports = () => {
    return (
        <div>
            <Navigation />
            <Doctors />
            <SendMessages />
            <Footer />
        </div>
    );
};

export default Supports;