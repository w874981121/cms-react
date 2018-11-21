import React, {Component} from 'react';
import {HashRouter as Router} from 'react-router-dom';
// import PropTypes from 'prop-types'

import LeftNav from "../../components/left_nav";
import RouterIndex from "../../components/routers";

export default class App extends Component {
    render() {
        return (
            <Router>
                <div>
                <LeftNav/>
                <RouterIndex/>
                </div>
            </Router>
        )
    }

}
