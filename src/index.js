import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import Login from './Pages/Login/index';
import Register from './Pages/Register/index';
import NewLocation from './Pages/Location/index';
import List from './Pages/List/index';
import ServerError from './Pages/ServerError/index';
import NotFound from './Pages/404/index';
import * as serviceWorker from './serviceWorker';

import { Switch, Route, Router } from 'react-router-dom';
import history from './history.js';
ReactDOM.render(
    <Router history={history}>
        <Switch>
            <Route exact={true} path="/" component={Login} />
            <Route exact path="/register" component={Register} />
            <Route exact path="/location" component={NewLocation} />
            <Route exact path="/list" component={List} />
            <Route exact path="/ServerError" component={ServerError} />
            <Route component={NotFound} />
        </Switch>
    </Router>
    , document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister();
