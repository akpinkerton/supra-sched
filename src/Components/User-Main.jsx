import { useState, useEffect, useCallback } from 'react';
import { BrowserRouter as Router, Link } from 'react-router-dom'; //router needed is even though not used
import PersonalCal from './Personal-Cal';
import InputModal from './Input-Mod';
import Tasks from './Tasks';



function Main() {

  return (
    <div className="container-fluid page justify-content-between">

      {/* <button className="btn btn-secondary"> <Link to="/input" className="nav-link"> Add Event</Link></button> */}

      <InputModal/>

      <div className="container-fluid event-display"><div className="row">
        <div className="col-9 cal"> <PersonalCal/> </div>
        <div className="col-3 tasks"><Tasks/></div>
      </div></div>
      <button type="button" className="btn btn-primary"> Primary</button>
      <button type="button" className="btn btn-secondary"> Secondary</button>
      <button type="button" className="btn btn-danger">danger</button>
      <button type="button" className="btn btn-success"> success</button>
      <button type="button" className="btn btn-warning"> warning</button>
      <button type="button" className="btn btn-dark"> dark</button>
      <button type="button" className="btn btn-light"> light</button>


    </div>
  )
}

export default Main;