import React, { Component } from "react";
import axios from 'axios';
import '../App.css';

export default class AdminLogin extends Component {

    constructor(props) {
        super(props)
        this.state = {
            username: '',
            password: '',
            errUser: '',
            errPass: '',
            errMsg: ''
        }
        this.submit = this.submit.bind(this);
        this.clear = this.clear.bind(this);
    }

    clear(e) {
        switch(e.target.id){
            case "username":
                this.setState({ errUser: '' });
                this.setState({ errMsg: '' });
                break;
            case "password":
                this.setState({ errPass: '' });
                this.setState({ errMsg: '' });
                break;
        }
    }

    submit() {
        if (this.state.username) {
            if (this.state.password) {
                axios.post('http://localhost:8000/admin-login', {
                    username: this.state.username,
                    password: this.state.password
                }).then(result => {
                    if (result.data === null) {
                        this.setState({
                            errMsg: 'Sorry, Wrong credentials..'
                        });
                    }
                    else {
                        localStorage.setItem('admin-login', true);
                        window.location.href = '/pannal';
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
                errUser: '**UserName Should not blank'
            });
        }
    }

    render() {
        return (
            <div>
                <h3>Admin - Log in</h3>

                <div className="form-group">
                    <label>User Name</label>
                    <input type="text"
                        className="form-control"
                        placeholder="Enter username"
                        id="username"
                        onChange={(e) => { this.setState({ username: e.target.value }) }}
                        onKeyDown={this.clear}
                    />
                    <span className="span">{this.state.errUser}</span>
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
                >Submit
                </button>

                <p className="forgot-password text-right">
                    Forgot <a href="/">password?</a>
                </p>

                <span className="span">{this.state.errMsg}</span>
            </div>
        );
    }
}
