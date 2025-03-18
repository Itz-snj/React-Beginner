import React, { useState } from "react";
import { FaBars, FaTimes } from "react-icons/fa"; // Icons for mobile menu

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const navLinks = ["About us", "Services", "Use Cases", "Pricing", "Blog"];

  return (
    <nav className="flex justify-between items-center py-4 px-6 lg:px-24 bg-white shadow-md">
      {/* Logo */}
      <h1 className="text-xl font-semibold">🚀 Positivus</h1>

      {/* Desktop Navigation */}
      <ul className="hidden lg:flex space-x-6">
        {navLinks.map((link, index) => (
          <li key={index} className="cursor-pointer text-gray-700 hover:text-black p-4">
            {link}
          </li>
        ))}
      </ul>

      {/* Request Button (Hidden on small screens) */}
      <button className="hidden lg:block border px-4 py-2 rounded-lg text-gray-700 hover:bg-gray-100">
        Request a quote
      </button>

      {/* Mobile Menu Icon */}
      <button
        className="lg:hidden text-gray-700"
        onClick={() => setIsOpen(!isOpen)}
      >
        {isOpen ? <FaTimes size={24} /> : <FaBars size={24} />}
      </button>

      {/* Mobile Dropdown Menu */}
      {isOpen && (
        <ul className="absolute top-16 left-0 w-full bg-white shadow-lg flex flex-col items-center space-y-4 py-6 lg:hidden">
          {navLinks.map((link, index) => (
            <li key={index} className="cursor-pointer text-gray-700 hover:text-black">
              {link}
            </li>
          ))}
          <button className="border px-4 py-2 rounded-lg text-gray-700 hover:bg-gray-100">
            Request a quote
          </button>
        </ul>
      )}
    </nav>
  );
};

export default Navbar;
