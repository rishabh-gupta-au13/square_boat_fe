
import './App.css';
import React, { useState } from 'react';
import Login from "./modules/login"

import Register from "./modules/register_user"

import Dashboard from "./modules/dashboard"

import Orders from "./modules/orders"

import Add_product from './modules/add_product';



import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'

function App() {
  return (
    <div className="App">
         <Router>




<div >
  <Switch>

    {/* <Route exact path='/' component={Login} /> */}

    <Route path="/dashboard">
      <Dashboard />
    </Route>

    <Route path="/login">
      <Login />
    </Route>

    <Route path="/orders">
      <Orders />
    </Route>

    
    <Route path="/register">
      <Register />
    </Route>

    

    <Route path="/add_product">
      <Add_product />
    </Route>


    <Route path="/">
      <Login />
    </Route>

    



  </Switch>
</div>
</Router>
    </div>
  );
}

export default App;
