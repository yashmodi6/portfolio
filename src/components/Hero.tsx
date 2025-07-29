import React from "react";

import gridBg from "../assets/images/gridBg.webp";
import mouseIcon from "../assets/images/mouseIcon.svg";
import arrowsIcon from "../assets/images/arrowsIcon.svg";
import avatar from "../assets/images/avatar.webp";
import useMovingElement from "../hooks/useMovingElement";



const Hero: React.FC = () => {
    useMovingElement("movingElement");

    return (
        <section
            className="fixed z-0 h-screen w-full bg-blue-300 bg-cover bg-center"
            style={{ backgroundImage: `url(${gridBg})` }}
        >
            {/* 🟦 Gradient Overlay */}
            <div className="gradient-overlayer pointer-events-none h-full w-full" />

            {/* 🟨 Text Block Container */}
            <div className="absolute top-0 z-20 flex h-full w-full items-center justify-center px-4 pt-10 sm:px-16 md:px-20 lg:px-24 xl:px-28">
                <div className="mt-4 flex h-[83vh] w-full select-none flex-col justify-between gap-0 text-[14.8vw] font-bold leading-none text-white sm:text-[14vw] md:justify-center md:gap-8 md:text-[5.4vw] lg:text-[6vw] 2xl:items-center 2xl:justify-around">
                    {[1, 2, 3, 4, 5].map(row => (
                        <div
                            key={row}
                            className="flex flex-col items-center justify-between md:flex-row 2xl:space-x-72"
                        >
                            <span
                                id={`text-${row * 2 - 1}`}
                                className="text-strok"
                            >
                                Full-Stack
                            </span>
                            <span id={`text-${row * 2}`} className="text-strok">
                                Developer
                            </span>
                        </div>
                    ))}
                </div>
            </div>

            {/* 🟥 Picture Frame */}
            <div className="absolute inset-0 z-20 mx-auto flex h-full w-fit items-center justify-center pt-16">
                <div
                    id="pic-main"
                    className="group h-[74vh] w-44 flex-shrink-0 overflow-hidden rounded-lg bg-white/20 backdrop-blur-sm transition-all duration-500 hover:bg-sky-950/70"
                >
                    {/* 🖱 Mouse Icon */}
                    <img
                        src={mouseIcon}
                        alt="Mouse Icon"
                        className="absolute inset-0 mx-auto mt-8"
                    />

                    {/* ⬇️ Arrows Icon with bounce animation */}
                    <img
                        src={arrowsIcon}
                        alt="Arrows Icon"
                        className="absolute inset-0 mx-auto mt-24 animate-bounce"
                    />

                    {/* 🧍‍♂️ Vertical Name */}
                    <div
                        className="absolute left-1/2 top-[41%] w-fit -translate-x-1/2 -translate-y-1/2 transform select-none font-mono font-semibold tracking-[.4rem] text-transparent transition-all duration-500 ease-out group-hover:text-white"
                        style={{
                            writingMode: "vertical-rl",
                            textOrientation: "upright"
                        }}
                    >
                      YASH
                    </div>

                    {/* 🧑 Avatar */}
                    <img
                        id="movingElement"
                        src={avatar}
                        alt="Avatar"
                        className="absolute bottom-0"
                    />
                </div>
            </div>
        </section>
    );
};

export default Hero;
