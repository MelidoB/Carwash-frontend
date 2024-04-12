import React from 'react';


import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import HomePage from './components/HomePage';
import SignIn from './components/SignIn';
import SignUp from './components/SignUp';
import UserDashboard from './components/UserDashboard';
import './App.css';
import RepairService from './components/RepairService';
import 'bootstrap/dist/css/bootstrap.min.css'; // Import Bootstrap CSS
import 'bootstrap/dist/js/bootstrap.min.js'

import IndividualCompanyPage from './components/companyTemplate';

function App() {
  return (
    <Router>
      <Switch>
        <Route exact path="/" component={HomePage} />
        <Route path="/signin" component={SignIn} />
        <Route path="/signup" component={SignUp} />
        <Route path="/dashboard" component={UserDashboard} />
        <Route path='/repairservice' component={RepairService}/>
        <Route path='/company/:companyName' component={IndividualCompanyPage}/>

      </Switch>
    </Router>
  );
}

export default App;
