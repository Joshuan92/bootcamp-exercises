import React from 'react'
import history from './../history.js'
import Friend from './../subfiles/Friend.jsx'

import {  useState, Router, Link, ReacDOM, Route, Switch } from 'react-router-dom'

const Contact = props => {

    console.log(history);
    



    return (

        <Router history={history}>
        <ul>
            <li>
                <Link to="/contact/friends/1">Friend 1</Link>
            </li>
            <li>
                <Link to="/contact/friends/2">Friend 2</Link>
            </li>
            <li>
                <Link to="/contact/friends/3">Friend 3</Link>
            </li>
        </ul>
        <Switch>
            <Route path="/contact/friends/:id" component={Friend} />
        </Switch>
    </Router>
    )
};

export default Contact;