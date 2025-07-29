import React from "react";
import ComputerScreen from "./components/ComputerScreen";
import Navbar from "./components/Navbar";
const App = () => {
    return (
        <main className="absolute h-full w-full">
            <ComputerScreen />
            <Navbar />

          
        </main>
    );
};

export default App;
