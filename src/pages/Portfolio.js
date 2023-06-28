// Contains a list of projects. Each project is represented by the Project component.

import React from 'react';
import Project from '../components/Project';
import '../styles/Portfolio.css';
import { motion } from "framer-motion";

function Portfolio() {
    const projects = [
        { image: '/images/popcornportal.png', title: 'Popcorn Portal', deployed: '#https://juliaghany.github.io/Popcorn-Portal/', github: '#https://github.com/juliaghany/Popcorn-Portal' },
        { image: '/images/project2.jpg', title: 'Project 2', deployed: '#', github: '#' },
        { image: '/images/project3.jpg', title: 'Project 3', deployed: '#', github: '#' },
        { image: '/images/project4.jpg', title: 'Project 4', deployed: '#', github: '#' },
        { image: '/images/project5.jpg', title: 'Project 5', deployed: '#', github: '#' },
        { image: '/images/project6.jpg', title: 'Project 6', deployed: '#', github: '#' },
    ];

    return (
        <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 1 }}>
        <div className="portfolio-grid">
            {projects.map((project, index) => (
                <Project key={index} project={project} />
            ))}
        </div>
        </motion.div>
    );
}

export default Portfolio;