import { useState, useEffect, useCallback } from 'react';
import { BrowserRouter as Router, Link } from 'react-router-dom'; //router needed is even though not used
import {modal} from 'bootstrap'


function InputModal() {
  const [type, setType] = useState ('')
  const [event, setEvent] = useState('')
  const [date, setDate] = useState('')
  const [time, setTime] = useState('')
  const [location, setLocation] = useState('')
  const [attendees, setAttendees] = useState([])

  const [inputs, setInputs] = useState({})

  function handleType(e) {
    setType(e.target.id)
  }

  function handleEvent(e) {
    setEvent(e.target.value)
  }

  function handleDate(e) {
    setDate(e.target.value)
  }

  function handleTime(e) {
    setTime(e.target.value)
  }

  function handleLocation(e) {
    setLocation(e.target.value)
  }

  function handleAttendees(e) {
    setAttendees(e.target.id)
  }

  function handleSubmit(e) {
    setInputs({type:type, event:event, date:date, time:time, location:location, attendees:attendees})
    console.log(inputs);
  }
  useEffect(() => {
    function postInputs(){
      fetch("http://localhost:3001/",{
        method:"POST",
        body: JSON.stringify(inputs),
        headers: {
          "Accept":"application/json",
          "Content-Type":"application/json"
        }
      })
    }
    if (inputs !== undefined) {
      postInputs()
    }
  },[inputs]
  )

  return (
    <div className="container">

    <button type="button" className="btn btn-primary" data-bs-toggle="modal" data-bs-target="#eventInput"> Add Event</button>

    <div className="modal" id="eventInput" aria-labelledby="eventInputLabel" aria-hidden="true">
      <div className="modal-dialog">
        <div className="modal-content">

          <div className="modal-header">
            <h5>Enter Event</h5>
            <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
          </div>

          <div className="modal-body">
              <form>

                <div className="btn-group btn-group-toggle" data-toggle="buttons" onChange={handleType} >
                  <label class="btn btn-secondary active"><input type="radio" name="options" id="Event" checked/> Event </label>
                  <label class="btn btn-secondary"><input type="radio" name="options" id="Task"/> Task </label>
                </div>

                <input className="form-control mt-3" type='text' placeholder='Event Title...' onChange={handleEvent} value={event} />

                <div className='container-fluid d-flex mt-3'>
                  <input className="form-control" type='date' onChange={handleDate} value={date} />
                  <input className="form-control" type='time' onChange={handleTime} value={time} />
                </div>

                <input className="form-control mt-3" type='text' placeholder='Location...' onChange={handleLocation} value={location} />

                <div className="col-md-12 mt-3" >
                    <input type="checkbox" name="user" id="Anna" onChange={handleAttendees}/>
                    <label for="anna">Anna</label>

                    <input type="checkbox" name="user" id="Mello" onChange={handleAttendees}/>
                    <label for="mello">Mello</label>

                    <input type="checkbox" name="user" id="Briana" onChange={handleAttendees}/>
                    <label for="briana">Briana</label>

                    <input type="checkbox" name="user" id="Felix" onChange={handleAttendees}/>
                    <label for="felix">Felix</label>
                </div>
              </form>
          </div>

          <div className="modal-footer">
            <button type="button" className="btn btn-dark" data-bs-dismiss="modal">Close</button>
            <button type="button" className="btn btn-success" value='Submit' onClick={handleSubmit}>Submit</button>
        </div>
      </div>
    </div>
  </div>






    </div>
  )
}

export default InputModal;