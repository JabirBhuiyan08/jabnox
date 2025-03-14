import React from 'react';
import Header from './header';
import SecondHeader from './SecondHeader';
import WebsiteBuilder from './WebsiteBuilder';

const Home = () => {
    return (
        <div>
            <Header></Header>
            <SecondHeader></SecondHeader>
            <WebsiteBuilder></WebsiteBuilder>
        </div>
    );
};

export default Home;