import React from 'react';
import {Route, Redirect} from 'react-router-dom';

function PrivateRoute({component: Component, ...rest}) {
    const token = JSON.parse(localStorage.getItem('bubbles'));
    if (token) {
        return <Route {...rest} render={()=> <Component />} />
    }
    return <Redirect to='/' />
}

export default PrivateRoute;
