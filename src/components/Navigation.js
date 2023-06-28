// Contains navigation links for About, Portfolio, Contact, and Resume sections.

import React from 'react';
import '../styles/Navigation.css';
import { Link, useLocation } from 'react-router-dom';

function Navigation() {
    const location = useLocation();

    return (
        <nav className="nav">
            <ul className="nav-list">
                <li className={`nav-item ${location.pathname === "/" ? "active" : ""}`}>
                    <Link to="/" className="nav-link">
                        About Me
                    </Link>
                </li>
                <li className={`nav-item ${location.pathname === "/portfolio" ? "active" : ""}`}>
                    <Link to="/portfolio" className="nav-link">
                        Portfolio
                    </Link>
                </li>
                <li className={`nav-item ${location.pathname === "/contact" ? "active" : ""}`}>
                    <Link to="/contact" className="nav-link">
                        Contact
                    </Link>
                </li>
                <li className={`nav-item ${location.pathname === "/resume" ? "active" : ""}`}>
                    <Link to="/resume" className="nav-link">
                        Resume
                    </Link>
                </li>
            </ul>
        </nav>
    );
}

export default Navigation;