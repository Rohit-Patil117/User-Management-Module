import React, { Component } from "react";
import axios from 'axios';
import '../App.css'


export default class Login extends Component {

    constructor(props) {
        super(props)
        this.state = {
            email: '',
            password: '',
            errEmail: '',
            errPass: '',
            errMsg: ''
        }
        this.clear = this.clear.bind(this);
        this.submit = this.submit.bind(this);
    }

    clear(e) {
        switch (e.target.id) {
            case "email":
                this.setState({ errEmail: '', errMsg: '' });
                break;
            case "password":
                this.setState({ errPass: '', errMsg: '' });
                break;
        }
    }

    submit() {
        if (this.state.email) {
            if (this.state.password) {
                axios.post('http://localhost:5000/login', {
                    email: this.state.email,
                    password: this.state.password
                }).then(result => {
                    if (result.data === null) {
                        this.setState({
                            errMsg: 'Sorry, Wrong Credentials'
                        });
                    }
                    else {
                        localStorage.setItem('user-login', true);
                        window.location.href = "/home";
                        //console.log(this.props.history.push('/admin-login'));
                    }
                }).catch(err => {
                    console.log(err);
                });
            } else {
                this.setState({
                    errPass: '**Password should not blank'
                });
            }
        } else {
            this.setState({
                errEmail: '**Email should not blank'
            });
        }
    }

    render() {
        return (
            <div>
                <h3>Sign In</h3>

                <div className="form-group">
                    <label>Email address</label>
                    <input type="email"
                        className="form-control"
                        placeholder="Enter email"
                        id="email"
                        onChange={(e) => { this.setState({ email: e.target.value }) }}
                        onKeyDown={this.clear}
                    />
                    <span className="span">{this.state.errEmail}</span>
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
                    <span className="span">{this.state.errPass}</span>
                </div>

                <div className="form-group">
                    <div className="custom-control custom-checkbox">
                        <input type="checkbox"
                            className="custom-control-input"
                            id="customCheck1"
                        />
                        <label className="custom-control-label"
                            htmlFor="customCheck1"
                        >Remember me
                        </label>
                    </div>
                </div>

                <button type="submit"
                    className="btn btn-primary btn-block"
                    onClick={this.submit}
                >Submit</button>

                <p className="forgot-password text-right">
                    Forgot <a href="/">password?</a>
                </p>
                <span className="span">{this.state.errMsg}</span>
            </div>
        );
    }
}