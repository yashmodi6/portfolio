import React from "react";

import HtmlLogo from "../assets/images/skills/HTML.svg";
import TailwindLogo from "../assets/images/skills/TailwindCSS.svg";
import JavaScriptLogo from "../assets/images/skills/JavaScript.svg";
import PythonLogo from "../assets/images/skills/Python.svg";
import ReactLogo from "../assets/images/skills/React.svg";
import NextJsLogo from "../assets/images/skills/NextJS.svg";
import NodeJsLogo from "../assets/images/skills/NodeJS.svg";
import ReactNativeLogo from "../assets/images/skills/ReactNative.svg";
import JavaLogo from "../assets/images/skills/Java.svg";

// Skill type
interface Skill {
    name: string;
    description: string;
    icon: string;
    bgColor: string;
}

// Skill data
const skills: Skill[] = [
    {
        name: "HTML & CSS",
        description: "Web foundation",
        icon: HtmlLogo,
        bgColor: "bg-orange-500/30"
    },
    {
        name: "Tailwind CSS",
        description: "CSS framework",
        icon: TailwindLogo,
        bgColor: "bg-sky-700/30"
    },
    {
        name: "JavaScript",
        description: "Programming language",
        icon: JavaScriptLogo,
        bgColor: "bg-yellow-400/30"
    },
    {
        name: "React JS",
        description: "JS library",
        icon: ReactLogo, 
        bgColor: "bg-cyan-500/30"
    },
    {
        name: "Next JS",
        description: "React framework",
        icon: NextJsLogo, 
        bgColor: "bg-neutral-200/30"
    },
    {
        name: "Node.js",
        description: "Backend runtime",
        icon: NodeJsLogo, 
        bgColor: "bg-green-500/30"
    },
    {
        name: "Python",
        description: "Programming language",
        icon: PythonLogo,
        bgColor: "bg-blue-600/30"
    }
];

const currentlyLearning: Skill[] = [
    {
        name: "React Native",
        description: "Mobile framework",
        icon: ReactNativeLogo,
        bgColor: "bg-indigo-500/30"
    },
    {
        name: "Java",
        description: "Programming language",
        icon: JavaLogo, 
        bgColor: "bg-red-600/30"
    }
];

const Skills: React.FC = () => {
    return (
        <section
            id="skills"
            className="fadeIn mt-28 h-fit w-full rounded-lg border border-blue-300 scroll-mt-28"
        >
            <div className="w-full p-4 leading-loose tracking-[0.08rem] text-white md:mb-0">
                {/* My Skills */}
                <h1 className="text-3xl font-bold">MY SKILLS</h1>
                <hr className="my-4 h-px border-0 bg-blue-300" />

                <div className="grid w-full grid-cols-1 gap-4 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
                    {skills.map((skill, index) => (
                        <div
                            key={`skill-${index}`}
                            className={`flex h-16 w-full gap-3 rounded-md border border-blue-300 ${skill.bgColor} p-2 hover:bg-sky-950/70`}
                        >
                            <div
                                className={`flex aspect-square h-full items-center justify-center rounded ${skill.bgColor}`}
                            >
                                <img
                                    loading="lazy"
                                    className="h-8 w-8"
                                    src={skill.icon}
                                    alt={skill.name}
                                />
                            </div>
                            <div className="flex w-full flex-col justify-center gap-2">
                                <h3 className="font-medium leading-none">
                                    {skill.name}
                                </h3>
                                <h4 className="text-[10px] leading-none text-gray-200">
                                    {skill.description}
                                </h4>
                            </div>
                        </div>
                    ))}
                </div>

                {/* Currently Learning */}
                <hr className="my-4 h-px border-0 bg-blue-300" />
                <h1 className="mt-4 text-3xl font-bold">CURRENTLY LEARNING</h1>
                <hr className="my-4 h-px border-0 bg-blue-300" />

                <div className="grid w-full grid-cols-1 gap-4 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
                    {currentlyLearning.map((item, index) => (
                        <div
                            key={`learning-${index}`}
                            className={`flex h-16 w-full gap-3 rounded-md border border-blue-300 ${item.bgColor} p-2 hover:bg-sky-950/70`}
                        >
                            <div
                                className={`flex aspect-square h-full items-center justify-center rounded ${item.bgColor}`}
                            >
                                <img
                                    loading="lazy"
                                    className="h-8 w-8"
                                    src={item.icon}
                                    alt={item.name}
                                />
                            </div>
                            <div className="flex w-full flex-col justify-center gap-2">
                                <h3 className="font-medium leading-none">
                                    {item.name}
                                </h3>
                                <h4 className="text-[10px] leading-none text-gray-200">
                                    {item.description}
                                </h4>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Skills;
