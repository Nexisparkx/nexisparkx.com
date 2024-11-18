import React, { useState } from "react";
import { FaInstagram, FaLinkedin } from 'react-icons/fa'; // Import React Icons
import { Navigate, Outlet, useNavigate } from "react-router-dom";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const navigate = useNavigate();


  // Toggle menu state
  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  // Scroll to Footer
  const handleScrollToFooter = () => {
    const footerElement = document.getElementById("footer");
    if (footerElement) {
      footerElement.scrollIntoView({ behavior: "smooth" });
      setIsMenuOpen(false); // Close mobile menu if it's open
    }
  };

  return (
    <div className="bg-gray-950 text-white shadow-lg">
      <nav className="p-4 shadow-sm">
        <div className="flex items-center justify-between ">
          {/* Logo */}
          <div className="ml-4 text-3xl md:text-4xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-green-500 to-teal-400">
            NexisparX
          </div>

          {/* Desktop Menu */}
          <ul className="hidden md:flex space-x-6 lg:space-x-9">
            <li
              className="cursor-pointer bg-clip-text text-xl lg:text-2xl text-transparent bg-gradient-to-r from-green-500 to-teal-400 hover:text-teal-300 transition"
              onClick={handleScrollToFooter}
            >
              Contact Us
            </li>
            <li className="cursor-pointer bg-clip-text text-xl lg:text-2xl text-transparent bg-gradient-to-r from-green-500 to-teal-400 hover:text-teal-300 transition" onClick={()=>{navigate("/registration")}}>
              Register
            </li>
            <li className="cursor-pointer bg-clip-text text-xl lg:text-2xl text-transparent bg-gradient-to-r from-green-500 to-teal-400 hover:text-teal-300 transition" onClick={()=>{navigate("/courses")}}>
              Courses
            </li>
            <li className="cursor-pointer bg-clip-text text-xl lg:text-2xl text-transparent bg-gradient-to-r from-green-500 to-teal-400 hover:text-teal-300 transition" onClick={()=>{navigate("/feedback")}}>
              FeedBack
            </li>
          </ul>

          {/* Mobile Menu Button */}
          <div className="flex md:hidden ml-auto">
            <button
              onClick={toggleMenu}
              className="text-white focus:outline-none transition-transform transform hover:scale-110"
            >
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
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        <div
          className={`md:hidden transition-all duration-300 ease-in-out ${isMenuOpen ? "max-h-40 opacity-100" : "max-h-0 opacity-0"
            } overflow-hidden`}
        >
          <ul className="flex flex-col items-center gap-3 mt-4">
            <li
              className="cursor-pointer bg-clip-text text-lg md:text-xl text-transparent bg-gradient-to-r from-green-500 to-teal-400 hover:text-teal-300 transition"
              onClick={handleScrollToFooter}
            >
              Contact Us
            </li>
            <li className="cursor-pointer bg-clip-text text-lg md:text-xl text-transparent bg-gradient-to-r from-green-500 to-teal-400 hover:text-teal-300 transition">
              Register
            </li>
            <li className="cursor-pointer bg-clip-text text-lg md:text-xl text-transparent bg-gradient-to-r from-green-500 to-teal-400 hover:text-teal-300 transition">
              Courses
            </li>
            <li className="cursor-pointer bg-clip-text text-lg md:text-xl text-transparent bg-gradient-to-r from-green-500 to-teal-400 hover:text-teal-300 transition">
              Feedback
            </li>
          </ul>
        </div>
      </nav>
      <Outlet></Outlet>
    </div>
  );
};

export default Navbar;
