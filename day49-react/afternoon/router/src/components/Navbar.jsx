import React from 'react'

import {  useState, Router, Link, ReacDOM, Route, Switch } from 'react-router-dom'

import history from './history.js'

import Home from './subfiles/Home.jsx'
import Contact from './subfiles/Contact.jsx'
import Portfolio from './subfiles/Portfolio.jsx'


// const formStyle = { display: "flex", flexDirection: "column", height: '300px', width:  '300px', alignItems: 'space-between'}
// const divStyle = { display: "flex", width:  '300px', justifyContent: 'space-between' }
// const buttonStyle = { border: '1px solid blue', margin: '5px'}

const Navbar = props => {
  
  return (
     <Router history={history}>
        <ul>
            <li>
                <Link to="/">Home</Link>
            </li>
            <li>
                <Link to="/contact">Contact</Link>
            </li>
            <li>
                <Link to="/portfolio/6">Portfolio</Link>
            </li>
        </ul>
        <Switch>
            <Route exact path="/" component={Home} />
            <Route path="/portfolio/:id" component={Portfolio} />
            <Route path="/contact" component={Contact} />
        </Switch>
    </Router>
);
};

export default Navbar;