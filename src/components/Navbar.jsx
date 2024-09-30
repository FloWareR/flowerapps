import React, { useState } from 'react';

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="fixed top-0 w-full bg-gray-800 text-white py-4">
      <div className="flex items-center justify-between px-4">
        <h1 className="text-2xl font-bold">
          <img className='max-w-[120px]' src='./icons/flowarelogo-white.webp' alt="Logo" />
        </h1>
        <button
          className="text-white focus:outline-none md:hidden"
          onClick={() => setIsOpen(!isOpen)}
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
              d={isOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16M4 18h16"}
            />
          </svg>
        </button>
        <ul className="hidden md:flex space-x-8">
          <li><a href="#home" className="hover:text-blue-400 transition-colors">Home</a></li>
          <li><a href="#about" className="hover:text-blue-400 transition-colors">About</a></li>
          <li><a href="#projects" className="hover:text-blue-400 transition-colors">Projects</a></li>
          <li><a href="#contact" className="hover:text-blue-400 transition-colors">Contact</a></li>
        </ul>
      </div>
      {isOpen && (
        <ul className="flex flex-col space-y-4 mt-4 md:hidden bg-gray-900 p-4">
          <li><a href="#home" className="block hover:text-blue-400 transition-colors" onClick={() => setIsOpen(false)}>Home</a></li>
          <li><a href="#about" className="block hover:text-blue-400 transition-colors" onClick={() => setIsOpen(false)}>About</a></li>
          <li><a href="#projects" className="block hover:text-blue-400 transition-colors" onClick={() => setIsOpen(false)}>Projects</a></li>
          <li><a href="#contact" className="block hover:text-blue-400 transition-colors" onClick={() => setIsOpen(false)}>Contact</a></li>
        </ul>
      )}
    </nav>
  );
}

export default Navbar;
