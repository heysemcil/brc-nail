import React, { useEffect } from "react";
import sissor from "../assets/images/sissor.png";
import menshair from "../assets/images/menshair.png";
import trimmer from "../assets/images/trimmer.png";
import womenhair from "../assets/images/womenhair.png";
import AOS from "aos";
import "aos/dist/aos.css";

const ServiceDetails = () => {
  useEffect(() => {
    AOS.init({
      offset: 110,
      duration: 800,
      easing: "ease-in-sine",
      delay: 100,
    });
  }, []);

  return (
    <div>
      <section className="grid grid-cols-1 md:grid-cols-4 justify-center items-start w-full md:px-[120px] px-10 py-10 gap-10">
        <div
          data-aos="zoom-in"
          data-aos-delay="200"
          className="flex flex-col justify-center items-center gap-4"
        >
          <img
            src={sissor}
            alt="element1"
            className="size-16 transform hover:scale-110 transition-transform duration-300 cursor-pointer"
          />
          <h1 className="text-2xl text-black font-semibold">
            Russian style Manicures
          </h1>
          <button className="px-10 py-3 bg-black text-white text-md font-semibold rounded-xl hover:bg-themeyellow hover:text-black cursor-pointer">
            MORE
          </button>
        </div>

        <div
          data-aos="zoom-in"
          data-aos-delay="200"
          className="flex flex-col justify-center items-center gap-4"
        >
          <img
            src={menshair}
            alt="element1"
            className="size-16 transform hover:scale-110 transition-transform duration-300 cursor-pointer"
          />
          <h1 className="text-2xl text-black font-semibold">
            Signature Gel Manicure
          </h1>
          <button className="px-10 py-3 bg-black text-white text-md font-semibold rounded-xl hover:bg-themeyellow hover:text-black cursor-pointer">
            MORE
          </button>
        </div>

        <div
          data-aos="zoom-in"
          data-aos-delay="200"
          className="flex flex-col justify-center items-center gap-4"
        >
          <img
            src={trimmer}
            alt="element1"
            className="size-16 transform hover:scale-110 transition-transform duration-300 cursor-pointer"
          />
          <h1 className="text-2xl text-black font-semibold">
            Hard Gel & Manicure
          </h1>
          <button className="px-10 py-3 bg-black text-white text-md font-semibold rounded-xl hover:bg-themeyellow hover:text-black cursor-pointer">
            MORE
          </button>
        </div>

        <div
          data-aos="zoom-in"
          data-aos-delay="200"
          className="flex flex-col justify-center items-center gap-4"
        >
          <img
            src={womenhair}
            alt="element1"
            className="size-16 transform hover:scale-110 transition-transform duration-300 cursor-pointer"
          />
          <h1 className="text-2xl text-black font-semibold">
            No Gel & Regular Manicure
          </h1>
          <button className="px-10 py-3 bg-black text-white text-md font-semibold rounded-xl hover:bg-themeyellow hover:text-black cursor-pointer">
            MORE
          </button>
        </div>
        <div
          data-aos="zoom-in"
          data-aos-delay="200"
          className="flex flex-col justify-center items-center gap-4"
        >
          <img
            src={womenhair}
            alt="element1"
            className="size-16 transform hover:scale-110 transition-transform duration-300 cursor-pointer"
          />
          <h1 className="text-2xl text-black font-semibold">
            Gel Extantions & Fiil in
          </h1>
          <button className="px-10 py-3 bg-black text-white text-md font-semibold rounded-xl hover:bg-themeyellow hover:text-black cursor-pointer">
            MORE
          </button>
        </div>
        <div
          data-aos="zoom-in"
          data-aos-delay="200"
          className="flex flex-col justify-center items-center gap-4"
        >
          <img
            src={womenhair}
            alt="element1"
            className="size-16 transform hover:scale-110 transition-transform duration-300 cursor-pointer"
          />
          <h1 className="text-2xl text-black font-semibold">Gel Remove</h1>
          <button className="px-10 py-3 bg-black text-white text-md font-semibold rounded-xl hover:bg-themeyellow hover:text-black cursor-pointer">
            MORE
          </button>
        </div>
        <div
          data-aos="zoom-in"
          data-aos-delay="200"
          className="flex flex-col justify-center items-center gap-4"
        >
          <img
            src={womenhair}
            alt="element1"
            className="size-16 transform hover:scale-110 transition-transform duration-300 cursor-pointer"
          />
          <h1 className="text-2xl text-black font-semibold">Nail Art</h1>
          <button className="px-10 py-3 bg-black text-white text-md font-semibold rounded-xl hover:bg-themeyellow hover:text-black cursor-pointer">
            MORE
          </button>
        </div>
        <div
          data-aos="zoom-in"
          data-aos-delay="200"
          className="flex flex-col justify-center items-center gap-4"
        >
          <img
            src={womenhair}
            alt="element1"
            className="size-16 transform hover:scale-110 transition-transform duration-300 cursor-pointer"
          />
          <h1 className="text-2xl text-black font-semibold">Smart Pedicure</h1>
          <button className="px-10 py-3 bg-black text-white text-md font-semibold rounded-xl hover:bg-themeyellow hover:text-black cursor-pointer">
            MORE
          </button>
        </div>
      </section>
    </div>
  );
};

export default ServiceDetails;
