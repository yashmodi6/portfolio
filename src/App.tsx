import React from "react";
import ComputerScreen from "./components/ComputerScreen";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/About";
import Skills from "./components/Skills";
import Project from "./components/Project"
import Contact from "./components/Contact"
const App = () => {
    return (
        <main className="absolute h-full w-full">
            <ComputerScreen />
            <Navbar />
            <Hero />
            <div
                className="relative z-20 mt-[100vh] min-h-full w-full border-t-2 bg-blue-400/70 px-12 pt-36 pb-14  backdrop-blur-lg sm:px-16 md:px-20 lg:px-24 xl:px-28"
            >
                <About />
                <Skills />
                <Project/>
                <Contact/>
            
            </div>
        </main>
    );
};

export default App;
