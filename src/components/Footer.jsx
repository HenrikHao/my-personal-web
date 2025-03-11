import React from 'react';

const Footer = () => {
    return (
        <footer className="w-full py-6 mt-auto text-center">
            <div className="container mx-auto px-4">
                <div className="text-lightgreen text-sm">
                    <p>
                        Designed by <a
                            href="https://github.com/bchiang7/v4"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-lightgreen hover:underline"
                        >
                            Brittany Chiang
                        </a> & Rebuilt by Henrik Hao
                    </p>
                </div>
            </div>
        </footer>
    );
};

export default Footer; 