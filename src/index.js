import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Route } from "react-router-dom";
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import AdminPannal from './component/AdminPannal';
import Home from './component/Home';

ReactDOM.render(
  <BrowserRouter>
    <Route exact path="/" component={App}></Route>
    <Route exact path="/pannal" component={AdminPannal}></Route>
    <Route exact path="/home" component={Home}></Route>
  </BrowserRouter>,
  
  document.getElementById('root')
); 

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
