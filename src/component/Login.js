import React, { Component } from "react";
import axios from 'axios';
import '../App.css'


export default class Login extends Component {
    constructor(props) {
        super(props)
        this.state = [
            {
                email: null,
                password: null
            }
        ]
    }

    clear(id) {
        document.getElementById(id).innerHTML = "";
    }

    submit() {
        axios.post('http://localhost:5000/login', {
            email: this.state.email,
            password: this.state.password
        }).then(result => {
            if (result.data === null) {
                document.getElementById('wrong').innerHTML = 'Sorry, Wrong Credentials.';
            }
            else {
                localStorage.setItem('user-login', true);
                window.location.href = "/home";
            }
        }).catch(err => {
            console.log(err); 
        });
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
                        onChange={(e) => { this.setState({ email: e.target.value }) }}
                        onKeyDown={() => this.clear("wrong")}
                    />
                </div>

                <div className="form-group">
                    <label>Password</label>
                    <input type="password"
                        className="form-control"
                        placeholder="Enter password"
                        onChange={(e) => { this.setState({ password: e.target.value }) }}
                        onKeyDown={() => this.clear("wrong")}
                    />
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
                    onClick={() => this.submit()}
                >Submit</button>

                <p className="forgot-password text-right">
                    Forgot <a href="/">password?</a>
                </p>
                <span id="wrong"></span>
            </div>
        );
    }
}