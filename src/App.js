import './App.css';
import React from 'react';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter as Router, Route } from "react-router-dom";
import CombineComponent from './component/CombineComponent';
import AdminPannal from './component/AdminPannal';
import Home from './component/Home';
import { AdminProtected, UserProtected } from './component/Protected';


function App() {
  return (
    <Router>
      <Route exact path="/" component={CombineComponent} />
      <AdminProtected path="/pannal" component={AdminPannal} />
      <UserProtected path="/home" component={Home} />
    </Router>
  );
}

export default App;
