import { useState, useEffect, useCallback } from 'react';
import { BrowserRouter as Router, Link } from 'react-router-dom'; //router needed is even though not used
import PersonalCal from './Personal-Cal';
import InputModal from './Input-Mod';




function Main() {

  return (
    <div className="container-fluid page justify-content-between">

      {/* <button> <Link to="/input" className="nav-link"> Add Event</Link></button> */}

      <InputModal/>

      <p><PersonalCal/></p>

    </div>
  )
}

export default Main;