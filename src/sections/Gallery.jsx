import React, { useEffect } from "react";
import gal1 from "../assets/images/gal1.jpg";
import gal2 from "../assets/images/gal2.jpg";
import gal3 from "../assets/images/gal3.jpg";
import gal4 from "../assets/images/gal4.jpg";
import gal5 from "../assets/images/gal5.jpg";
import gal6 from "../assets/images/gal6.jpg";
import AOS from "aos";
import "aos/dist/aos.css";

const Gallery = () => {
  useEffect(() => {
    AOS.init({
      offset: 100,
      duration: 700,
      easing: "ease-in-sine",
      delay: 100,
    });
  }, []);
  return (
    <>
      <section className="w-full flex flex-col md:px-20 px-10 h-fit pb-[300px] py-20 justify-center items-center gap-16 bg-gray-900 
      -mb-[200px]">
        <h1 className="text-6xl text-white font-bold text-center">
          Experience the Best Manicure & <br /> Nail Design
        </h1>
      </section>

      <div className="w-full m-auto flex flex-col justify-center items-center">
        <div className="lg:w-[80%] w-full grid md:grid-cols-3 grid-cols-1 justify-center justify-items-center items-center gap-10 md:-mb-[540px]">
          <img
            data-aos="zoom-in"
            data-aos-delay="200"
            className="rounded-xl w-] h-[350px]"
            src={gal1}
            alt="gal1"
          />
          <img
            data-aos="zoom-in"
            data-aos-delay="200"
            className="rounded-xl w-[400px] h-[350px]"
            src={gal2}
            alt="gal2"
          />
          <img
            data-aos="zoom-in"
            data-aos-delay="200"
            className="rounded-xl w-[400px] h-[350px]"
            src={gal3}
            alt="gal3"
          />
          <img
            data-aos="zoom-in"
            data-aos-delay="200"
            className="rounded-xl w-[400px] h-[350px]"
            src={gal4}
            alt="gal4"
          />
          <img
            data-aos="zoom-in"
            data-aos-delay="200"
            className="rounded-xl w-[400px] h-[350px]"
            src={gal5}
            alt="gal5"
          />
          <img
            data-aos="zoom-in"
            data-aos-delay="200"
            className="rounded-xl w-[400px] h-[350px]"
            src={gal6}
            alt="gal6"
          />
        </div>
      </div>
    </>
  );
};

export default Gallery;
