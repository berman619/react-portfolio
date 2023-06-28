// Contains a link to a downloadable resume and a list of my professional skills or proficiencies.

import React from 'react';
import '../styles/Resume.css'; 
import { motion } from "framer-motion";

function Resume() {
    return (
        <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        transition={{ duration: 1 }}>
        <div className="resume">
            <a href="path_to_your_resume.pdf" download className="resume-download">
                Download My Resume
            </a>

            <h3>Skills/Proficiencies:</h3>
            <ul className="skills-list">
                <li>HTML</li>
                <li>CSS</li>
                <li>JavaScript</li>
                <li>SQL</li>
                <li>React</li>
                <li>JQuery</li>
                <li>Node</li>
                <li>Express.js</li>
                <li>Bootstrap</li>
                <li>AWS Skill Builder</li>
                <li>Apache Maven</li>
                <li>Python</li>
                <li>Java</li>
                <li>Problem-solving</li>
                <li>Teamwork</li>
                <li>Social Media and Digital Marketing</li>
                <li>Photography</li>
                <li>Photoshop</li>
                <li>Lightroom</li>
            </ul>
        </div>
        </motion.div>
    );
}

export default Resume;
