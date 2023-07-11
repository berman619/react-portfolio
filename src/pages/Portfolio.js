// Contains a list of projects. Each project is represented by the Project component.

import React from 'react';
import { Carousel } from 'react-responsive-carousel';
import "react-responsive-carousel/lib/styles/carousel.min.css";
import Project from '../components/Project';
import '../styles/Portfolio.css';
import { motion } from "framer-motion";


function Portfolio() {
    const projects = [
        { 
            image: '/images/popcornportal.png', 
            title: 'Popcorn Portal', 
            description: 'This is a movie discovery and information app.',
            deployed: 'https://juliaghany.github.io/Popcorn-Portal/', 
            github: 'https://github.com/juliaghany/Popcorn-Portal' 
        },
        { 
            image: '/images/alexaskill.png', 
            title: 'ESB Color Alexa Skill', 
            description: 'This is an Alexa Skill that tells you the nightly color of the Empire State Building`s lights.',
            deployed: 'https://www.amazon.com/dp/B0BWFC8SST/', 
            github: 'https://github.com/berman619/esbColor' 
        },
        { 
            image: '/images/stellarwatch.png', 
            title: 'StellarWatch', 
            description: 'This is an astronimcal event tracking app.',
            deployed: 'https://stellarwatchapp.herokuapp.com/login', 
            github: 'https://github.com/mark-227-g/stellarwatch' 
        },
        { 
            image: '/images/project3.png', 
            title: 'Project 3', 
            description: 'This project is a work in progress! Check back soon.',
            deployed: '', 
            github: '' 
        },
        { 
            image: '/images/codingcorner.png', 
            title: 'Zach`s Coding Corner',
            description: 'This is blog for coders to publish and comment on posts.',
            deployed: 'https://zachscodingcorner.herokuapp.com/', 
            github: 'https://github.com/berman619/techblog' 
        },
        { 
            image: '/images/weatherdash.png', 
            title: 'Weather Dashboard', 
            description: 'This is a weather dashboard showing the forecast for any city.',
            deployed: 'https://berman619.github.io/weather-dashboard/', 
            github: 'https://github.com/berman619/weather-dashboard' 
        },
    ];

    return (
        <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} transition={{ duration: 1 }}>
            <div className="introduction">
                <h2>Welcome to My Portfolio</h2>
                <p>Here you can see a collection of my most recent work. Click on any project to see the deployed applications or the GitHub repositories.</p>
            </div>
            <div className="carousel-container"> {/* Add a wrapper around Carousel component */}
                <Carousel autoPlay infiniteLoop>
                    {projects.map((project, index) => (
                        <div key={index}>
                            <Project project={project} />
                        </div>
                    ))}
                </Carousel>
            </div>
        </motion.div>
    );
}

export default Portfolio;