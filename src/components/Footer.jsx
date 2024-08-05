import React from "react";
import { FaYoutube } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import { FaArrowUp } from "react-icons/fa6";
import { Link } from "react-scroll";

const Footer = () => {
  const instagramURL = "https://www.instagram.com/russian_manicure19/";
  return (
    <>
      <section className="bg-slate-200 w-full md:px-20 px-10 md:py-20 py-10 flex flex-col justify-center items-center gap-6 border-[20px] border-themeyellow">
        <h1 className="text-black font-bold text-5xl">
          BRC <span className="italic text-themeyellow">Studio</span>
        </h1>
        <p className="text-lg text-center font-semibold text-slate-600">
          At Nail Studio, we are dedicated to providing top-notch nail care
          services in a relaxing and elegant environment. As a skilled
          professional, we are committed to delivering exceptional results that
          exceed your expectations. Whether you're here for a classic manicure
          or an elaborate nail art design, we strive to make every visit a
          delightful experience. Join us and indulge in the finest nail care
          treatments that leave you feeling pampered and polished.
        </p>
        <div id="icons" className="flex justify-center items-center gap-4">
          <a href="https://www.instagram.com/russian_manicure19/">
            <div
              id="icon-box"
              className="bg-[#a39446] p-4 rounded-full cursor-pointer hover:bg-black hover:text-white transform hover:scale-110 transition-transform duration-300"
            >
              <FaInstagram className="size-7 fill-white" />
            </div>
          </a>

          <div
            id="icon-box"
            className="bg-[#a39446] p-4 rounded-full cursor-pointer hover:bg-black hover:text-white transform hover:scale-110 transition-transform duration-300"
          >
            <FaYoutube className="size-7 fill-white" />
          </div>
          <div
            id="icon-box"
            className="bg-[#a39446] p-4 rounded-full cursor-pointer hover:bg-black hover:text-white transform hover:scale-110 transition-transform duration-300"
          >
            <FaTwitter className="size-7 fill-white" />
          </div>
        </div>
      </section>
      <div
        data-aos="slide-right"
        data-aos-delay="200"
        id="icon-box"
        className="bg-themeyellow p-4 rounded-full hover:text-white hover:bg-black cursor-pointer fixed lg:bottom-12 bottom-6 right-6 lg:right-6"
      >
        <Link to="hero" spy={true} offset={-100} smooth={true}>
          <FaArrowUp className="size-8" />
        </Link>
      </div>
      <div className="w-full flex flex-col bg-[#101318] text-white justify-center items-center text-center md:justify-center md:gap-28 px-20 py-5  ">
        <h1 className="italic mt-5">
          All rights reserved by <br />
        </h1>
        <span className="text-2xl mt-3 font-semibold">
          BRC Studio &copy;2024
        </span>
        <h1 className="mt-8 whitespace-nowrap overflow-hidden text-ellipsis text-[#55595E]">
          {" "}
          Designed by @
          <span className="text-[#DF9468] text-2xl font-serif font-semibold">
            Heysemcil
          </span>{" "}
        </h1>
      </div>
    </>
  );
};

export default Footer;
