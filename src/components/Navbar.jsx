import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';

const navLinks = [
    {
        name: "About",
        path: "/#about",
        number: "01"
    },
    {
        name: "Experience",
        path: "/#experience",
        number: "02"
    },
    {
        name: "Projects",
        path: "/#projects",
        number: "03"
    },
    {
        name: "Contact",
        path: "/#contact",
        number: "04"
    },
];

const Navbar = () => {
    // State for adding blur on scroll
    const [addBlur, setAddBlur] = useState(false);
    // Add state to track active section
    const [activeSection, setActiveSection] = useState('');

    // Set blur state based on scroll position
    const handleScroll = () => {
        if (window.scrollY >= 100) {
            setAddBlur(true);
        } else {
            setAddBlur(false);
        }

        // Determine active section based on scroll position
        const sections = navLinks.map(link => link.path.split('#')[1]);

        let foundActiveSection = false;

        for (const section of sections) {
            const element = document.getElementById(section);
            if (element) {
                const rect = element.getBoundingClientRect();
                // If the element is in the viewport (with some buffer for better UX)
                if (rect.top <= 200 && rect.bottom >= 200) {
                    setActiveSection(section);
                    foundActiveSection = true;
                    break;
                }
            }
        }

        // If no section is in view, clear the active section
        if (!foundActiveSection) {
            setActiveSection('');
        }
    };

    useEffect(() => {
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    // Handle smooth scrolling for anchor links
    const handleClick = (e, path) => {
        // Only handle anchor links
        if (path.includes('#')) {
            e.preventDefault();

            // Extract the id from the path
            const id = path.split('#')[1];
            const element = document.getElementById(id);

            if (element) {
                // Scroll to the element
                element.scrollIntoView({ behavior: 'smooth' });

                // Update URL without page reload
                window.history.pushState(null, '', path);

                // Update active section
                setActiveSection(id);
            }
        }
    };

    // Handle home link click
    const handleHomeClick = () => {
        // Scroll to top
        window.scrollTo({ top: 0, behavior: 'smooth' });
        // Clear active section
        setActiveSection('');
        // Update URL
        window.history.pushState(null, '', '/');
    };

    return (
        <nav className={`fixed top-0 w-full z-50 ${addBlur ? 'backdrop-blur-md bg-background/90' : 'bg-background'} transition-all duration-300`}>
            {/* Use horizontal padding to match left-10/right-10 positions */}
            <div className="px-10">
                <div className="flex items-center justify-between h-24">
                    <div className="flex-shrink-0">
                        <Link
                            to="/"
                            className="text-lightgreen font-bold text-xl font-space-mono"
                            onClick={handleHomeClick}
                        >
                            Henrik Hao 🧊
                        </Link>
                    </div>
                    <div className="hidden md:flex items-center space-x-6 lg:space-x-8">
                        {navLinks.map((link) => (
                            <a
                                href={link.path}
                                key={link.name}
                                onClick={(e) => handleClick(e, link.path)}
                                className="text-base font-semibold font-space-mono group"
                            >
                                <span className="text-lightgreen">{link.number}. </span>
                                <span className={`${activeSection === link.path.split('#')[1] ? 'text-lightgreen' : 'text-lightfont'} group-hover:text-lightgreen transition-colors duration-300`}>
                                    {link.name}
                                </span>
                            </a>
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