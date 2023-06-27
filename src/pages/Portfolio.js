// Contains a list of projects. Each project is represented by the Project component.

import React from 'react';
import Project from '../components/Project';
import '../styles/Portfolio.css';

function Portfolio() {
    const projects = [
        { image: '/images/project1.jpg', title: 'Project 1', deployed: '#', github: '#' },
        { image: '/images/project2.jpg', title: 'Project 2', deployed: '#', github: '#' },
        { image: '/images/project3.jpg', title: 'Project 3', deployed: '#', github: '#' },
        { image: '/images/project4.jpg', title: 'Project 4', deployed: '#', github: '#' },
        { image: '/images/project5.jpg', title: 'Project 5', deployed: '#', github: '#' },
        { image: '/images/project6.jpg', title: 'Project 6', deployed: '#', github: '#' },
    ];

    return (
        <div className="portfolio-grid">
            {projects.map((project, index) => (
                <Project key={index} project={project} />
            ))}
        </div>
    );
}

export default Portfolio;