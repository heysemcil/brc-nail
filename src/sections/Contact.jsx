import React, { useEffect } from "react";
import contactimg from "../assets/images/contactimg.jpg";

import AOS from "aos";
import "aos/dist/aos.css";

const Contact = () => {
  useEffect(() => {
    AOS.init({
      offset: 100,
      duration: 700,
      easing: "ease-in-sine",
      delay: 100,
    });
  }, []);
  return (
    <section
      id="contact"
      className="w-full h-fit grid grid-cols-1 justify-center items-start lg:grid-cols-2"
    >
      <div className="w-ful h-full">
        <iframe
          width="100%"
          height="100%"
          frameBorder="0"
          scrolling="no"
          marginHeight="0"
          marginWidth="0"
          src="https://maps.google.com/maps?width=100%25&amp;height=100%&amp;hl=en&amp;q=330%20Riverdale%20yonkers+(My%20Business%20Name)&amp;t=&amp;z=14&amp;ie=UTF8&amp;iwloc=B&amp;output=embed"
        >
          <a href="https://www.gps.ie/">gps devices</a>
        </iframe>
      </div>
      <div
        id="form-box"
        className="bg-gray-900 p-16 flex flex-col justify-center items-center gap-12 w-full h-[700px]"
      >
        <h1
          data-aos="zoom-in"
          data-aos-delay="200"
          className="text-white text-6xl font-bold text-center"
        >
          Contact Us
        </h1>
        <p className="text-xl text-red-300">
          * This form is currently out of use. Please contact us directly.
        </p>
        <div
          data-aos="zoom-out"
          data-aos-delay="400"
          id="form"
          className="w-full flex flex-col justify-center items-center gap-4"
        >
          <input
            type="text"
            disabled
            placeholder="Enter your full name"
            className="w-full p-3 text-black font-semibold"
          />
          <input
            type="email"
            disabled
            placeholder="Enter your valid email address"
            className="w-full p-3 text-black font-semibold"
          />
          <textarea
            name=""
            cols="30"
            rows="5"
            id=""
            disabled
            placeholder="Enter your message here..."
            className="w-full p-3"
          ></textarea>
          <input
            type="submit"
            value="SUBMIT"
            className="bg-themeyellow  cursor-pointer w-full font-semibold text-black text-lg p-3"
          />
        </div>
      </div>
    </section>
  );
};

export default Contact;
