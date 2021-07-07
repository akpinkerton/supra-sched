import { useState, useEffect } from 'react';
//var username = require('../local-storage/login.db.json')
        //or another way to access username login storage
//import data from '../local-storage/login.db.json'

function Login() {
  const [name, setName] = useState ('')



  function handleName(e) {
    setName(e.target.value)
  }

  /*  function handleSubmit(e) {
    setInputs({
      name:name,
  //const filteredName = data.filter((obj)=>obj.username === 'name';
    console.log(filteredName);
  } */

  return (
    <div>
      <div className="form-holder row">
        <h1>Hi, what's your name?</h1>
        <form>

          <input className="form-control" type='text' placeholder='Name...' onChange={handleName} value={name} />

          <input type="button" value="Submit" className="btn btn-dark mt-3"   />
        </form>
      </div>
    </div>
  )
}

export default Login;


//input >> onClick={handleSubmit}>Submit
/* router.get('/', function(req, res, next) {

  if(req.query.username){
    console.log(req.query.username)
    const filteredName = login-db.filter((obj)=>obj.title.includes(req.query.username)
    );
    res.send(filteredName)
  } else {
    res.status(404).send('Username not found')
  }
}); */

