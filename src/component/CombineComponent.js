import React from 'react';
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import Login from "./Login";
import SignUp from "./SignUp";
import AdminLogin from "./AdminLogin";


function CombineComponent() {
    return (
        <Router>
            <div className="App">
                <nav className="navbar navbar-expand-lg navbar-light">
                    <div className="container">
                        <Link className="navbar-brand font-weight-bold" to={"/"}>User Management</Link>
                        <div className="collapse navbar-collapse" id="navbarTogglerDemo02">
                            <ul className="navbar-nav ml-auto">
                                <li className="nav-item">
                                    <Link className="nav-link text-dark font-weight-bold" to={"/sign-in"}>Login</Link>
                                </li>
                                <li className="nav-item">
                                    <Link className="nav-link text-dark font-weight-bold" to={"/sign-up"}>Sign up</Link>
                                </li>
                                <li className="nav-item">
                                    <Link className="nav-link text-dark font-weight-bold" to={"/admin-login"}>Admin</Link>
                                </li>
                            </ul>
                        </div>
                    </div>
                </nav>

                <div className="auth-wrapper">
                    <div className="auth-inner">
                        <Switch>
                            <Route exact path="/" component={Login} />
                            <Route path="/sign-in" component={Login} />
                            <Route path="/sign-up" component={SignUp} />
                            <Route path="/admin-login" component={AdminLogin} />
                        </Switch>
                    </div>
                </div>
            </div></Router>
    );
}

export default CombineComponent;
