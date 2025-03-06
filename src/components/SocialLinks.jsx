import React from 'react';
import { FaGithub, FaLinkedinIn } from 'react-icons/fa';

const SocialLinks = () => {
    return (
        <div className="fixed left-10 bottom-0 hidden lg:block">
            <div className="flex flex-col items-center">
                <a
                    href="https://github.com/HenrikHao"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-lightgreen hover:text-light mb-6 transform hover:-translate-y-1 transition-all duration-300"
                >
                    <FaGithub size={22} />
                </a>
                <a
                    href="https://linkedin.com/in/henrik-hao"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-lightgreen hover:text-light mb-6 transform hover:-translate-y-1 transition-all duration-300"
                >
                    <FaLinkedinIn size={22} />
                </a>
                <div className="h-24 w-px bg-lightgreen"></div>
            </div>
        </div>
    );
};

export default SocialLinks; 