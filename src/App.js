import React from 'react'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import './css/App.css';
import Main from './Components/User-Main'
import Navbar from './Components/Navbar'
import InputForm from './Components/archive/Event-Input';
import Login from './Components/Login';
import InputModal from './Components/Input-Mod';

function App() {
  return (
  <Router>
    <Switch>
        <>
        <header> <Navbar/> </header>

        <Route exact path="/login" component={Login} />
        <Route exact path="/home" component={Main} />
        <Route exact path="/input" component={InputForm} />
        <Route exact path="/modal" component={InputModal} />

        </>
    </Switch>
  </Router>
  );
}

export default App;
