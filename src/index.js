import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import Login from './Pages/Login/index';
import Register from './Pages/Register/index';
import NewLocation from './Pages/Location/index';
import List from './Pages/List/index';
import ServerError from './Pages/ServerError/index';
import NotFound from './Pages/404/index';
import LocationDenied from './Pages/LocationDenied/index';
import Settings from './Pages/Settings/index';

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
            <Route exact path="/LocationDenied" component={LocationDenied} />
            <Route exact path="/settings" component={Settings} />
            <Route component={NotFound} />
        </Switch>
    </Router>
    , document.getElementById('root'));
serviceWorker.register();
