import React from 'react';
import { Route } from 'react-router-dom';
import Login from './Login';
import Profile from './Profile';
import Signup from './Signup';

const Routes = ({ match }) => {
    return (
        <>
            <Route exact path={match.url + '/login/'} component={Login} />
            <Route exact path={match.url + '/profile/'} component={Profile} />
            <Route exact path={match.url + '/signup/'} component={Signup} />
        </>
    );
};

export default Routes;
