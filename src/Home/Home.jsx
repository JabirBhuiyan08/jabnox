import React from 'react';
import Header from './header';
import SecondHeader from './SecondHeader';
import WebsiteBuilder from './WebsiteBuilder';
import Chat from '../Chat/Chat';
import ContactForm from './ContactForm';

const Home = () => {
    return (
        <div>
            <Header></Header>
            <SecondHeader></SecondHeader>
            <Chat></Chat>
            <WebsiteBuilder></WebsiteBuilder>
            <ContactForm></ContactForm>
        </div>
    );
};

export default Home;