import React from 'react';
import './Resume.css';

function Resume() {
    return (
        <div className="resume-container">
            <h1>Your Name</h1>
            <section className="summary">
                <h2>Professional Summary</h2>
                <p>A brief introduction about your career, skills, and interests.</p>
            </section>
            <section className="experience">
                <h2>Experience</h2>
                <ul>
                    <li>
                        <strong>Job Title</strong> at Company Name <br />
                        <span>Duration</span>
                        <p>Describe your responsibilities and achievements.</p>
                    </li>
                    {/* Add more experiences as needed */}
                </ul>
            </section>
            <section className="education">
                <h2>Education</h2>
                <p>Details about your academic background.</p>
            </section>
            {/* You can add more sections for skills, certifications, etc. */}
        </div>
    );
}

export default Resume;