import { BrowserRouter as Router, Link } from 'react-router-dom'; //router needed is even though not used
import PersonalCal from './Personal-Cal';
import InputModal from './Input-Mod';
import Tasks from './Tasks';



function Main() {

  return (
    <div className="container-fluid page justify-content-between">

      <InputModal/>

      <div className="container-fluid event-display"><div className="row">
        <div className="col-9 cal"> <PersonalCal/> </div>
        <div className="col-3 tasks"><Tasks/></div>
      </div></div>
    </div>
  )
}

export default Main;