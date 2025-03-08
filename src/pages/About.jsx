import React from 'react';
import { FaPython, FaJava, FaServer } from 'react-icons/fa';
import { SiTensorflow, SiPytorch, SiHuggingface } from 'react-icons/si';

const About = () => {
    const skills = [
        { icon: <FaPython size={40} />, name: "Python" },
        { icon: <FaJava size={40} />, name: "Java" },
        { icon: <SiTensorflow size={40} />, name: "TensorFlow" },
        { icon: <SiPytorch size={40} />, name: "PyTorch" },
        { icon: <SiHuggingface size={40} />, name: "HuggingFace" },
        { icon: <FaServer size={40} />, name: "HPC" }
    ];

    return (
        <section id="about" className="min-h-screen pt-24 pb-16">
            <div className="container mx-auto px-6 sm:px-12 lg:px-24 xl:px-32 2xl:px-48">
                <div className="flex items-center mb-8">
                    <h2 className="text-2xl md:text-3xl font-bold text-lightfont font-space-mono">
                        <span className="text-lightgreen">01.</span> About Me
                    </h2>
                    <div className="h-px bg-gray-600 flex-grow ml-4"></div>
                </div>

                <div className="flex flex-col lg:flex-row gap-12">
                    <div className="lg:w-2/3">
                        <div className="text-gray-300 space-y-4">
                            <p>
                                Hello! My name is Henrik. I graduated from the Unimelb with Bachelor of Science in Data Science
                                and Computing and Software System. I am now a Master of IT student with specialisation in AI @Unimelb.
                            </p>
                            <p>
                                Fast forward to today, and I've had the privilege of working on various projects that have
                                helped me develop a strong foundation in both Deep Learning and Software Development. My main focus
                                these days is full-stack development and cloud engineering.
                            </p>
                            <p>
                                I'm particularly interested in Natural Language Processing and Cloud Development,
                                and I'm constantly learning new technologies to expand my skill set. I am also a Google Cloud
                                certified Associate Cloud Engineer.
                            </p>
                            <p>
                                What I am learning / interested in recently:
                            </p>
                            <ul className="grid grid-cols-2 gap-2 text-sm">
                                <li className="flex items-center">
                                    <span className="text-lightgreen mr-2">▹</span> Terraform
                                </li>
                                <li className="flex items-center">
                                    <span className="text-lightgreen mr-2">▹</span> K8S
                                </li>
                                <li className="flex items-center">
                                    <span className="text-lightgreen mr-2">▹</span> Tailwind CSS
                                </li>
                                <li className="flex items-center">
                                    <span className="text-lightgreen mr-2">▹</span> Langchain.js
                                </li>
                                <li className="flex items-center">
                                    <span className="text-lightgreen mr-2">▹</span> Swift
                                </li>
                                <li className="flex items-center">
                                    <span className="text-lightgreen mr-2">▹</span> React.js
                                </li>
                            </ul>
                        </div>
                    </div>

                    <div className="lg:w-1/3 flex justify-center items-center">
                        <div className="flex flex-col">
                            <h3 className="text-lightgreen text-center font-space-mono mb-4 text-lg">
                                Technologies I'm Proficient
                            </h3>
                            <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-2 xl:grid-cols-3 gap-6 p-6 bg-lightgreen/5 rounded-md border border-lightgreen/20 hover:border-lightgreen/50 transition-all duration-300">
                                {skills.map((skill, index) => (
                                    <div key={index} className="flex flex-col items-center text-center">
                                        <div className="text-lightgreen mb-2 transition-transform hover:scale-110 duration-300">
                                            {skill.icon}
                                        </div>
                                        <span className="text-gray-300 text-sm">{skill.name}</span>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default About;
