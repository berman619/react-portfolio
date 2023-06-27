// Represents a single project. Includes an image, title, and links to the deployed application and GitHub repository.

import React from 'react';
import '../styles/Project.css';

function Project({ project }) {
    return (
        <div className="project-card">
            <img src={project.image} alt={project.title} />
            <h3>{project.title}</h3>
            <a href={project.deployed}>Deployed App</a>
            <a href={project.github}>GitHub Repo</a>
        </div>
    );
}

export default Project;