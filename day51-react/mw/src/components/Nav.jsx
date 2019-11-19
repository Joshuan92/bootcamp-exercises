import React from "react";
import { Router, Link, Switch, Route, ReacDOM } from "react-router-dom";
import history from './../history.js';

const Nav = () => {

    return (
         <Router history={history}>
            <div style={{display: "flex", flexDirection: "row", margin: "10px"}}>
                <div style={{ margin: "10px"}}>
                    <Link to="/actor/:id">Bruce Willis</Link>
                </div>
                <div style={{ margin: "10px"}}>
                    <Link to="/actor/:id">Salma Hayek</Link>
                </div>
            </div>
            <Switch>
                <Route path="/actor/:id"  />
            </Switch>
        </Router>
    )
}

export default Nav;