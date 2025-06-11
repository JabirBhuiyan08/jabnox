import React from 'react';
import Header from './header';
import SecondHeader from './SecondHeader';
import WebsiteBuilder from './WebsiteBuilder';
import Chat from '../Chat/Chat';
import ContactForm from './ContactForm';
import ReviewsCarousel from './ReviewsCarousel';

const Home = () => {
    return (
        <div>
            <Header></Header>
            <SecondHeader></SecondHeader>
            {/* <Chat></Chat> */}
            <WebsiteBuilder></WebsiteBuilder>
            <ReviewsCarousel></ReviewsCarousel>
            
            {/* <ContactForm></ContactForm> */}
        </div>
    );
};

export default Home;