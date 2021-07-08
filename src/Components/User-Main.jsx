import { BrowserRouter as Router, Link } from 'react-router-dom'; //router needed is even though not used
import PersonalCal from './Personal-Cal';
import InputModal from './Input-Mod';
import Tasks from './Tasks';



function Main() {

  return (<>
    <div className="container-fluid page">

      <InputModal/>

      <div className="container-fluid justify-content-between d-flex flex-wrap">
        <div className="col-9"> <PersonalCal/> </div>
        <div className="col-3"><Tasks/></div>
      </div>
    </div>

  </>)
}

export default Main;