// Contains links to my GitHub, LinkedIn, and a third platform (like Stack Overflow or Twitter).

import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faGithub, faLinkedin, faTwitter } from '@fortawesome/free-brands-svg-icons'
import './Footer.css';

function Footer() {
    return (
        <div className="footer">
            <a href="https://github.com/berman619" target="_blank" rel="noreferrer">
                <FontAwesomeIcon icon={faGithub} size="2x" />
            </a>
            <a href="https://linkedin.com/in/zachhberger" target="_blank" rel="noreferrer">
                <FontAwesomeIcon icon={faLinkedin} size="2x" />
            </a>
            <a href="https://twitter.com/thezachberger" target="_blank" rel="noreferrer">
                <FontAwesomeIcon icon={faTwitter} size="2x" />
            </a>
        </div>
    );
}

export default Footer;
