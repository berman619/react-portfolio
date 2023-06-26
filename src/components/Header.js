// Contains my name and the Navigation component.

import React from 'react';
import '../styles/Header.css';
import Navigation from './Navigation';

function Header() {
    return (
        <header className="header">
            <h1>Zach Berger</h1>
            <Navigation />
        </header>
    );
}

export default Header;
