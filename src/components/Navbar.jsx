import React, {useState} from "react";
import {Menu, X} from "lucide-react";

const NavLink = ({ href, children }) => (
  <a href={href} className="text-gray-800 hover:text-blue-600 transition-colors font-medium">
    {children}
  </a>
)

export default function Navbar() {
    const [isOpen, setIsOpen] = useState(false);

    return (
      <header className="sticky top-0 bg-gray-50 backdrop-blur z-30 shadow-sm">
        <div className="max-w-6xl mx-auto px-6 py-4 flex items-center justify-between">
          <a href="#home" className="text-3xl font-bold bg-gradient-to-r from-blue-400 to-purple-600 bg-clip-text text-transparent cursor-pointer">FJC</a>

        <nav className="space-x-8 hidden md:flex">
          <NavLink href="#home">Home</NavLink>
          <NavLink href="#about">About</NavLink>
          <NavLink href="#services">Services</NavLink>
          <NavLink href="#projects">Projects</NavLink>
          <NavLink href="#skills">Skills</NavLink>
          <NavLink href="#contact">Contact</NavLink>
        </nav>

        <div className="md:hidden flex items-center">
          <button
            onClick={() => setIsOpen (!isOpen)}
            className="text-gray-800 focus:outline-none hover hover:text-blue-600 cursor-pointer"
          >
            {isOpen ? <X size={28} /> : <Menu size={28} />}
            </button>
          </div>
        </div>

        {isOpen && (
          <nav className="md:hidden bg-white shadow-lg">
            <div className="flex flex-col space-y-3 px-6 py-4">
               {["Home","About","Services","Projects","Skills","Contact"].map((item) => (
            <a
                key={item}
                href={`#${item.toLowerCase()}`}
                className="px-4 py-2 rounded hover:bg-blue-100 transition-colors font-medium text-gray-800"
              >
                  {item}
                </a>
               ))}
            </div>
          </nav>
        )}

      </header>
  );
}