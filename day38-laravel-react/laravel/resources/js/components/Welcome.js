import React, { Component } from 'react';
import ReactDOM from 'react-dom';

export default class Welcome extends Component {
    render() {
        return (
            <div className="container">
                <h1>Welcome</h1>
            </div>
        );
    }
}

if (document.getElementById('welcome')) {
    ReactDOM.render(<Welcome />, document.getElementById('welcome'));
}
