import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

const navLinks = [
    {
        name: "Home",
        path: "/",
    },
    {
        name: "About",
        path: "/about",
    },
    {
        name: "Projects",
        path: "/projects",
    },
    {
        name: "Experience",
        path: "/experience",
    },
];

const Navbar = () => {

    // Use state addBlur start with false and set to true when the user scrolls down 100px
    const [addBlur, setAddBlur] = useState(false);

    // if the user scrolls down 100px, set addBlur to true
    const handleScroll = () => {
        if (window.scrollY >= 100) {
            setAddBlur(true);
        } else {
            setAddBlur(false);
        }
    };

    // useEffect is used to add an event listener to the window when the component mounts
    // the last [] is for dependencies, empty means it will only run once
    // handleScroll is the function that will be called when the user scrolls
    useEffect(() => {
        window.addEventListener('scroll', handleScroll);
        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    return (
        // <nav> typically tells the browser this is a navigation bar
        // sticky top-0 z-50 bg-transparent shadow-none is a class that makes the navbar transparent and no shadow
        // max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 is a class that makes the navbar the full width of the page, with padding on the left and right
        // flex items-center justify-between h-16 is a class that makes the navbar items centered and the height of the navbar
        //Outer element for positioning and background
        //Middle element for width constraints and padding
        //Inner element for content layout
        <nav class={`fixed top-0 w-full z-50 ${addBlur ? 'backdrop-blur-md bg-gray-800/50' : 'bg-transparent'} transition-all duration-300`}>
            <div class="max-w-screen-xl mx-auto px-4 sm:px-6 lg:px-8">
                <div class="flex items-center justify-between h-24">
                    <div class="flex-shrink-0">
                        <Link to="/" class="text-white font-bold text-xl md:text-2xl lg:text-3xl font-handlee tracking-wide">
                            Henrik Hao <span class="ml-1">🧊</span>
                        </Link>
                    </div>
                    <div class="hidden md:flex space-x-8 lg:space-x-12">
                        {navLinks.map((link) => (
                            <Link to={link.path} key={link.name} class="text-white text-base font-semibold md:text-lg font-default hover:text-gray-300">
                                {link.name}
                            </Link>
                        ))}
                    </div>
                </div>
            </div>
        </nav>
    );
};

export default Navbar;
