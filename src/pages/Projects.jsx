import React from "react";
import { FaGithub, FaExternalLinkAlt, FaPython, FaJava, FaReact } from 'react-icons/fa';
import { SiTensorflow, SiPytorch, SiHuggingface, SiTailwindcss, SiJavascript, SiGooglecloud, SiTerraform, SiC } from 'react-icons/si';

const Projects = () => {
    const projects = [
        {
            title: "Personal Portfolio Website",
            description: "A responsive personal portfolio website built with React and Tailwind CSS. Features smooth scrolling, responsive design, and a clean, modern interface.",
            technologies: [
                { icon: <FaReact size={20} />, name: "React" },
                { icon: <SiTailwindcss size={20} />, name: "Tailwind CSS" },
                { icon: <SiJavascript size={20} />, name: "JavaScript" },
                { icon: <SiGooglecloud size={20} />, name: "GCP" },
                { icon: <SiTerraform size={20} />, name: "Terraform" }
            ],
            github: "https://github.com/HenrikHao/my-personal-web",
            liveLink: "https://me.henrikhao.com",
            image: "/images/Portfolio.png"
        },
        {
            title: "Unimelb Projects",
            description: "All of my projects @ Unimelb. Wide range of projects including Algorithms, Software Development, Design Patterns, NLP, CV, ML, RL and Cloud.",
            technologies: [
                { icon: <SiPytorch size={20} />, name: "PyTorch" },
                { icon: <SiHuggingface size={20} />, name: "HuggingFace" },
                { icon: <FaPython size={20} />, name: "Python" },
                { icon: <SiTensorflow size={20} />, name: "TensorFlow" },
                { icon: <FaJava size={20} />, name: "Java" },
                { icon: <SiC size={20} />, name: "C" }
            ],
            github: "https://github.com/HenrikHao/Unimelb",
            liveLink: null,
            image: "/images/Unimelb.jpeg"
        }
    ];

    return (
        <section id="projects" className="min-h-screen pt-24 pb-16">
            <div className="container mx-auto px-6 sm:px-12 lg:px-24 xl:px-32 2xl:px-48">
                <div className="flex items-center mb-8">
                    <h2 className="text-2xl md:text-3xl font-bold text-lightfont font-space-mono">
                        <span className="text-lightgreen">03.</span> Projects
                    </h2>
                    <div className="h-px bg-gray-600 flex-grow ml-4"></div>
                </div>

                <div className="mt-12 space-y-24">
                    {projects.map((project, index) => (
                        <div
                            key={index}
                            className={`flex flex-col ${index % 2 === 0 ? 'lg:flex-row' : 'lg:flex-row-reverse'} items-center gap-8`}
                        >
                            {/* Project Image */}
                            <div className="lg:w-1/2 relative group">
                                <div className="relative overflow-hidden rounded-md">
                                    {/* Project image - replace with your actual images */}
                                    <div className="bg-gray-700 h-64 md:h-80 w-full rounded-md overflow-hidden">
                                        {/* If you have actual images, uncomment this */}
                                        {<img
                                            src={project.image}
                                            alt={project.title}
                                            className="w-full h-full object-cover"
                                        />}
                                    </div>
                                </div>
                            </div>

                            {/* Project Details */}
                            <div className={`lg:w-1/2 ${index % 2 === 0 ? 'lg:pl-8' : 'lg:pr-8'}`}>
                                <div className="text-right mb-2">
                                    <p className="text-lightgreen font-space-mono text-sm">Featured Project</p>
                                </div>

                                <h3 className="text-2xl font-bold text-lightfont mb-4">{project.title}</h3>

                                <div className="bg-darkbg p-6 rounded-md shadow-lg mb-4">
                                    <p className="text-gray-300">{project.description}</p>
                                </div>

                                <div className="flex flex-wrap gap-3 mb-6 justify-end">
                                    {project.technologies.map((tech, techIndex) => (
                                        <div
                                            key={techIndex}
                                            className="flex flex-col items-center text-center"
                                        >
                                            <div className="text-lightgreen mb-1 transition-transform hover:scale-110 duration-300">
                                                {tech.icon}
                                            </div>
                                        </div>
                                    ))}
                                </div>

                                <div className="flex gap-4 justify-end">
                                    {project.github && (
                                        <a
                                            href={project.github}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            className="text-lightfont hover:text-lightgreen transition-colors duration-300"
                                        >
                                            <FaGithub size={22} />
                                        </a>
                                    )}
                                    {project.liveLink && (
                                        <a
                                            href={project.liveLink}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            className="text-lightfont hover:text-lightgreen transition-colors duration-300"
                                        >
                                            <FaExternalLinkAlt size={20} />
                                        </a>
                                    )}
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Projects;