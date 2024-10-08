import React, { useEffect } from "react";
import whyimg from "../assets/images/why3.jpg";
import { FaAngleDoubleRight } from "react-icons/fa";
import AOS from "aos";
import "aos/dist/aos.css";

const WhyChoose = () => {
  useEffect(() => {
    AOS.init({
      offset: 200,
      duration: 800,
      easing: "ease-in-sine",
      delay: 100,
    });
  }, []);

  return (
    <section
      id="about"
      className="w-full md:px-20 px-10 md:py-20 flex flex-col md:flex-row justify-center items-center gap-20 bg-cover bg-center py-10"
      style={{ backgroundImage: `url(${whyimg})` }}
    >
      <div
        data-aos="zoom-in"
        className="flex flex-col justify-center items-center gap-10 bg-white p-10 rounded-xl md:w-[40%] w-full "
      >
        <h1 className="text-themeyellow text-4xl font-bold text-center">
          WORKING HOURS
        </h1>
        <div className="flex flex-col justify-center items-center">
          <p className="text-xl text-black underline">MONDAY</p>
          <p className="mb-4"> 9AM-5PM</p>
          <p className="text-xl text-black underline">TUESDAY</p>
          <p className="mb-4"> 9AM-5PM</p>
          <p className="text-xl text-black underline">WEDNESDAY</p>
          <p className="mb-4"> 9AM-5PM</p>
          <p className="text-xl text-black underline">THURSDAY</p>
          <p className="mb-4"> 9AM-5PM</p>
          <p className="text-xl text-black underline">FRIDAY</p>
          <p className="mb-4"> 9AM-5PM</p>
          <p className="text-xl text-black underline">SATURDAY</p>
          <p className="mb-4"> 9AM-5PM</p>
          <p className="text-xl text-black underline">SUNDAY</p>
          <p className="mb-4"> 9AM-5PM</p>
        </div>
        <button
          className="px-10 py-4 rounded-xl border-2 border-black text-black font-semibold text-lg hover:bg-black hover:text-white"
          onClick={() =>
            window.open("https://brcnail.simplybook.me/v2/#book", "_blank")
          }
        >
          BOOK ONLINE
        </button>
      </div>

      <div
        data-aos="slide-up"
        data-aos-delay="200"
        className="md:-[40%] w-full flex flex-col justify-center items-start gap-6 h-fit"
      >
        <h1 className="text-6xl text-white font-bold text-center">
          Why Choose Us
        </h1>
        <p className="text-2xl font-semibold text-white text-center md:text-start">
          WE OFFER YOU
        </p>
        <div
          id="icon-list"
          className="flex flex-col justify-center items-start gap-4"
        >
          <div id="icon-box" className="flex justify-center items-center gap-3">
            <FaAngleDoubleRight className="text-white size-6" />
            <h1 className="text-xl text-white font-semibold">
              Clean, safe and long lasting services.
            </h1>
          </div>
          <div id="icon-box" className="flex justify-center items-center gap-3">
            <FaAngleDoubleRight className="text-white size-6" />
            <h1 className="text-xl text-white font-semibold">
              Convenient online booking system.
            </h1>
          </div>
          <div id="icon-box" className="flex justify-center items-center gap-3">
            <FaAngleDoubleRight className="text-white size-6" />
            <h1 className="text-xl text-white font-semibold">
              Available 24/7.
            </h1>
          </div>
          <div id="icon-box" className="flex justify-center items-center gap-3">
            <FaAngleDoubleRight className="text-white size-6" />
            <h1 className="text-xl text-white font-semibold">
              Two-step tool sterilization.
            </h1>
          </div>
          <div id="icon-box" className="flex justify-center items-center gap-3">
            <FaAngleDoubleRight className="text-white size-6" />
            <h1 className="text-xl text-white font-semibold">
              Disposable materials per customer.
            </h1>
          </div>
          <div id="icon-box" className="flex justify-center items-center gap-3">
            <FaAngleDoubleRight className="text-white size-6" />
            <h1 className="text-xl text-white font-semibold">
              Discover the art of European & Russian Manicure
            </h1>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhyChoose;
