import React, { useState, useEffect } from "react";
import { FaBars, FaTimes } from "react-icons/fa";
import { Link } from "react-scroll";
import { auth } from '../firebase';
import { useNavigate } from 'react-router-dom';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [user, setUser] = useState(null);
  const navigate = useNavigate();

  const navLinks = [
    { name: "Home", path: "home" },
    { name: "Services", path: "services" },
    { name: "Working Process", path: "working-process" },
    { name: "Case Studies", path: "case-studies" },
    { name: "Team", path: "team" },
  ];

  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged((user) => {
      setUser(user);
    });
    return () => unsubscribe();
  }, []);

  const handleSignOut = async () => {
    try {
      await auth.signOut();
      navigate('/login');
    } catch (error) {
      console.error("Error signing out:", error);
    }
  };

  return (
    <nav className="flex justify-between items-center py-4 px-6 lg:px-24 bg-white shadow-md">
      <h1 className="text-xl font-semibold">🚀 Positivus</h1>
      
      {/* Desktop Navigation */}
      <ul className="hidden lg:flex space-x-6">
        {navLinks.map((link, index) => (
          <li key={index} className="cursor-pointer text-gray-700 hover:text-black p-4">
            <Link to={link.path} smooth={true} duration={500}>{link.name}</Link>
          </li>
        ))}
      </ul>
      
      <div className="navbar-auths">
        {user ? (
          <div className="flex justify-center items-center gap-2">
            <img 
              src={user.photoURL} 
              alt="Profile" 
              className="w-8 h-8 rounded-full"
            />
            <p className="text-nowrap text-xl font-medium">{user.displayName}</p>
            <button 
              onClick={handleSignOut} 
              className="btn-1 text-xl font-medium border-b-2 ml-2"
            >
              Logout
            </button>
          </div>
        ) : (
          <a href="/login" className="btn-1 text-xl font-medium border-b-2">Login</a>
        )}
      </div>
      
      {/* Mobile Menu Icon */}
      <button className="lg:hidden text-gray-700" onClick={() => setIsOpen(!isOpen)}>
        {isOpen ? <FaTimes size={24} /> : <FaBars size={24} />}
      </button>
      
      {/* Mobile Dropdown Menu */}
      {isOpen && (
        <ul className="absolute top-16 left-0 w-full bg-white shadow-lg flex flex-col items-center space-y-4 py-6 lg:hidden">
          {navLinks.map((link, index) => (
            <li key={index} className="cursor-pointer text-gray-700 hover:text-black">
              <Link to={link.path} smooth={true} duration={500} onClick={() => setIsOpen(false)}>{link.name}</Link>
            </li>
          ))}
          {user && (
            <li className="cursor-pointer text-gray-700 hover:text-black">
              <button onClick={handleSignOut}>Sign Out</button>
            </li>
          )}
        </ul>
      )}
    </nav>
  );
};

export default Navbar;