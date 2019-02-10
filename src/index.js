import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import Login from './Pages/Login/index';
import Register from './Pages/Register/index';
import NewLocation from './Pages/Location/index';
import List from './Pages/List/index';
import * as serviceWorker from './serviceWorker';

import { Switch, Route, Router } from 'react-router-dom';
import history from './history.js';
ReactDOM.render(
    <Router history={history}>
        <Switch>
            <Route exact={true} path="/" component={Login} />
            <Route path="/register" component={Register} />
            <Route path="/location" component={NewLocation} />
            <Route path="/list" component={List} />
        </Switch>
    </Router>
    , document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister();
