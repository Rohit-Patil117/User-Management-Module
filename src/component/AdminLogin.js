import React, { Component } from "react";
import axios from 'axios';
import '../App.css';

export default class AdminLogin extends Component {
    constructor(props) {
        super(props)
        this.state = [
            {
                username: null,
                password: null
            }
        ]
    }

    clear(id) {
        document.getElementById(id).innerHTML = "";
    }

    submit() {
        axios.get('http://localhost:8000/fetch').then(result => {
            var count = 0;
            console.log(result);
            result.data.map((ele) => {
                if (this.state.email === ele.email && this.state.password === ele.password) {
                    count += 1
                }
            });
            if (count === 1) {
                window.location.href = "/pannal"
            }
            else {
                document.getElementById('wrong').innerHTML = "Sorry, Wrong Credentials."
            }
        }).catch(err => {
            console.log(err);
        });
    }
    render() {
        return (
            <div>
                <h3>Admin - Log in</h3>

                <div className="form-group">
                    <label>User Name</label>
                    <input type="email" className="form-control" placeholder="Enter email"
                        onChange={(e) => { this.setState({ username: e.target.value }) }}
                        onKeyDown={() => this.clear("wrong")}
                    />
                </div>

                <div className="form-group">
                    <label>Password</label>
                    <input type="password" className="form-control" placeholder="Enter password"
                        onChange={(e) => { this.setState({ password: e.target.value }) }}
                        onKeyDown={() => this.clear("wrong")}
                    />
                </div>

                <div className="form-group">
                    <div className="custom-control custom-checkbox">
                        <input type="checkbox" className="custom-control-input" id="customCheck1" />
                        <label className="custom-control-label" htmlFor="customCheck1">Remember me</label>
                    </div>
                </div>

                <button type="submit" className="btn btn-primary btn-block"
                    onClick={() => this.submit()}
                >Submit</button>
                <p className="forgot-password text-right">
                    Forgot <a href="#">password?</a>
                </p>
                <span id="wrong"></span>
            </div>
        );
    }
}