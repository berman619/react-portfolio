// Contains navigation links for About, Portfolio, Contact, and Resume sections.

import React from 'react';
import '../styles/Navigation.css';
import { Link, useLocation } from 'react-router-dom';

function Navigation() {
    const location = useLocation();

    return (
        <nav className="nav">
            <ul className="nav">
                <li className="nav-item">
                    <Link to="/" className={`nav-link ${location.pathname === "/" ? "active" : ""}`}>
                        About Me
                    </Link>
                </li>
                <li className="nav-item">
                    <Link to="/portfolio" className={`nav-link ${location.pathname === "/portfolio" ? "active" : ""}`}>
                        Portfolio
                    </Link>
                </li>
                <li className="nav-item">
                    <Link to="/contact" className={`nav-link ${location.pathname === "/contact" ? "active" : ""}`}>
                        Contact
                    </Link>
                </li>
                <li className="nav-item">
                    <Link to="/resume" className={`nav-link ${location.pathname === "/resume" ? "active" : ""}`}>
                        Resume
                    </Link>
                </li>
            </ul>
        </nav>
    );
}

export default Navigation;