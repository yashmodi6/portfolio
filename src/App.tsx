import React from "react";
import ComputerScreen from "./components/ComputerScreen";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/About"
const App = () => {
    return (
        <main className="absolute h-full w-full">
            <ComputerScreen />
            <Navbar />
            <Hero />
            <About/>
        </main>
    );
};

export default App;
