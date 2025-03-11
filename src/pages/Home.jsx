import React from 'react';
import { Link } from 'react-router-dom';
import About from './About';
import Experience from './Experience';
import Projects from './Projects';
import Contact from './Contact';

const Home = () => {
    return (
        <>
            {/* Hero Section */}
            <div className="flex flex-col justify-center items-center min-h-screen">
                <div className="container mx-auto px-6 sm:px-12 lg:px-24 xl:px-32 2xl:px-48">
                    <div className="flex flex-col max-w-3xl">
                        <p className="text-lightgreen color font-space-mono text-l mb-4">
                            Hello, my name is
                        </p>

                        <h1 className="text-5xl md:text-7xl font-bold text-lightfont mb-4 font-default">
                            Henrik Hao.
                        </h1>

                        <h2 className="text-4xl md:text-5xl font-bold text-gray-400 mb-8">
                            Welcome to my website!
                        </h2>

                        <div className="text-gray-300 text-lg max-w-2xl mb-12">
                            <p className="mb-4">
                                I'm a Master of IT Student at the University of Melbourne.
                                Primarily interested in NLP and Cloud Development.
                            </p>
                        </div>
                        <a href="/#contact">
                            <button className="text-lightgreen border font-space-mono border-lightgreen rounded px-4 py-2 hover:bg-lightgreen/10 transition-all duration-300">
                                Get In Touch
                            </button>
                        </a>
                    </div>
                </div>
            </div>

            {/* About Section */}
            <About />

            {/* Experience Section */}
            <Experience />

            {/* Projects Section */}
            <Projects />

            {/* Contact Section */}
            <Contact />
        </>
    );
};

export default Home;
