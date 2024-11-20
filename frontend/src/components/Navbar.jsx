import React, { useState, useEffect } from "react";
import { FaInstagram, FaLinkedin } from 'react-icons/fa';
import { Navigate, useNavigate } from "react-router-dom";
import { MdCancelPresentation } from "react-icons/md";
import { FaHome } from "react-icons/fa";
import { RiContactsFill } from "react-icons/ri";
import { FaBook } from "react-icons/fa6";
import { RiFeedbackLine } from "react-icons/ri";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isNavbarVisible, setIsNavbarVisible] = useState(true);
  const [lastScrollPosition, setLastScrollPosition] = useState(0);
  const navigate = useNavigate();

  // Toggle menu state
  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  // Handle scroll behavior
  useEffect(() => {
    const handleScroll = () => {
      const currentScrollPosition = window.scrollY;
      setIsMenuOpen(false)
      if (currentScrollPosition > lastScrollPosition && currentScrollPosition > 100) {
        // Hide navbar when scrolling down
        setIsNavbarVisible(false);
      } else {
        // Show navbar when scrolling up
        setIsNavbarVisible(true);
      }
      setLastScrollPosition(currentScrollPosition);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [lastScrollPosition]);

  // Scroll to Footer
  const handleScrollToFooter = () => {
    const footerElement = document.getElementById("footer");
    if (footerElement) {
      footerElement.scrollIntoView({ behavior: "smooth" });
      setIsMenuOpen(false);
    }
  };

  return (
    <div
      className={`bg-gray-950 text-white shadow-lg fixed top-0 left-0 w-full z-50 transition-transform duration-500 ${
        isNavbarVisible ? "translate-y-0" : "-translate-y-full"
      }`}
    >
      <nav className="p-4 shadow-sm">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <div className="ml-4 text-3xl md:text-4xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-green-500 to-teal-400">
            NexisparkX
          </div>

          {/* Desktop Menu */}
          <ul className="hidden md:flex space-x-6 lg:space-x-9">
            <li
              className="cursor-pointer bg-clip-text text-xl lg:text-2xl text-transparent bg-gradient-to-r from-green-500 to-teal-400 hover:text-teal-300 transition"
              onClick={() => navigate("/")}
            >
              Home
            </li>
            <li
              className="cursor-pointer bg-clip-text text-xl lg:text-2xl text-transparent bg-gradient-to-r from-green-500 to-teal-400 hover:text-teal-300 transition"
              onClick={handleScrollToFooter}
            >
              Contact Us
            </li>
            <li
              className="cursor-pointer bg-clip-text text-xl lg:text-2xl text-transparent bg-gradient-to-r from-green-500 to-teal-400 hover:text-teal-300 transition"
              onClick={() => navigate("/courses")}
            >
              Courses
            </li>
            <li
              className="cursor-pointer bg-clip-text text-xl lg:text-2xl text-transparent bg-gradient-to-r from-green-500 to-teal-400 hover:text-teal-300 transition"
              onClick={() => navigate("/feedback")}
            >
              Feedback
            </li>
          </ul>

          {/* Mobile Menu Button */}
          <div className="flex md:hidden ml-auto">
            <button
              onClick={toggleMenu}
              className="text-white focus:outline-none transition-transform transform hover:scale-110"
            >
              {!isMenuOpen ? (
                <svg
                  className="w-6 h-6"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M4 6h16M4 12h16M4 18h16"
                  ></path>
                </svg>
              ) : (
                <MdCancelPresentation className="w-6 h-6" />
              )}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        <div 
     
          className={`md:hidden transition-all w-full duration-300 ease-in-out ${
            isMenuOpen ? "max-h-96 z-30 absolute top-[66px] bg-black opacity-100 w-full left-0 " : "max-h-0 opacity-0 z-30 absolute w-full"
          } overflow-hidden`}
        >
          <ul className="flex flex-col items-start gap-3 mt-4">
            <div className="flex items-center ml-[33%]">
              <FaHome className="h-8" />
              <li
                className="cursor-pointer m-4 bg-clip-text text-lg md:text-xl text-transparent bg-gradient-to-r from-green-500 to-teal-400 hover:text-teal-300 transition"
                onClick={() => {
                  navigate("/");
                  setIsMenuOpen(false);
                }}
              >
                Home
              </li>
            </div>

            <div className="flex items-center ml-[33%]">
              <RiContactsFill className="h-8" />
              <li
                className="cursor-pointer m-4 bg-clip-text text-lg md:text-xl text-transparent bg-gradient-to-r from-green-500 to-teal-400 hover:text-teal-300 transition"
                onClick={handleScrollToFooter}
              >
                Contact Us
              </li>
            </div>

            <div className="flex items-center ml-[33%]">
              <FaBook className="h-4" />
              <li
                className="cursor-pointer m-4 bg-clip-text text-lg md:text-xl text-transparent bg-gradient-to-r from-green-500 to-teal-400 hover:text-teal-300 transition"
                onClick={() => {
                  navigate("/courses");
                  setIsMenuOpen(false);
                }}
              >
                Courses
              </li>
            </div>

            <div className="flex items-center ml-[33%]">
              <RiFeedbackLine className="h-10" />
              <li
                className="cursor-pointer m-4 bg-clip-text text-lg md:text-xl text-transparent bg-gradient-to-r from-green-500 to-teal-400 hover:text-teal-300 transition"
                onClick={() => {
                  navigate("/feedback");
                  setIsMenuOpen(false);
                }}
              >
                Feedback
              </li>
            </div>
          </ul>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
