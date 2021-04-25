import React from "react";
import '../App.css';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import Divider from '@material-ui/core/Divider';
import ExitToAppIcon from '@material-ui/icons/ExitToApp';
import img1 from './static/assignment_05.jpg';
import img2 from './static/assignment_08.jpg';
import img3 from './static/assignment_10.jpg';
import img4 from './static/assignment_16.jpg';
import img5 from './static/assignment_17.jpg';
import img6 from './static/assignment_18.jpg';
import logo from './static/logo.png';


export default class Home extends React.Component {

    render() {
        return (
            <div className="Home-body">
                <div className="App-header">
                    <img src={logo}></img>
                    <a href="/"><ExitToAppIcon /></a>
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
                        <img src={img1}></img>
                        <img src={img2}></img>
                        <img src={img3}></img>
                        <img src={img4}></img>
                        <img src={img5}></img>
                        <img src={img6}></img>
                    </div>
                </div>
                <div className="App-footer">
                    <h6>CopyRight@2021</h6>
                </div>

            </div>
        )
    }
}