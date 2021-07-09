/* eslint-disable jsx-a11y/alt-text */
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
      <div className="container-fluid">

        <h1 className='navbar-brand'>
          <Link to="/Home" className="nav-link">
          <img src="https://fontmeme.com/permalink/210708/bd7e34d2e5c601e9097fb2da1c27629b.png" alt="star-trek-font" border="0"/>
          </Link>
        </h1>


        <ul className="navbar-nav">
          {/* <li className="nav-item"> <Link to="/link1" className="nav-link"> LINK 1</Link></li> */}

          {/* <li className="nav-item"> <Link to="/sandbox" className="nav-link"> SANDBOX</Link></li> */}

          <li className="nav-item"> <Link to="/login" className="nav-link"> Login</Link></li>
        </ul>
      </div>
    </nav>
  )
}

export default Navbar;