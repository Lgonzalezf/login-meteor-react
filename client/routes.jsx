import React from 'react';
import ReactDOM from 'react-dom';
import {Router, Route, IndexRoute, browserHistory} from 'react-router';


import  mainLayout from './components/layouts/mainLayout';
import  Home from './components/home/home';
import  About from './components/about/about';
import  Login from './components/login/login';
import  Register from './components/login/register';

const routes = (
    <Router history={browserHistory}>
        <Route path="/" component={mainLayout}>
            <IndexRoute   component={Home}>
            </IndexRoute>
            <Route path="about" component={About}>
            </Route>
            <Route path="login" component={Login}>
            </Route>
            <Route path="register" component={Register}>
            </Route>
        </Route>
    </Router>
);

Meteor.startup(()=>{
    ReactDOM.render(routes,document.querySelector('.render-target'))
});