import React from 'react';

const EmailLink = () => {
    return (
        <div className="fixed right-10 bottom-0 hidden lg:block">
            <div className="flex flex-col items-center">
                <a
                    href="mailto:henrikhao@outlook.com"
                    className="text-lightgreen hover:text-light mb-6 transform hover:-translate-y-1 transition-all duration-300 vertical-text"
                >
                    <span className="writing-mode-vertical tracking-widest">henrikhao@outlook.com</span>
                </a>
                <div className="h-24 w-px bg-lightgreen"></div>
            </div>
        </div>
    );
};

export default EmailLink; 