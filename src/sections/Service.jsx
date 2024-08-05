import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import servicesimg from "../assets/images/servicimg.jpg";
import service1 from "../assets/images/ser1.png";
import service2 from "../assets/images/ser2.png";
import service3 from "../assets/images/ser3.png";
import service4 from "../assets/images/ser4.png";

const Service = () => {
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
      id="service"
      className="w-full flex flex-col md:px-20 px-10 md:py-20 py-10 justify-center items-center gap-16 bg-gray-900"
    >
      <div className="flex flex-col justify-center items-center gap-4">
        <h1
          data-aos="zoom-in"
          className="text-6xl text-white font-bold text-center"
        >
          Our Service
        </h1>
        <p data-aos="zoom-in" className="text-xl text-slate-200 text-center">
          “Your nails are a way to speak your style without saying a word.” —
          Tammy Taylor
        </p>
      </div>
      <div className="w-[90%] grid grid-cols-1 md:grid-cols-2 justify-center items-center gap-6">
        <div id="image-box">
          <img
            data-aos="zoom-in"
            data-aos-delay="200"
            src={servicesimg}
            alt="serviceimg"
          />
        </div>
        <div className="grid md:grid-cols-2 grid-cols-1 justify-center items-center gap-8">
          <div
            data-aos="zoom-out"
            data-aos-delay="200"
            className="bg-white px-8 py-12 flex flex-col justify-center items-center gap-4 rounded-xl"
          >
            <img
              src={service1}
              alt="service1"
              className="size-16 transform hover:scale-110 transition-transform duration-300 cursor-pointer"
            />
            <h1 className="text-black text-[25px] text-center font-bold">Signature Manicure</h1>
          </div>
          <div
            data-aos="zoom-out"
            data-aos-delay="200"
            className="bg-white px-8 py-12 flex flex-col justify-center items-center gap-4 rounded-xl"
          >
            <img
              src={service2}
              alt="service1"
              className="size-16 transform hover:scale-110 transition-transform duration-300 cursor-pointer"
            />
            <h1 className="text-black text-[25px] text-center font-bold">Hard Gel</h1>
          </div>
          <div
            data-aos="zoom-out"
            data-aos-delay="200"
            className="bg-white px-8 py-12 flex flex-col justify-center items-center gap-4 rounded-xl"
          >
            <img
              src={service3}
              alt="service1"
              className="size-16 transform hover:scale-110 transition-transform duration-300 cursor-pointer"
            />
            <h1 className="text-black text-[25px] text-center font-bold">Extentions & Fill in</h1>
          </div>
          <div
            data-aos="zoom-out"
            data-aos-delay="200"
            className="bg-white px-8 py-12 flex flex-col justify-center items-center gap-4 rounded-xl"
          >
            <img
              src={service4}
              alt="service1"
              className="size-16 transform hover:scale-110 transition-transform duration-300 cursor-pointer"
            />
            <h1 className="text-black text-[25px] text-center font-bold">Nail Art</h1>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Service;
