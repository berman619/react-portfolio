// Contains a link to a downloadable resume and a list of my professional skills or proficiencies.

import React from 'react';
import '../styles/Resume.css'; 
import { motion } from "framer-motion";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { 
    faHtml5, faCss3Alt, faJsSquare, faReact, faNodeJs, faPython, 
    faJava, faAws, faBootstrap, faJira
} from '@fortawesome/free-brands-svg-icons';
import {
    faDatabase, faPuzzlePiece, faUsers, faCameraRetro, faHashtag, faPeopleGroup
} from '@fortawesome/free-solid-svg-icons';

function Resume() {
    return (
        <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 1 }}>
            <div className="resume">
                <section className="resume-header">
                    <h1>My Resume</h1>
                    <a href="/files/ZachBergerResume.pdf" download className="resume-download">
                        Download My Resume
                    </a>
                </section>
                <h3>Skills/Proficiencies:</h3>
                <div className="skills-grid">
                    <div className="skill">
                        <FontAwesomeIcon icon={faHtml5} className="logo"/>
                        <p>HTML</p>
                    </div>
                    <div className="skill">
                        <FontAwesomeIcon icon={faCss3Alt} className="logo"/>
                        <p>CSS</p>
                    </div>
                    <div className="skill">
                        <FontAwesomeIcon icon={faJsSquare} className="logo"/>
                        <p>JavaScript</p>
                    </div>
                    <div className="skill">
                        <FontAwesomeIcon icon={faDatabase} className="logo"/>
                        <p>SQL</p>
                    </div>
                    <div className="skill">
                        <FontAwesomeIcon icon={faReact} className="logo"/>
                        <p>React</p>
                    </div>
                    <div className="skill">
                        <FontAwesomeIcon icon={faJsSquare} className="logo"/>
                        <p>JQuery</p>
                    </div>
                    <div className="skill">
                        <FontAwesomeIcon icon={faNodeJs} className="logo"/>
                        <p>Node</p>
                    </div>
                    <div className="skill">
                        <FontAwesomeIcon icon={faJsSquare} className="logo"/>
                        <p>Express.js</p>
                    </div>
                    <div className="skill">
                        <FontAwesomeIcon icon={faBootstrap} className="logo"/>
                        <p>Bootstrap</p>
                    </div>
                    <div className="skill">
                        <FontAwesomeIcon icon={faAws} className="logo"/>
                        <p>AWS Skill Builder</p>
                    </div>
                    <div className="skill">
                        <FontAwesomeIcon icon={faJira} className="logo"/>
                        <p>Apache Maven</p>
                    </div>
                    <div className="skill">
                        <FontAwesomeIcon icon={faPython} className="logo"/>
                        <p>Python</p>
                    </div>
                    <div className="skill">
                        <FontAwesomeIcon icon={faJava} className="logo"/>
                        <p>Java</p>
                    </div>
                    <div className="skill">
                        <img src="/images/pslogo.png" alt="Adobe" className="logo" />
                        <p>Photoshop</p>
                    </div>
                    <div className="skill">
                        <img src="/images/lrlogo.jpg" alt="Adobe" className="logo" />   
                        <p>Lightroom</p>
                    </div>
                    <div className="skill">
                        <FontAwesomeIcon icon={faPuzzlePiece} className="logo"/>
                        <p>Problem-solving</p>
                    </div>
                    <div className="skill">
                        <FontAwesomeIcon icon={faUsers} className="logo"/>
                        <p>Teamwork</p>
                    </div>
                    <div className="skill">
                        <FontAwesomeIcon icon={faHashtag} className="logo"/>
                        <p>Social Media and Digital Marketing</p>
                    </div>
                    <div className="skill">
                        <FontAwesomeIcon icon={faCameraRetro} className="logo" />
                        <p>Photography</p>
                    </div>
                    <div className="skill">
                        <FontAwesomeIcon icon={faPeopleGroup} className="logo" />
                        <p>Management</p>
                    </div>
                </div>
            </div>
        </motion.div>
    );
}

export default Resume;
