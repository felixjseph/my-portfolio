import React from 'react';
import FelixImg from "../images/Felix.jpg";

export default function About() {
  return (
    <section
      id="about"
      className="py-24 bg-linear-to-b from-purple-200 via-orange-100 to-red-50"
    >
      <div className="text-center">
        <h1 className="relative bottom-8 text-5xl md:text-6xl bg-linear-to-r from-red-500 to-yellow-400 bg-clip-text text-transparent font-extrabold mb-3">
          About Me
        </h1>
        <div className="relative bottom-9 w-24 h-1 bg-orange-400 mx-auto mt-4 mb-6 md:mb-18 rounded-full"></div>
      </div>

      <div className="max-w-6xl mx-auto px-6 grid md:grid-cols-[1fr_1.7fr] gap-16 items-center">
        <div className="flex justify-center">
          <div className="relative w-74 h-84 md:w-90 md:h-110 rounded-2xl overflow-hidden shadow-xl">
            <img
              src={FelixImg}
              alt="Your Portrait"
              className="w-full h-full object-cover transition-transform duration-500 hover:scale-105"
            />
          </div>
        </div>

        <div className="w-full text-center md:text-left">
          <h3 className="font-semibold mb-2 text-xl md:text-2xl">Passionate About Technology</h3>

          <p className="font-inter text-sm md:text-lg text-slate-600 leading-relaxed">
            As a 4th year BSIT student, I combine academic excellence with practical 
            development experience. I focus on functional, user-first applications and 
            continuous growth in modern web development.
          </p>
        </div>
      </div>
    </section>
  );
}
