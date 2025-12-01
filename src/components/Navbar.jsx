import React, {useState} from "react";
import {Menu, X} from "lucide-react";

const NavLink = ({ href, children }) => (
  <a 
    href={href} 
    className="relative text-gray-800 hover:text-blue-600 transition-colors font-medium 
    before:absolute before:-bottom-0.5 before:left-0 before:h-0.5 before:w-0 before:bg-blue-600 
    before:transition-all before:duration-300 hover:before:w-full"
  >
    {children}
  </a>
)

export default function Navbar() {
    const [isOpen, setIsOpen] = useState(false);

    return (
      <header className="sticky top-0 bg-gray-50 backdrop-blur z-30 shadow-sm">
        <div className="max-w-6xl mx-auto px-6 py-4 flex items-center justify-between">
          <a 
           href="#home" 
            className="text-3xl font-bold bg-linear-to-r from-blue-400 to-purple-600 bg-clip-text text-transparent cursor-pointer"
            > 
             FJC
          </a>

        <nav className="space-x-8 hidden md:flex">
          <NavLink href="#home">Home</NavLink>
          <NavLink href="#about">About</NavLink>
          <NavLink href="#services">Services</NavLink>
          <NavLink href="#projects">Projects</NavLink>
          <NavLink href="#skills">Skills</NavLink>
          <NavLink href="#contact">Contact</NavLink>
        </nav>

        <div className="md:hidden">
          <button
            onClick={() => setIsOpen (!isOpen)}
            className="focus:outline-none text-blue-600 cursor-pointer"
          >
            {isOpen ? <X size={28} /> : <Menu size={28} />}
            </button>
          </div>
        </div>

        <nav className={`md:hidden absolute p-2 w-full bg-white shadow-lg transition-all duration-300 overflow-hidden ${
          isOpen ? "max-h-96 opacity-100" : "max-h-0 opacity-0"
        }`}
        >
          <div className="flex flex-col space-y-3 px-6 py-4">
              {["Home","About","Services","Projects","Skills","Contact"].map(
              (item) => (
                <a
                  key={item}
                  href={`#${item.toLowerCase()}`}
                  className="px-4 py-2 rounded hover:bg-blue-100 transition-colors font-medium text-gray-800"
                  onClick={() => setIsOpen(false)}
                >
                  {item}
                </a>
               ))}
            </div>
          </nav>
      </header>
  );
}