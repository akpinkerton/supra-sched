import React from 'react'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import './css/App.css';
import Main from './Components/User-Main'
import Navbar from './Components/Navbar'
import Login from './Components/Login';
import Sandbox from './Components/00-Sandbox'

function App() {
  return (
  <Router>
    <Switch>
        <>
        <header> <Navbar/> </header>

        <Route exact path="/login" component={Login} />
        <Route exact path="/home" component={Main} />
        <Route exact path="/sandbox" component={Sandbox} />

        </>
    </Switch>
  </Router>
  );
}

export default App;
