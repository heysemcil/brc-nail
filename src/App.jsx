import React, { useState } from "react";
import Header from "./components/Header";
import Hero from "./sections/Hero";
import WhyChoose from "./sections/WhyChoose";
import Pricing from "./sections/Pricing";
import Service from "./sections/Service";
import Gallery from "./sections/Gallery";
import Testimonial from "./sections/Testimonial";
import Footer from "./components/Footer";
import Contact from "./sections/Contact";
import { ServiceContext } from "./context/ServicesContext";

const App = () => {
  const [services, setServices] = useState([]);
  return (
    <ServiceContext.Provider value={{ services, setServices }}>
      <>
        <Header />
        <Hero />
        <WhyChoose />
        <Pricing />
        <Service />
        <Gallery />
        <Testimonial />
        <Contact />
        <Footer />
      </>
    </ServiceContext.Provider>
  );
};

export default App;
