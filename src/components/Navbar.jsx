import React, { useState } from 'react';

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      <nav className="fixed top-0 w-full bg-gray-900 text-white py-4">
        <div className="flex items-center justify-between px-4">
          <h1 className="text-2xl font-bold">FlowareApps</h1>
            <button
              className="text-white focus:outline-none md:hidden"
              onClick={() => setIsOpen(!isOpen)} >
              <svg
                className="w-6 h-6"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg" >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d={isOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16M4 18h16"} />
                </svg>
            </button>
          <ul className="hidden md:flex space-x-8">
            <li><a href="#home" className="hover:text-yellow-300">Home</a></li>
            <li><a href="#about" className="hover:text-yellow-300">About</a></li>
            <li><a href="#projects" className="hover:text-yellow-300">Projects</a></li>
            <li><a href="#contact" className="hover:text-yellow-300">Contact</a></li>
          </ul>
      </div>
      {isOpen && (
        <ul className="flex flex-col space-y-4 mt-4 md:hidden bg-gray-800 p-4">
          <li><a href="#home" className="block hover:text-yellow-300" onClick={() => setIsOpen(false)}>Home</a></li>
          <li><a href="#about" className="block hover:text-yellow-300" onClick={() => setIsOpen(false)}>About</a></li>
          <li><a href="#projects" className="block hover:text-yellow-300" onClick={() => setIsOpen(false)}>Projects</a></li>
          <li><a href="#contact" className="block hover:text-yellow-300" onClick={() => setIsOpen(false)}>Contact</a></li>
        </ul>
      )}
      </nav>
    </>
  )
}

export default Navbar
