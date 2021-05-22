import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Route } from "react-router-dom";
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import AdminPannal from './component/AdminPannal';
import Home from './component/Home';
import {AdminProtected, UserProtected} from './component/Protected';

ReactDOM.render(
  <BrowserRouter>
    <Route exact path="/" component={App} />
    <AdminProtected path="/pannal" component={AdminPannal} />
    <UserProtected path="/home" component={Home} />
  </BrowserRouter>,

  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
