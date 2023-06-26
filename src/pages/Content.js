// Main component for conditionally rendering different pages based on route.

import React from 'react';
import { Route, Switch, Redirect } from 'react-router-dom';
import About from './About';
import Portfolio from './Portfolio';
import Contact from './Contact';
import Resume from './Resume';

function Content() {
    return (
        <Switch>
            <Route exact path="/" component={About} />
            <Route exact path="/portfolio" component={Portfolio} />
            <Route exact path="/contact" component={Contact} />
            <Route exact path="/resume" component={Resume} />
            <Redirect to="/" />
        </Switch>
    );
}

export default Content;