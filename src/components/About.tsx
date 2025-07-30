import React from "react";
import CoderCard from "./ui/CoderCard";

// Import images as modules
import ground from "../assets/images/ground.png";
import cloud from "../assets/images/cloud.png";
import dino from "../assets/images/dino_run_1.png";
import cactus1 from "../assets/images/cactus_1.png";
import cactus2 from "../assets/images/cactus_2.png";

const About: React.FC = () => {
    return (
        <main
            id="about"
            className="relative z-20 mt-[100vh] min-h-full w-full border-t-2 bg-blue-400/70 px-12 pt-36 pb-14 backdrop-blur-lg sm:px-16 md:px-20 lg:px-24 xl:px-28"
        >
            {/* About */}
            <div className="fadeIn grid h-fit w-full grid-cols-1 gap-4 rounded-lg md:grid-cols-12">
                {/* column 1 */}
                <div className="relative col-span-1 h-full w-full rounded-lg border border-blue-300 md:col-span-7">
                    <div className="mb-10 w-full p-4 leading-loose tracking-[0.08rem] text-white lg:mb-0">
                        <h1 className="text-3xl font-bold">ABOUT ME</h1>
                        <hr className="my-4 h-px border-0 bg-blue-300" />
                        <p className="text-pretty tracking-wider">
                            Hi, I'm <b>Yash</b>! 👋
                            <br />
                            I’m a 17-year-old self-taught full-stack developer
                            based in India. With a year of experience as a
                            graphic designer, I’ve developed a sharp eye for
                            aesthetics and attention to detail, which I now
                            apply to building beautiful, functional, and
                            responsive web applications.
                            <br />
                            <br />
                            While I haven’t yet worked at a tech company, I’m
                            actively building projects, learning modern
                            frameworks, and preparing to contribute to a
                            forward-thinking team in the industry.
                        </p>
                    </div>

                    {/* Dino Animation Area */}
                    <div className="absolute bottom-0 h-24 w-full overflow-x-hidden">
                        <div
                            id="dino-bg"
                            className="absolute bottom-0 h-4 w-full bg-cover bg-repeat-x will-change-[background-position]"
                            style={{ backgroundImage: `url(${ground})` }}
                        ></div>

                        <div
                            id="cloud"
                            className="absolute bottom-1 h-14 w-full bg-auto bg-no-repeat"
                            style={{ backgroundImage: `url(${cloud})` }}
                        ></div>

                        <div
                            id="dino"
                            className="absolute bottom-1 ml-4 h-10 w-10 bg-cover bg-no-repeat"
                            style={{ backgroundImage: `url(${dino})` }}
                        ></div>

                        <div
                            id="cactus"
                            className="absolute bottom-1 h-8 w-full bg-auto bg-no-repeat"
                            style={{ backgroundImage: `url(${cactus1})` }}
                        ></div>

                        <div
                            id="cactus-2"
                            className="absolute bottom-1 h-8 w-full bg-auto bg-no-repeat"
                            style={{ backgroundImage: `url(${cactus2})` }}
                        ></div>
                    </div>
                </div>

                {/* column 2 */}
                <div className="col-span-1 flex h-full w-full items-center justify-center rounded-lg border border-blue-300 bg-sky-950/70 p-4 md:col-span-5 lg:py-12">
                    <CoderCard />
                </div>
            </div>
        </main>
    );
};

export default About;