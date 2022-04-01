import React from 'react';
import Footer from '../../Shared/Footer/Footer';
import Navigation from '../../Shared/Navigation/Navigation';
import AppointmentBanner from '../AppointmentBanner/AppointmentBanner';
import Banner from '../Banner/Banner';
import SendMessages from '../SendMessage/SendMessages';
import Services from '../Services/Services';
import Testimonials from '../Testimonials/Testimonials/Testimonials';

const Home = () => {
    return (
        <div>
            <Navigation />
            <Banner />
            <Services />
            <AppointmentBanner />
            <Testimonials />
            <SendMessages />
            <Footer />
        </div>
    );
};

export default Home;