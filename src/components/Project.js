// Project.js
import React from 'react';
import '../styles/Project.css';
import { FiExternalLink, FiGithub } from 'react-icons/fi';

function Project({ project }) {
    return (
        <div className="project-card">
            <div className="image-container">
                <div style={{ width: '80%', margin: '0 auto' }}>
                    <img src={project.image} alt={project.title} />
                </div>
                <div className="overlay">
                    <h3>{project.title}</h3>
                    <p>{project.description}</p>
                    <div className="links">
                        <a href={project.deployed} target="_blank" rel="noreferrer"><FiExternalLink size={20} /></a>
                        <a href={project.github} target="_blank" rel="noreferrer"><FiGithub size={20} /></a>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Project;
