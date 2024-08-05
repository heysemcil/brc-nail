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
      <div
        data-aos="zoom-in"
        id="img-box"
        className="w-full bg-center bg-cover h-[700px]"
        style={{ backgroundImage: `url(${contactimg})` }}
      ></div>
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
            className="bg-themeyellow hover:bg-[#aa44c1] cursor-pointer w-full font-semibold text-black text-lg p-3"
          />
        </div>
      </div>
    </section>
  );
};

export default Contact;
