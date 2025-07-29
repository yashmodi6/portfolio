import React from "react";
import ComputerScreen from "./components/ComputerScreen";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
const App = () => {
    return (
        <main className="absolute h-full w-full">
            <ComputerScreen />
            <Navbar />
<Hero/>
          
        </main>
    );
};

export default App;
