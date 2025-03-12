import React from "react";

const Navbar = () => {
  const navLinks = ["About us", "Services", "Use Cases", "Pricing", "Blog"];

  return (
    <nav className="flex justify-between items-center py-4 px-8 bg-white shadow-md">
      <h1 className="text-xl font-semibold ml-24">🚀 Positivus</h1>
      <ul className="flex space-x-6">
        {navLinks.map((link, index) => (
          <li key={index} className="cursor-pointer text-gray-700 hover:text-black p-4">
            {link}
          </li>
        ))}
      </ul>
      <button className="border px-4 py-2 rounded-lg text-gray-700 hover:bg-gray-100 mr-16">
        Request a quote
      </button>
    </nav>
  );
};

export default Navbar;
