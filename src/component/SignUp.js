import React, { Component } from "react";
import axios from 'axios';
import '../App.css';

export default class SignUp extends Component {
    constructor(props) {
        super(props);
        this.state = [
            {
                firstname: null,
                lastname: null,
                email: null,
                password: null
            }
        ]
    }
    clear(id) {
        document.getElementById(id).innerHTML = "";
    }

    submit() {

        if (this.state.firstname) {
            if (this.state.lastname) {
                if (this.state.email) {
                    if (this.state.password) {
                        var email = this.state.email;
                        var password = this.state.password;
                        var RegEx1 = /^([a-zA-Z0-9\.-]+)@([a-zA-Z0-9]+).([a-z]{2,8})(.[a-z]{2,8})?$/;
                        var RegEx2 = /^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#?!@$%^&*-]).{8,}$/;
                        if (RegEx1.test(email)) {
                            if (RegEx2.test(password)) {
                                axios.post('http://localhost:5000/sign-up', {
                                    email: this.state.email
                                }).then(result => {
                                    if (result.data === null) {
                                        axios.post('http://localhost:5000/put', {
                                            firstname: this.state.firstname,
                                            lastname: this.state.lastname,
                                            email: this.state.email,
                                            password: this.state.password
                                        }).then(result => {
                                            axios.post('http://localhost:5000/' + this.state.email).then(res => console.log(res)).catch(err => console.log(err));
                                            alert('Sign up suceessful..');
                                            window.location.href = '/';

                                        }).catch(err => console.log(err));
                                    }
                                    else {
                                        document.getElementById("email").innerHTML = "**This Email is already registered."
                                    }

                                }).catch(err => console.log(err));
                            }
                            else {
                                document.getElementById("password").innerHTML = "**Password should contain at least 1 uppercase, 1 lowercase, 1 digit, 1 special symbol and minimum 8 characters.";
                            }
                        }
                        else {
                            document.getElementById("email").innerHTML = "**Enter Valid Email";
                        }

                    }
                    else {
                        document.getElementById('password').innerHTML = "**Password should not blank.";
                    }
                }
                else {
                    document.getElementById('email').innerHTML = "**Email should not blank.";
                }
            }
            else {
                document.getElementById('lastname').innerHTML = "**Lastname should not blank.";
            }
        }
        else {
            document.getElementById('firstname').innerHTML = "**Firstname should not blank.";
        }
    }

    render() {
        return (
            <div>
                <h3>Sign Up</h3>

                <div className="form-group">
                    <label>First name</label>
                    <input type="text"
                        className="form-control"
                        placeholder="First name"
                        onChange={(e) => { this.setState({ firstname: e.target.value }) }}
                        onKeyDown={() => this.clear("firstname")}
                    />
                    <span id="firstname"></span>
                </div>

                <div className="form-group">
                    <label>Last name</label>
                    <input type="text"
                        className="form-control"
                        placeholder="Last name"
                        onChange={(e) => { this.setState({ lastname: e.target.value }) }}
                        onKeyDown={() => this.clear("lastname")}
                    />
                    <span id="lastname"></span>
                </div>

                <div className="form-group">
                    <label>Email address</label>
                    <input type="email"
                        className="form-control"
                        placeholder="Enter email"
                        onChange={(e) => { this.setState({ email: e.target.value }) }}
                        onKeyDown={() => this.clear("email")}
                    />
                    <span id="email"></span>
                </div>

                <div className="form-group">
                    <label>Password</label>
                    <input type="password"
                        className="form-control"
                        placeholder="Enter password"
                        onChange={(e) => { this.setState({ password: e.target.value }) }}
                        onKeyDown={() => this.clear("password")}
                    />
                    <span id="password"></span>
                </div>

                <button type="submit"
                    className="btn btn-primary btn-block"
                    onClick={() => this.submit()}
                >Sign Up
                </button>

                <p className="forgot-password text-right">
                    Already registered <a href="/">sign in?</a>
                </p>
            </div >
        );
    }
}

