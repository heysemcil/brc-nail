import React, { useState } from "react";
import { Link } from "react-scroll";
import { FaBars, FaXmark } from "react-icons/fa6";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const closeMenu = () => {
    setIsMenuOpen(false);
  };

  const navItems = [
    { link: "Home", path: "hero" },
    { link: "About", path: "about" },
    { link: "Pricing", path: "pricing" },
    { link: "Services", path: "services" },
    { link: "Testimonial", path: "testimonial" },
    { link: "Contact", path: "contact" },
  ];

  return (
    <nav className="flex justify-between items-center gap-4 bg-themeyellow lg:px-10 px-4 py-6 sticky top-0 z-30">
      <div id="logo">
        <h1 className="text-white font-bold text-5xl">
          BRC <span className="italic text-slate-900">Nail Studio</span>
        </h1>
      </div>
      <ul className="lg:flex justify-center items-center gap-6 hidden">
        {navItems.map((item) => (
          <Link
            key={item.path}
            className="text-white uppercase font-semibold cursor-pointer p-3 rounded-lg hover:bg-slate-900 hover:text-themeyellow"
            to={item.path}
            spy={true}
            offset={-100}
            smooth={true}
          >
            {item.link}
          </Link>
        ))}
      </ul>
      <div className="lg:hidden">
        <button onClick={toggleMenu} className="text-white text-3xl">
          {isMenuOpen ? <FaXmark /> : <FaBars />}
        </button>
      </div>
      {isMenuOpen && (
        <ul className="flex flex-col justify-center items-center gap-4 absolute top-full left-0 w-full bg-themeyellow p-6 lg:hidden">
          {navItems.map((item) => (
            <Link
              key={item.path}
              className="text-white uppercase font-semibold cursor-pointer p-3 rounded-lg hover:bg-slate-900 hover:text-themeyellow"
              to={item.path}
              spy={true}
              offset={-100}
              smooth={true}
              onClick={closeMenu}

            >
              {item.link}
            </Link>
          ))}
        </ul>
      )}
    </nav>
  );
};

export default Header;
