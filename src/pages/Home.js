import React from 'react';
import './Home.css';

function Home() {
    return (
        <div className="home-container">
            <div className="home-content">
                <h1>Hello, I'm <span className="highlight">Your Name</span></h1>
                <p className="home-subtitle">Web Developer | Designer | Problem Solver</p>
                <p className="home-description">
                    Welcome to my portfolio website. I create beautiful, functional websites
                    and applications using modern technologies.
                </p>
                <div className="home-buttons">
                    <a href="#projects" className="btn btn-primary">View My Work</a>
                    <a href="#contact" className="btn btn-secondary">Contact Me</a>
                </div>
            </div>
        </div>
    );
}

export default Home; 