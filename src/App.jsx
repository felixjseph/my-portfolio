import React from "react"
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import Home from './components/Home'
import About from './components/About'
import Services from "./components/Services"
import Projects from "./components/Projects"
import Education from "./components/Education"

export default function App() {
  
   return (
    <div className="min-h-screen flex flex-col">
        <Navbar />
          <main className="flex-1">
            <Home />
            <About />
            <Projects />
          </main>
    </div>
  );
}
