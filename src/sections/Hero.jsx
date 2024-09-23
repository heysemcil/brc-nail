import React, { useEffect } from "react";
import heroImg from "../assets/images/hero.jpg";
import { FaLocationDot } from "react-icons/fa6";
import { MdOutlinePhoneAndroid } from "react-icons/md";
import { MdEmail } from "react-icons/md";
import AOS from "aos";
import "aos/dist/aos.css";
import ServiceDetails from "../components/ServiceDetails";

const Hero = () => {
  useEffect(() => {
    AOS.init({
      offset: 110,
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
            <span className="text-themeyellow">BRC</span> Manicure & Beauty{" "}
            <br />
            <hr className="h-px my-8 bg-gray-200 border-0 dark:bg-gray-700" />
            In Yonkers <br />
            NEWYORK
          </h1>
          <div
            data-aos="slide-up"
            id="icon-list"
            className="flex flex-col justify-center items-start gap-6"
          >
            <a
              target="_blank"
              href="https://www.google.com/maps/dir//330+Riverdale+Ave+Yonkers,+NY+10705+USA/@40.9214106,-73.9008928,14z/data=!4m8!4m7!1m0!1m5!1m1!1s0x89c2f26807b6bd65:0x4c691a94b14f9787!2m2!1d-73.9008928!2d40.9214106?entry=ttu"
            >
              <div
                id="icon-box"
                className="flex justify-center items-center gap-3"
              >
                <FaLocationDot className="text-black size-6" />
                <h1 className="text-xl text-gray-800 font-semibold ">
                  330 Riverdale Avenue, 10705 Yonkers
                </h1>
              </div>
            </a>

            <a href="tel:+19145089873">
              <div
                id="icon-box"
                className="flex justify-center items-center gap-3"
              >
                <MdOutlinePhoneAndroid className="text-black size-6" />
                <h1 className="text-xl text-gray-800 font-semibold ">
                  +1 914 508 9873
                </h1>
              </div>
            </a>
            <div
              id="icon-box"
              className="flex justify-center items-center gap-3"
            >
              <MdEmail className="text-black size-6" />
              <h1 className="text-xl text-gray-800 font-semibold ">
                Contact@brcnail.com
              </h1>
            </div>
            <button
              data-aos="zoom-in"
              className="px-10 py-4 rounded-xl border-2 border-black text-black font-semibold text-lg hover:bg-black hover:text-white"
              onClick={() => window.open("https://brcnail.simplybook.me/v2/#book", "_blank")}
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
      <ServiceDetails />
    </>
  );
};

export default Hero;
