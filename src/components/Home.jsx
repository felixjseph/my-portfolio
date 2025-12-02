import React from 'react';
import {Mail, Download, Github, Linkedin} from "lucide-react";
import { ChevronDown } from 'lucide-react';

export default function Home() {
    return (
        <section id="home" className='min-h-screen grid place-items-center bg-linear-to-b from-white via-blue-50/40 to-purple-200'>
            <div className='max-w-4xl text-center px-6 py-20'>
                <p className='text-xl'>Hi, I'm</p>
                <h1 className='text-4xl md:text-6xl font-extrabold bg-linear-to-r from-blue-400 to-purple-600 bg-clip-text text-transparent mb-4'>Felix Joseph U. Castaneda</h1>
                <p className='text-md md:text-xl text-slate-600 mb-6 font-medium'>Aspiring IT Professional | BSIT Student</p>
                <p className="text-sm md:text-xl mb-12 text-slate-600">
                    Passionate about  
                    <span className="bg-linear-to-r from-blue-400 to-purple-600 bg-clip-text text-transparent font-semibold ml-1 mr-1">
                        solving real-world problems
                    </span>  
                    and  
                    <span className="bg-linear-to-r from-red-500 to-orange-400 bg-clip-text text-transparent font-semibold ml-1 mr-1">
                        creating innovative solutions
                    </span> 
                    using modern technologies. Dedicated to continuous learning and delivering
                    <span className="bg-linear-to-r from-purple-400 to-blue-600 bg-clip-text text-transparent font-semibold ml-1 mr-1">
                        high-quality solutions
                    </span>  
                    and  
                    <span className="bg-linear-to-r from-orange-500 to-red-400 bg-clip-text text-transparent font-semibold ml-1 mr-1">
                        meaningful product value.
                    </span> 
                </p>


                <div className="flex flex-col sm:flex-row gap-3 justify-center">
                    <div className="flex flex-col sm:flex-row gap-3 justify-center items-center">
                        <a
                            href="#contact"
                            className="w-48 sm:w-auto inline-flex items-center justify-center px-6 py-3 bg-linear-to-r from-blue-400 to-purple-600 text-white rounded-md font-medium transition-all duration-300 ease-in-out transform hover:shadow-xl hover:-translate-y-1 group"
                        >
                            <Mail className="w-5 h-5 mr-2 transition-all duration-300 ease-in-out group-hover:-translate-y-0.5" />
                            Get in touch
                        </a>

                        <a
                            href="/resume.pdf"
                            download
                            className="w-48 sm:w-auto inline-flex items-center justify-center px-6 py-3 border border-slate-300 rounded-md font-medium text-gray-800 transition-all duration-300 group hover:bg-white hover:border-gray-200"
                        >
                            <Download className="w-5 h-5 mr-2 transition-transform duration-400 group-hover:animate-bounce" />
                            Download CV
                        </a>
                    </div>

                    </div>

                    <div className="flex justify-center gap-6 mt-14">
                    <a 
                        href="https://github.com/felixjseph"
                        target="_blank" 
                        className="text-blue-600 hover:scale-110 transition-colors"
                    >
                        <Github className="w-7 h-7" />
                    </a>

                    <a 
                        href="https://www.linkedin.com/in/felixjseph/" 
                        target="_blank"
                        className="text-blue-600 hover:scale-110 transition-colors"
                    >
                        <Linkedin className="w-7 h-7" />
                    </a>

                    <a 
                        href=""
                        className="text-blue-600  hover:scale-110 transition-colors"
                    >
                        <Mail className="w-7 h-7" />
                    </a>
                </div>

                <div className='mt-10 flex justify-center relative top-10'>
                    <a
                    href="#about"
                    className='animate-bounce text-blue-600 hover-scale-110 transition transform'
                    >
                        <ChevronDown className='w-6 h-6'/>
                    </a>
                </div>
            </div>

            
        </section>
    )
}
