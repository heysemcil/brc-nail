import React, { useEffect } from "react";
import heroImg from "../assets/images/hero.jpg";
import { FaLocationDot } from "react-icons/fa6";
import { MdOutlinePhoneAndroid } from "react-icons/md";
import { MdEmail } from "react-icons/md";
import sissor from "../assets/images/sissor.png";
import menshair from "../assets/images/menshair.png";
import trimmer from "../assets/images/trimmer.png";
import womenhair from "../assets/images/womenhair.png";
import AOS from "aos";
import "aos/dist/aos.css";

const Hero = () => {
  useEffect(() => {
    AOS.init({
      offset: 200,
      duration: 800,
      easing: "ease-in-sine",
      delay: 100,
    });
  }, []);

  return (
    <>
      <section
        id="hero"
        className="w-full md:px-[120px] px-10 flex flex-col justify-center items-center gap-20 md:flex-row mt-10"
      >
        <div
          id="content-box"
          className="flex flex-col justify-center items-start gap-10 "
        >
          <h1 data-aos="zoom-in" className="text-2xl text-black font-semibold ">
            Welcome To
          </h1>
          <h1 data-aos="zoom-in" className="text-6xl text-black font-bold">
            Nail Studio <br />
            In Manhattan <br />
            NEW YORK
          </h1>
          <div
            data-aos="slide-up"
            id="icon-list"
            className="flex flex-col justify-center items-start gap-6"
          >
            <div
              id="icon-box"
              className="flex justify-center items-center gap-3"
            >
              <FaLocationDot className="text-black size-6" />
              <h1 className="text-xl text-gray-800 font-semibold ">
                Lorem ipsum dolor sit amet consectetur.
              </h1>
            </div>
            <div
              id="icon-box"
              className="flex justify-center items-center gap-3"
            >
              <MdOutlinePhoneAndroid className="text-black size-6" />
              <h1 className="text-xl text-gray-800 font-semibold ">
                +1 999 999 9999
              </h1>
            </div>
            <div
              id="icon-box"
              className="flex justify-center items-center gap-3"
            >
              <MdEmail className="text-black size-6" />
              <h1 className="text-xl text-gray-800 font-semibold ">
                Company@gmail.com
              </h1>
            </div>
            <button
              data-aos="zoom-in"
              className="px-10 py-4 rounded-xl border-2 border-black text-black font-semibold text-lg hover:bg-black hover:text-white"
            >
              BOOK ONLINE
            </button>
          </div>
        </div>
        <div data-aos="zoom-in" id="image-box" className="md:w-[50%] w-full">
          <img
            src={heroImg}
            alt="heroImg"
            className="rounded-xl w-full md:h-[700px] h-[500px]"
          />
        </div>
      </section>

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
          <h1 className="text-2xl text-black font-semibold">Regular Haircut</h1>
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
          <h1 className="text-2xl text-black font-semibold">Regular Haircut</h1>
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
          <h1 className="text-2xl text-black font-semibold">Regular Haircut</h1>
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
          <h1 className="text-2xl text-black font-semibold">Regular Haircut</h1>
          <button className="px-10 py-3 bg-black text-white text-md font-semibold rounded-xl hover:bg-themeyellow hover:text-black cursor-pointer">
            MORE
          </button>
        </div>
      </section>
    </>
  );
};

export default Hero;
