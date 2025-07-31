import React from "react";
type Project = {
    title: string;
    description: string;
    image: string;
    techStack: string[];
    link: string;
};

const projects: Project[] = [];

const Project: React.FC = () => {
    return (
        <section className="scroll-mt-28" id="projects">
            <div className="fadeIn mt-28 h-fit w-full rounded-lg border border-blue-300">
                <div className="w-full p-4 leading-loose tracking-[0.08rem] text-white md:mb-0">
                    <h1 className="text-3xl font-bold">My Projects</h1>
                    <hr className="my-4 h-px border-0 bg-blue-300" />

                    <div className="grid w-full grid-cols-1 gap-6 md:grid-cols-2">
                        {projects.length > 0 ? (
                            projects.map((project, index) => (
                                <div
                                    key={index}
                                    className="group relative flex h-full w-full flex-col overflow-hidden rounded-lg border border-blue-300 bg-sky-950/70 shadow-md transition-transform duration-300 hover:scale-[1.01] hover:shadow-blue-400/20 lg:flex-row"
                                >
                                    {/* Project Image */}
                                    <div className="aspect-square w-full p-2 lg:h-full lg:w-1/2">
                                        <img
                                            src={project.image}
                                            alt={`${project.title} website screenshot`}
                                            loading="lazy"
                                            className="h-full w-full rounded-md object-cover"
                                        />
                                    </div>

                                    {/* Project Info */}
                                    <div className="flex w-full flex-col justify-between gap-4 p-4 lg:w-1/2">
                                        <div>
                                            <h3 className="text-xl font-semibold">
                                                {project.title}
                                            </h3>
                                            <h4 className="text-sm text-white/70">
                                                {project.description}
                                            </h4>

                                            <div className="mt-3 flex flex-wrap gap-2">
                                                {project.techStack.map(
                                                    (tech, idx) => (
                                                        <span
                                                            key={idx}
                                                            className="rounded bg-white/10 px-2 py-1 text-[10px] text-white"
                                                        >
                                                            {tech}
                                                        </span>
                                                    )
                                                )}
                                            </div>
                                        </div>

                                        <a
                                            href={project.link}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            className="w-fit self-end text-white text-[11px] font-medium transition-transform duration-200 ease-in-out hover:scale-105 hover:underline hover:underline-offset-4"
                                        >
                                            View Project &gt;
                                        </a>
                                    </div>
                                </div>
                            ))
                        ) : (
                            <p className="col-span-full text-center text-white/60 italic">
                                No projects added yet. Stay tuned for upcoming
                                work!
                            </p>
                        )}
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Project;
