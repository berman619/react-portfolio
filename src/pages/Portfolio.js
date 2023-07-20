import React from 'react';
import { Carousel } from 'react-responsive-carousel';
import "react-responsive-carousel/lib/styles/carousel.min.css";
import Project from '../components/Project';
import '../styles/Portfolio.css';
import { motion } from "framer-motion";

function Portfolio() {
    const projects = [
        { 
            image: process.env.PUBLIC_URL + "/images/jamvaultfavicon.png", 
            title: 'Jam Vault', 
            description: 'This a social networking app to store and share concert memories.',
            deployed: 'https://jamvault-3a4f37943c6d.herokuapp.com/', 
            github: 'https://github.com/juliaghany/JamVault/' 
        },
        { 
            image: process.env.PUBLIC_URL + "/images/popcornportal.png",
            title: 'Popcorn Portal', 
            description: 'This is a movie discovery and information app.',
            deployed: 'https://juliaghany.github.io/Popcorn-Portal/', 
            github: 'https://github.com/juliaghany/Popcorn-Portal' 
        },
        { 
            image: process.env.PUBLIC_URL + "/images/alexaskill.png",
            title: 'ESB Color Alexa Skill', 
            description: 'This is an Alexa Skill that tells you the nightly color of the Empire State Building`s lights.',
            deployed: 'https://www.amazon.com/dp/B0BWFC8SST/', 
            github: 'https://github.com/berman619/esbColor' 
        },
        { 
            image: process.env.PUBLIC_URL + "/images/stellarwatch.png",
            title: 'StellarWatch', 
            description: 'This is an astronimcal event tracking app.',
            deployed: 'https://stellarwatchapp.herokuapp.com/login', 
            github: 'https://github.com/mark-227-g/stellarwatch' 
        },
        { 
            image: process.env.PUBLIC_URL + "/images/codingcorner.png",
            title: 'Zach`s Coding Corner',
            description: 'This is blog for coders to publish and comment on posts.',
            deployed: 'https://zachscodingcorner.herokuapp.com/', 
            github: 'https://github.com/berman619/techblog' 
        },
        { 
            image: process.env.PUBLIC_URL + "/images/weatherdash.png",
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
            <div className="carousel-container">
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