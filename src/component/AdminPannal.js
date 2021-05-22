import React from 'react';
import ExitToAppIcon from '@material-ui/icons/ExitToApp';
import '../App.css';
import axios from 'axios';
import DeleteIcon from '@material-ui/icons/Delete';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import Divider from '@material-ui/core/Divider';

export default class AdminPannal extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            arr: [],
            _id: null

        }
    }

    componentDidMount() {
        axios.get('http://localhost:5000/get').then(result => {
            this.setState({ arr: result.data });
            console.log("data received");
        }).catch(err => {
            console.log(err);
        })

    }

    submit(id) {
        if (window.confirm('Are you sure to delete this user?')) {
            axios.delete('http://localhost:5000/delete/' + id).then(result => {
                document.location.reload(true);
            }).catch(err => console.log(err));
        }
    }

    render() {
        return (
            <div className="App-body">
                <div className="App-header">
                    <h4>Hello, Admin</h4>
                    <a href="/"><ExitToAppIcon onClick={() => { localStorage.clear() }} /></a>
                </div>
                <div className="App-container">
                    <div className="App-sidebar">
                        <List component="nav" className="root" aria-label="mailbox folders">

                            <ListItem button>
                                <ListItemText primary="Dashboard" />
                            </ListItem>
                            <Divider />
                            <ListItem button>
                                <ListItemText primary="Inbox" />
                            </ListItem>
                            <Divider />
                            <ListItem button divider>
                                <ListItemText primary="Drafts" />
                            </ListItem>
                            <ListItem button>
                                <ListItemText primary="Trash" />
                            </ListItem>
                            <Divider light />
                            <ListItem button>
                                <ListItemText primary="Spam" />
                            </ListItem>
                        </List>

                    </div>
                    <div className="App-main">
                        <table border="1" width="100%">
                            <thead>
                                <tr>
                                    <th>S/N</th>
                                    <th>First Name</th>
                                    <th>Last Name</th>
                                    <th>Email</th>
                                    <th>Password</th>
                                    <th>Action</th>
                                </tr>
                            </thead>
                            <tbody>
                                {this.state.arr.map((el, i) => (
                                    <tr>
                                        <td>{i + 1}</td>
                                        <td>{el.firstname}</td>
                                        <td>{el.lastname}</td>
                                        <td>{el.email}</td>
                                        <td>{el.password}</td>
                                        <td><DeleteIcon className="App-delete" onClick={() => { this.submit(el._id) }} /></td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    </div>
                </div>
                <div className="App-footer">
                    <h6>CopyRight@2021</h6>
                </div>
            </div>
        )
    }
}

