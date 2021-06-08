import React, { Component } from "react";
import axios from 'axios';
import '../App.css';

export default class SignUp extends Component {

    constructor(props) {
        super(props);
        this.state = {
            firstname: '',
            lastname: '',
            email: '',
            password: '',
            emailMsg: '',
            passMsg: '',
            firstnameMsg: '',
            lastnameMsg: '',
            emailRegEXp: /^([a-zA-Z0-9\.-]+)@([a-zA-Z0-9]+).([a-z]{2,8})(.[a-z]{2,8})?$/,
            passRegExp: /^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#?!@$%^&*-]).{8,}$/
        }
        this.clear = this.clear.bind(this);
        this.submit = this.submit.bind(this);
    }

    clear(e) {
        switch (e.target.id) {
            case "firstname":
                this.setState({ firstnameMsg: '' });
                break;
            case "lastname":
                this.setState({ lastnameMsg: '' });
                break;
            case "email":
                this.setState({ emailMsg: '' });
                break;
            case "password":
                this.setState({ passMsg: '' });
                break;
        }

    }

    submit() {

        if (this.state.firstname) {
            if (this.state.lastname) {
                if (this.state.email) {
                    if (this.state.password) {
                        if (this.state.email.match(this.state.emailRegEXp)) {
                            if (this.state.password.match(this.state.passRegExp)) {
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
                                    } else {
                                        this.setState({
                                            emailMsg: '**This Email is already registered'
                                        });
                                    }
                                }).catch(err => console.log(err));
                            } else {
                                this.setState({
                                    passMsg: '**Password should contain at least 1 uppercase, 1 lowercase, 1 digit, 1 special symbol and minimum 8 characters'
                                });
                            }
                        } else {
                            this.setState({
                                emailMsg: '**Enter the valid email'
                            });
                        }
                    } else {
                        this.setState({
                            passMsg: '**Password should not blank'
                        });
                    }
                } else {
                    this.setState({
                        emailMsg: '**Email should not blank'
                    });
                }
            } else {
                this.setState({
                    lastnameMsg: '**Lastname should not blank'
                });
            }
        } else {
            this.setState({
                firstnameMsg: '**Firstname should not blank'
            });
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
                        id="firstname"
                        onChange={(e) => { this.setState({ firstname: e.target.value }) }}
                        onKeyDown={this.clear}
                    />
                    <span className="span">{this.state.firstnameMsg}</span>
                </div>

                <div className="form-group">
                    <label>Last name</label>
                    <input type="text"
                        className="form-control"
                        placeholder="Last name"
                        id="lastname"
                        onChange={(e) => { this.setState({ lastname: e.target.value }) }}
                        onKeyDown={this.clear}
                    />
                    <span className="span">{this.state.lastnameMsg}</span>
                </div>

                <div className="form-group">
                    <label>Email address</label>
                    <input type="email"
                        className="form-control"
                        placeholder="Enter email"
                        id="email"
                        onChange={(e) => { this.setState({ email: e.target.value }) }}
                        onKeyDown={this.clear}
                    />
                    <span className="span">{this.state.emailMsg}</span>
                </div>

                <div className="form-group">
                    <label>Password</label>
                    <input type="password"
                        className="form-control"
                        placeholder="Enter password"
                        id="password"
                        onChange={(e) => { this.setState({ password: e.target.value }) }}
                        onKeyDown={this.clear}
                    />
                    <span className="span">{this.state.passMsg}</span>
                </div>

                <button type="submit"
                    className="btn btn-primary btn-block"
                    onClick={this.submit}
                >Sign Up
                </button>

                <p className="forgot-password text-right">
                    Already registered <a href="/">sign in?</a>
                </p>
            </div>
        );
    }
}

