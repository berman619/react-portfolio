// Contains a recent photo/avatar and a short bio.

import React from 'react';
import '../styles/About.css';

function About() {
    return (
        <div className="about-section">
            <img src="images/49DDF4C8-149B-4571-B1AB-905CF893587C.JPG" alt="Zach Berger" />
            <p>
            I'm Zach Berger, a full stack web developer from New York, NY. Passionate about technology and driven by curiosity, I pursued web development to understand the underlying technology behind websites and build robust web applications.
            <br></br><br></br>
            Proficient in HTML, CSS, JavaScript, SQL, React, and more, I possess a solid foundation in both front-end and back-end development. During my time at the Columbia Coding Boot Camp, I collaborated on projects like "Popcorn Portal," a movie discovery app, and "StellarWatch," an astronomy event tracker.
            <br></br><br></br>
            As a creative thinker and quick learner, I'm adept at problem-solving and working both independently and in teams. With a background in social media and digital marketing, I bring a unique perspective to my work. Additionally, my skills in photography, Photoshop, and Lightroom enhance my creativity in web design.
            <br></br><br></br>    
            I approach challenges by understanding the problem, breaking it down into manageable parts, exploring multiple solutions, and seeking help when needed. With a thirst for knowledge and a passion for continuous learning, I stay up-to-date with industry trends and best practices.
            <br></br><br></br>
            I'm excited to embark on this new career path as a full stack web developer, leveraging my skills and experiences to create innovative web applications. Let's build something amazing together!
            </p>
        </div>
    );
}

export default About;