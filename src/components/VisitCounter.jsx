import React, { useState, useEffect } from 'react';

const VisitCounterSimple = () => {
    const [visitCount, setVisitCount] = useState(0);
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        // Simulate loading for a better UI experience
        setTimeout(() => {
            setVisitCount(0); // Hardcoded for now
            setIsLoading(false);
        }, 800);
    }, []);

    return (
        <div className="inline-flex items-center">
            {isLoading ? (
                <div className="animate-pulse bg-gray-700 rounded h-6 w-12"></div>
            ) : (
                <span className="font-mono text-white bg-gray-700 px-2 py-1 rounded">
                    {visitCount.toLocaleString()}
                </span>
            )}
        </div>
    );
};

export default VisitCounterSimple; 