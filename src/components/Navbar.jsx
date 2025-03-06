import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';

const navLinks = [
    {
        name: "About",
        path: "/about",
        number: "01"
    },
    {
        name: "Experience",
        path: "/experience",
        number: "02"
    },
    {
        name: "Projects",
        path: "/projects",
        number: "03"
    },
    {
        name: "Contact",
        path: "/contact",
        number: "04"
    },
];

const Navbar = () => {
    // State for adding blur on scroll
    const [addBlur, setAddBlur] = useState(false);
    // Get current location to determine active link
    const location = useLocation();

    // Set blur state based on scroll position
    const handleScroll = () => {
        if (window.scrollY >= 100) {
            setAddBlur(true);
        } else {
            setAddBlur(false);
        }
    };

    useEffect(() => {
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    return (
        <nav className={`fixed top-0 w-full z-50 ${addBlur ? 'backdrop-blur-md bg-background/90' : 'bg-background'} transition-all duration-300`}>
            {/* Use horizontal padding to match left-10/right-10 positions */}
            <div className="px-10">
                <div className="flex items-center justify-between h-24">
                    <div className="flex-shrink-0">
                        <Link to="/" className="text-lightgreen font-bold text-xl font-space-mono">
                            Henrik Hao 🧊
                        </Link>
                    </div>
                    <div className="hidden md:flex items-center space-x-6 lg:space-x-8">
                        {navLinks.map((link) => (
                            <Link
                                to={link.path}
                                key={link.name}
                                className="text-base font-semibold font-space-mono group"
                            >
                                <span className="text-lightgreen">{link.number}. </span>
                                <span className={`${location.pathname === link.path ? 'text-lightgreen' : 'text-lightfont'} group-hover:text-lightgreen transition-colors duration-300`}>
                                    {link.name}
                                </span>
                            </Link>
                        ))}
                        <a
                            href="/resume.pdf"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-lightgreen border font-space-mono border-lightgreen rounded px-4 py-2 hover:bg-lightgreen/10 transition-all duration-300"
                        >
                            Resume
                        </a>
                    </div>
                </div>
            </div>
        </nav>
    );
};

export default Navbar;