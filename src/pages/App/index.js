import React, {Component} from 'react';

import {Link} from 'react-router-dom';

export default class App extends Component {

    render() {
        return (
            <div>
                <h1>App</h1>
                <ul>
                    <li><Link to="/home">Home</Link></li>
                    <li><Link to="/content">About</Link></li>
                </ul>
                {this.props.children}
            </div>
        );
    }
}