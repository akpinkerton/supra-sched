import React from 'react'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import './css/App.css';
import Main from './Components/User-Main'
import Navbar from './Components/Navbar'
import Login from './Components/Login';
import Sandbox from './Components/00-Sandbox'
import bg from './local-storage/bg.jpeg'

function App() {
  return (
  <Router>
    <Switch>
        <div className="app">
        <header> <Navbar/> </header>

        <div class="div-one"></div>

<div class="div-two" ></div>


<div class="overlay"></div>

        <Route exact path="/login" component={Login} />
        <Route exact path="/home" component={Main} />
        <Route exact path="/sandbox" component={Sandbox} />

        </div>
    </Switch>
  </Router>
  );
}

export default App;
