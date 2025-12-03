import React from 'react';
import { ExternalLink } from 'lucide-react';
import StartupSphereImg from '../images/StartupSphere.png';
import CineCityImg from '../images/Cinecity.png';
import PachImg from '../images/Pach.png';

export default function Projects() {
  return (
    <section id="projects" className="py-20 bg-linear-to-b from-red-50 to-white">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-20">
          <h1 className="text-6xl bg-linear-to-r from-black to-purple-600 bg-clip-text text-transparent font-extrabold">
            Featured Projects
          </h1>
          <div className="w-24 h-1 bg-purple-900 mx-auto mt-4 mb-10 rounded-full"></div>
        </div>
        
        {/* StartUpSphere */}
        <article className="p-4 flex flex-col md:flex-row items-center mb-28 rounded overflow-hidden gap-6 md:gap-16">
          
          <div className="relative md:w-1/2 overflow-hidden rounded-xl group">
            <img
              src={StartupSphereImg}
              alt="StartupSphere"
              className="w-full h-full object-cover transition-transform duration-500 transform group-hover:scale-105"
            />

            {/* Button */}
            <a
              href="https://startupsphere-azure.vercel.app/" 
              target="_blank"
              rel="noopener noreferrer"
              style={{fontFamily: 'Inter'}}
              className="text-xs absolute bottom-3 right-4 px-4 py-2 bg-linear-to-r from-blue-400 to-purple-600 text-white rounded-3xl opacity-0 group-hover:opacity-100 transition-all duration-300 inline-flex items-center gap-1"
            >
              Live
              <ExternalLink className="w-4 h-4" />
            </a>
          </div>

          <div className="md:w-1/2 p-6 flex flex-col text-center md:text-left">
            <h2 className="font-semibold text-2xl mb-2">StartUpSphere</h2>
            <p className="text-md text-slate-600 flex-1">
              A comprehensive platform for mapping and visualizing startup ecosystems. Features
              interactive network graphs, stakeholder analysis, and real-time collaboration tools
              for tracking startup communities and their connections.
            </p>
            <div className="text-md text-slate-500 mt-4 flex gap-3 justify-center md:justify-start">
              <span>React</span>
              <span>TailwindCSS</span>
              <span>Node.js</span>
            </div>

          </div>
        </article>



        {/* CineCity */}
        <article className="p-4 flex flex-col md:flex-row-reverse items-center mb-28 rounded overflow-hidden gap-6 md:gap-16">

          <div className="relative md:w-1/2 overflow-hidden rounded-xl group">
            <img
            src={CineCityImg}
            alt="CineCity"
            className="w-full h-full object-cover transition-transform duration-500 transform group-hover:scale-105"
          />
          </div>
          
          <div className="md:w-1/2 p-6 flex flex-col text-center md:text-left">
            <h3 className="font-semibold text-2xl mb-2">CineCity</h3>
            <p className="text-md text-slate-600 flex-1">
              A comprehensive movie booking platform with seat selection, payment integration, and user
              management. Built as a capstone project demonstrating full-stack development capabilities.
            </p>

            <div className="text-md text-slate-500 mt-4 flex flex-wrap gap-2 gap-y-0 justify-center md:justify-start">
              <span className="inline-block">React</span>
              <span className="inline-block">Spring Boot</span>
              <span className="inline-block">Tailwind CSS</span>
              <span className="inline-block">MySQL</span>
              <span className="inline-block">Android Studio</span>
            </div>

        
          </div>
        </article>

         {/* Pach Drugmart */}
        <article className="p-4 flex flex-col md:flex-row items-center mb-28 rounded overflow-hidden gap-6 md:gap-16">

          <div className="relative md:w-1/2 overflow-hidden rounded-xl group">
            <img
            src={PachImg}
            alt="Pach"
            className="w-full h-full object-cover transition-transform duration-500 transform group-hover:scale-105"
            />
          </div>
          

          <div className="md:w-1/2 p-6 flex flex-col text-center md:text-left">
            <h3 className="font-semibold text-2xl mb-2">Pach Drugmart</h3>
              <p className="text-md text-slate-600 flex-1">
                Comprehensive pharmacy management system for inventory control, prescription processing,
                and sales tracking. Features include medicine stock management, customer records, and
                automated billing system.
              </p>
              
            <div className="text-md text-slate-500 mt-4 flex flex-wrap gap-2 gap-y-0 justify-center md:justify-start">
              <span className="inline-block">React</span>
              <span className="inline-block">Spring Boot</span>
              <span className="inline-block">Tailwind CSS</span>
              <span className="inline-block">MySQL</span>
            </div>
          </div>
        </article>
      </div>
    </section>
  );
}
