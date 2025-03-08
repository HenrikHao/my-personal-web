import React, { useState, useRef, useEffect } from 'react';

const Experience = () => {
    const [activeTab, setActiveTab] = useState(0);
    const tabsContainerRef = useRef(null);
    const [lineHeight, setLineHeight] = useState(0);
    const [tabHeights, setTabHeights] = useState([]);

    // Update measurements whenever activeTab changes or on component mount
    useEffect(() => {
        const updateMeasurements = () => {
            if (tabsContainerRef.current) {
                setLineHeight(tabsContainerRef.current.clientHeight);

                // Get heights of each tab button
                const tabElements = tabsContainerRef.current.querySelectorAll('a');
                const heights = Array.from(tabElements).map(tab => tab.offsetHeight);
                setTabHeights(heights);
            }
        };

        // Initial update
        updateMeasurements();

        // Small delay to ensure DOM is fully rendered
        const timer = setTimeout(updateMeasurements, 100);
        return () => clearTimeout(timer);
    }, [activeTab]);

    // Update measurements on window resize
    useEffect(() => {
        const handleResize = () => {
            if (tabsContainerRef.current) {
                setLineHeight(tabsContainerRef.current.clientHeight);

                // Update tab heights on resize
                const tabElements = tabsContainerRef.current.querySelectorAll('a');
                const heights = Array.from(tabElements).map(tab => tab.offsetHeight);
                setTabHeights(heights);
            }
        };

        window.addEventListener('resize', handleResize);
        return () => window.removeEventListener('resize', handleResize);
    }, []);

    // Calculate the position of the active highlight
    const getActiveLinePosition = () => {
        let position = 0;
        for (let i = 0; i < activeTab; i++) {
            position += tabHeights[i] || 0;
        }
        console.log('Active position:', position, 'Tab heights:', tabHeights);
        return position;
    };

    // Calculate the height of the active highlight
    const getActiveLineHeight = () => {
        const height = tabHeights[activeTab] || 0;
        console.log('Active height:', height, 'Active tab:', activeTab);
        return height;
    };

    // Handle company name click - open link in new tab while still allowing tab selection
    const handleCompanyClick = (e, index, link) => {
        // If user clicked with modifier key (Ctrl/Cmd), let the browser handle it
        if (e.ctrlKey || e.metaKey || e.shiftKey || e.altKey) {
            window.open(link, '_blank');
        } else {
            // Otherwise, prevent default and handle tab selection
            e.preventDefault();
            setActiveTab(index);
        }
    };

    const companies = [
        {
            name: "The Florey",
            link: "https://florey.edu.au/",
            position: "NLP Engineer Intern",
            location: "Melbourne, Australia",
            period: "November 2024 - March 2025",
            details: [
                "Developed and optimized NLP pipelines integrating encoder-only models (BERT-based) and decoder-only models (Biomistral, LLaMA, DeepSeek) for biomedical systematic reviews and article recommendations, achieving performance on par with human annotators. Publications to be appeared.",
                "Successfully deployed advanced language models such as LLaMA and Mistral locally with HuggingFace and HPC, and integrated APIs from DeepSeek and Gemini, creating a robust and scalable pipeline for real-time data processing.",
                "Managed and optimized NLP tasks on high-performance computing (HPC) clusters, effectively processing over 15,000 medical articles, which significantly enhanced data throughput and computational efficiency."]
        },
        {
            name: "Melbourne Space Program",
            link: "https://www.melbournespace.com.au/",
            position: "Humanoid Sensing Team Lead",
            location: "Melbourne, Australia",
            period: "March 2023 - June 2024",
            details: [
                "Directed a specialized team in the development and optimization of advanced camera systems for a humanoid robotic bartender. Key tasks include pioneering techniques for precise cup detection and state-of-the-art liquid segmentation algorithms.",
                "Collected an on-site liquid-pouring dataset and replicated a U-Net model from a research paper for liquid segmentation to monitor pouring accuracy. Utilized YOLOv4 with an OAK-D camera for bottle classification.",
                "Managed and improved the code structure within the Robot Operating System (ROS) framework. Designed the architecture and messaging system to coordinate multiple nodes, including the chatbot, camera, robotic arm, and end-effector."
            ]
        },
        {
            name: "Speedbot Robotics",
            link: "https://speedbot.com/en/home",
            position: "Software Engineer Intern",
            location: "Changsha, China",
            period: "November 2021 - January 2022",
            details: [
                "Designed and implemented full-stack data visualization solutions by integrating backend SQL queries for image retrieval with frontend data analysis and visualization, leveraging Pandas and Matplotlib to deliver interactive and insightful visual reports.",
                "Led the extraction and preprocessing of mechanical components from multilayered CAD blueprints using OpenCV, generating structured image datasets for training advanced computer vision models, significantly improving automated recognition and component classification accuracy.",
                "Managed comprehensive data acquisition operations in a factory environment, utilizing depth cameras for capturing detailed steel board data. Responsibilities included sorting, labeling, and organizing datasets, facilitating robust training and enhanced performance of computer vision classification models."
            ]
        }
    ];

    return (
        <section id="experience" className="min-h-screen pt-24 pb-16">
            <div className="container mx-auto px-6 sm:px-12 lg:px-24 xl:px-32 2xl:px-48">
                <div className="flex items-center mb-8">
                    <h2 className="text-2xl md:text-3xl font-bold text-lightfont font-space-mono">
                        <span className="text-lightgreen">02.</span> Experience
                    </h2>
                    <div className="h-px bg-gray-600 flex-grow ml-4"></div>
                </div>

                <div className="flex flex-col md:flex-row mt-12 max-w-4xl mx-auto">
                    {/* Left side - Company tabs */}
                    <div className="md:w-1/4 mb-6 md:mb-0 relative">
                        {/* Background vertical line */}
                        <div
                            className="absolute left-0 top-0 w-0.5 bg-gray-600"
                            style={{ height: `${lineHeight || '100%'}px` }}
                        ></div>

                        {/* Highlighted active section of vertical line */}
                        <div
                            className="absolute left-0 w-0.5 bg-lightgreen transition-all duration-300"
                            style={{
                                top: `${getActiveLinePosition()}px`,
                                height: `${getActiveLineHeight() || 48}px` // Fallback height
                            }}
                        ></div>

                        <div className="relative" ref={tabsContainerRef}>
                            {companies.map((company, index) => (
                                <a
                                    key={index}
                                    href={company.link}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    onClick={(e) => handleCompanyClick(e, index, company.link)}
                                    className={`pl-6 py-3 text-left w-full block transition-all duration-300 relative ${activeTab === index
                                        ? 'text-lightgreen font-medium bg-lightgreen/10 -ml-px'
                                        : 'text-gray-400 hover:text-lightgreen hover:bg-lightgreen/5'
                                        }`}
                                >
                                    {company.name}
                                </a>
                            ))}
                        </div>
                    </div>

                    {/* Right side - Experience details */}
                    <div className="md:w-3/4 md:pl-8">
                        <div className="mb-2">
                            <h3 className="text-xl font-bold text-lightfont">
                                {companies[activeTab].position}
                                <span className="text-lightgreen"> @ </span>
                                <a
                                    href={companies[activeTab].link}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="text-lightgreen hover:underline"
                                >  {companies[activeTab].name}</a>
                            </h3>
                            <p className="text-gray-400 font-space-mono mt-1">
                                {companies[activeTab].location}
                            </p>
                            <p className="text-gray-400 font-space-mono mt-1">
                                {companies[activeTab].period}
                            </p>
                        </div>

                        <div className="mt-6">
                            {companies[activeTab].details.map((detail, index) => (
                                <div key={index} className="flex mb-4">
                                    <span className="text-lightgreen mr-2">▹</span>
                                    <p className="text-gray-300">{detail}</p>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default Experience;