import React from 'react';
import { Link } from 'react-router-dom';

const Home = () => {
    return (
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

                    <Link to="/contact" className="inline-block">
                        <button className="bg-transparent hover:bg-lightgreen text-lightgreen hover:text-dark font-semibold py-3 px-8 border border-lightgreen hover:border-transparent rounded transition-all duration-300 w-max">
                            Get In Touch
                        </button>
                    </Link>
                </div>
            </div>
        </div>
    );
};

export default Home;
