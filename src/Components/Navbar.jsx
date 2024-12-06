import React from 'react';
import { IoLocationOutline } from "react-icons/io5";
import { IoMdPhonePortrait } from "react-icons/io";
import { CiFacebook, CiTwitter } from "react-icons/ci";
import { BsInstagram } from "react-icons/bs";
import { FaLinkedinIn } from "react-icons/fa";
import Logo from "../../src/assets/logo.png";

const Navbar = () => {
  return (
    <>
      {/* Top Bar */}
      <div className="flex justify-between items-center bg-[#4a0c47] text-white h-12 px-10">
        <div className="flex items-center gap-10">
          <div className="flex items-center">
            <IoLocationOutline className="mr-2" />
            <a
              href="mailto:info@skstechsolution.com"
              className="text-sm"
            >
              info@skstechsolution.com
            </a>
          </div>
          <div className="flex items-center">
            <IoMdPhonePortrait className="mr-2" />
            <a href="tel:+13023293535" className="text-sm">
              +1 (302) 329-3535
            </a>
          </div>
        </div>
        <div className="flex gap-4">
          <a
            href="https://www.facebook.com"
            className="text-white text-lg"
            target="_blank"
            rel="noopener noreferrer"
          >
            <CiFacebook />
          </a>
          <a
            href="https://x.com"
            className="text-white text-lg"
            target="_blank"
            rel="noopener noreferrer"
          >
            <CiTwitter />
          </a>
          <a
            href="https://www.instagram.com"
            className="text-white text-lg"
            target="_blank"
            rel="noopener noreferrer"
          >
            <BsInstagram />
          </a>
          <a
            href="https://www.linkedin.com"
            className="text-white text-lg"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaLinkedinIn />
          </a>
        </div>
      </div>

      {/* Logo and Navigation */}
      <nav className="flex items-center justify-between h-20  px-10">
        {/* Logo Section */}
        <div className="flex items-center">
          <img src={Logo} alt="logo" className="h-16 ml-24" />
         
        </div>

        
        <ul className="flex gap-8 text-sm font-semibold">
          <li className="hover:text-[#4a0c47]">
            <a href="/">Home</a>
          </li>
          <li className="hover:text-[#4a0c47]">
            <a href="/about">About Us</a>
          </li>
          <li className="hover:text-[#4a0c47]">
            <a href="#portfolio">Portfolio</a>
          </li>
          <li className="hover:text-[#4a0c47]">
            <a href="#services">Services</a>
          </li>
          <li className="hover:text-[#4a0c47]">
            <a href="#white-label">White-Label Solutions</a>
          </li>
          <li className="hover:text-[#4a0c47]">
            <a href="#packages">Our Packages</a>
          </li>
          <li className="hover:text-[#4a0c47]">
            <a href="#testimonials">Testimonial</a>
          </li>
          <li className="hover:text-[#4a0c47]">
            <a href="#blog">Blog</a>
          </li>
          <li className="hover:text-[#4a0c47]">
            <a href="#contact">Contact Us</a>
          </li>
        </ul>
      </nav>
    </>
  );
};

export default Navbar;
