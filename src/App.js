import React from 'react'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import './css/App.css';
import Main from './Components/User-Main'
import Navbar from './Components/Navbar'
import InputForm from './Components/Event-Input';
import Login from './Components/Login';

function App() {
  return (
  <Router>
    <Switch>
        <>
        <header> <Navbar/> </header>

        <Route exact path="/login" component={Login} />
        <Route exact path="/home" component={Main} />
        <Route exact path="/input" component={InputForm} />
        </>
    </Switch>
  </Router>
  );
}

export default App;
