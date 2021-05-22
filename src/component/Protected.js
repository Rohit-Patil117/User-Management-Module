import React from 'react';
import { Redirect, Route } from 'react-router-dom'; 

const AdminProtected = ({ component: Cmp, ...rest }) => ( 
    <Route
        {...rest}
        render={(props) =>
            localStorage.getItem('admin-login') ? (<Cmp {...props} />) : <Redirect to="/" />
        }
    />
)

const UserProtected = ({ component: Cmp, ...rest }) => (
    <Route
        {...rest}
        render={(props) =>
            localStorage.getItem('user-login') ? (<Cmp {...props} />) : <Redirect to="/" />
        }
    />
)

export {AdminProtected, UserProtected}