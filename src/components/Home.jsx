import React from 'react';
import {Mail, Download} from "lucide-react";

export default function Home() {
    return (
        <section id="home" className='min-h-screen grid place-items-center bg-gradient-to-b from-white to-slate-50'>
            <div className='max-w-4xl text-center px-6 py-20'>
                <p className='text-xl'>Hi, I'm</p>
                <h1 className='text-4xl md:text-6xl font-extrabold bg-gradient-to-r from-blue-400 to-purple-600 bg-clip-text text-transparent mb-4'>Felix Joseph U. Castaneda</h1>
                <p className='text-xl md:text-xl text-slate-600 mb-6 font-medium'>Aspiring IT Professional | BSIT Student</p>
                <p className="text-lg mb-6 text-slate-600">
                    Building Modern Web Solutions Through Innovation & Learning.
                    4th year BSIT student passionate about creating innovative web applications using modern technologies.
                </p>

                <div className="flex flex-col sm:flex-row gap-3 justify-center">
               
                    <a
                        href="#contact"
                        className="inline-flex items-center justify-center px-6 py-3 bg-gradient-to-r from-blue-400 to-purple-600 text-white rounded-md font-medium transition-all duration-300 ease-in-out transform hover:shadow-xl hover:-translate-y-1 group"
                        >
                        <Mail className="w-5 h-5 mr-2 transition-all duration-300 ease-in-out group-hover:-translate-y-0.5" />
                        Get in touch
                    </a>


             
                     <a
                        href="/resume.pdf"
                        download
                        className="inline-flex items-center justify-center px-6 py-3 border border-slate-200 rounded-md font-medium text-gray-800 transition-all duration-300 group hover:bg-white hover:border-gray-400"
                    >
                        <Download className="w-5 h-5 mr-2 transition-transform duration-400 group-hover:animate-bounce" />
                        Download Resume
                    </a>
                    </div>

            </div>
        </section>
    )
}
