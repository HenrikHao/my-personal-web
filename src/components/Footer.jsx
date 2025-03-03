import React from 'react';
import VisitCounter from './VisitCounter';

const Footer = () => {
    return (
        <footer className="w-full py-6 border-t border-gray-700 mt-auto">
            <div className="container mx-auto px-4 flex flex-col md:flex-row justify-between items-center">
                <div className="text-gray-400 text-sm mb-4 md:mb-0">
                    © {new Date().getFullYear()} Henrik Hao. All rights reserved.
                </div>

                <div className="flex items-center">
                    <span className="text-gray-400 text-sm mr-2">Total Visits:</span>
                    <VisitCounter />
                </div>
            </div>
        </footer>
    );
};

export default Footer; 