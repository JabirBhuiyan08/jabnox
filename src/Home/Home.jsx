import React from 'react';
import Header from './header';
import SecondHeader from './SecondHeader';
import WebsiteBuilder from './WebsiteBuilder';

import ContactForm from './ContactForm';
import ReviewsCarousel from './ReviewsCarousel';
import { Helmet } from 'react-helmet-async';

const Home = () => {
    return (
        <div>
            <Helmet>
                <title>JABNOX.COM | Home</title>
                <meta name="description" content="Welcome to JABNOX – digital services tailored for your brand." />
                <meta name="keywords" content="JABNOX, digital services, web design, SEO" />
            </Helmet>
            <Header></Header>
            <SecondHeader></SecondHeader>
            <WebsiteBuilder></WebsiteBuilder>
            <ReviewsCarousel></ReviewsCarousel>
            
            <ContactForm></ContactForm>
        </div>
    );
};

export default Home;