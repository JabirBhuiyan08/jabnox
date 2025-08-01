import React from "react";
import Header from "./header";
import SecondHeader from "./SecondHeader";
import WebsiteBuilder from "./WebsiteBuilder";

import ContactForm from "./ContactForm";
import ReviewsCarousel from "./ReviewsCarousel";
import { Helmet } from "react-helmet-async";

const Home = () => {
  return (
    <div>
      <Helmet>
        <title>JABNOX | Digital Services, Web Design & SEO Solutions</title>
        <meta
          name="description"
          content="JABNOX offers expert digital services including custom web design, SEO, and branding solutions to help businesses grow online. Discover why JABNOX is your trusted digital partner."
        />
        <meta
          name="keywords"
          content="jabnox,JABNOX, Jabnox, JABNOX digital services, jabnox web design, jabnox SEO, jabnox branding, jabnox.com, digital marketing jabnox, Jabir Bhuiyan, Sabbir Md Nayan Khan"
        />
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
