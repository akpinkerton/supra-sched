import { useState, useEffect } from 'react';
import { BrowserRouter as Router, Link } from 'react-router-dom'; //router needed is even though not used
import TimeSelector from './Time-Selector';
import {modal} from 'bootstrap'


function InputModal() {
  const today = new Date();
  const month = today.getMonth()+1;
  const day = today.getDate();
  const year = today.getFullYear();
  const newDate = `${year}-${month}-${day}`
  console.log(`Today's reformattted date: ${year}-${month}-${day}`)
  const [type, setType] = useState ('')
  const [event, setEvent] = useState('')
  const [startDate, setStartDate] = useState('2021-07-06')
  const [startTime, setStartTime] = useState('07:00')
  const [endDate, setEndDate] = useState('2021-07-16')
  const [duration, setDuration] = useState('Duration')
  const [location, setLocation] = useState('')
  const [availability, setAvailability] = useState('')
  const [attendees, setAttendees] = useState({
    Anna: false,
    Mello: false,
    Briana: false,
    Felix: false
  })
  let endTime = ''

  const [inputs, setInputs] = useState({})

  function handleType(e) {
    setType(e.target.id)
  }

  function handleEvent(e) {
    setEvent(e.target.value)
  }

  function handleStartDate(e) {
    setStartDate(e.target.value)
  }

  function handleStartTime(e) {
    setStartTime(e.target.value)
  }

  function handleEndDate(e) {
    setEndDate(e.target.value)
  }

  function handleDuration(e) {
    setDuration(e.target.id)
    setEndTime();
  }

  function setEndTime() {
    if(duration === '30 min'){
      console.log(parseInt(startTime))
    }
  }

  function handleLocation(e) {
    setLocation(e.target.value)
  }

  function handleAvail(e) {
    setAvailability(e.target.id)
  }

  function handleSubmit(e) {
    setInputs({
      type:type,
      event:event,
      startDate:startDate,
      startTime:window.sessionStorage.getItem('time'),
      endDate: endDate,
      endTime: endTime,
      location:location,
      availability: availability,
      attendees:attendees})
    console.log("Type: ", inputs.type);
    console.log("Avail: ", inputs.availability);
    console.log("Attendees: ", inputs.attendees);
    console.log("Start Date Entered: ", inputs.startDate)
    console.log(window.sessionStorage.getItem('time'))
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

    <button type="button" className="btn-hover add-event" data-bs-toggle="modal" data-bs-target="#eventInput"><i className= "fas fa-plus"></i>    Add Event</button>

    <div className="modal" id="eventInput" aria-labelledby="eventInputLabel" aria-hidden="true">
      <div className="modal-dialog">
        <div className="modal-content">

          <div className="modal-header">
            <h5>Enter Event</h5>
            <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
          </div>

          <div className="modal-body">
              <form>

                <div className="container btn-group btn-group-toggle mt-3" data-toggle="buttons" onChange={handleType} >
                    <input type="radio" className="btn-check"name="options" id="event" />
                    <label className="btn btn-secondary" for="event">Event</label>

                    <input type="radio" className="btn-check"name="options" id="task" />
                    <label className="btn btn-secondary" for="task">Task</label>
                </div>


                <div className='container-fluid d-flex mt-3'>
                  <p className="col-2">Event:</p>
                  <input className="form-control action-event" type='text' placeholder='Event Title...' onChange={handleEvent} value={event} />
                </div>


                <div className='container-fluid d-flex mt-3'>
                  <p className="col-2">Start:</p>
                  <input className="form-control action-start" type='date' onChange={handleStartDate} value={startDate} />
                </div>

  <TimeSelector/>

                <div className='container-fluid d-flex mt-3'>
                  <p className="col-2">End:</p>
                  <input className="form-control" type='date' onChange={handleEndDate} value={endDate} />
                  {/* <input className="form-control" type='time' onChange={handleEndTime} value={endTime} /> */}
                  <div className= "dropdown">
                    <button className= "btn btn-secondary dropdown-toggle" type="button" id="dropdownMenuButton" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                      {duration}
                    </button>
                    <ol className= "dropdown-menu" aria-labelledby="dropdownMenuButton">
                      <li className= "dropdown-item" id='30 min' onClick={handleDuration}>30 min</li>
                      <li className= "dropdown-item" id='1 hr' onClick={handleDuration}>1 hr</li>
                      <li className= "dropdown-item" id='1 hr 30 min' onClick={handleDuration}>1 hr 30 min</li>
                      <li className= "dropdown-item" id='2 hr' onClick={handleDuration}>2 hrs</li>
                    </ol>
                  </div>
                </div>

                <div className='container-fluid d-flex mt-3'>
                  <p className="col-2">Location:</p>
                  <input className="form-control" type='text' placeholder='Location...' onChange={handleLocation} value={location} />
                </div>

                <div className="container btn-group btn-group-toggle mt-3" data-toggle="buttons" onChange={handleAvail} >
                    <input type="radio" className="btn-check" name="availability" id="busy" />
                    <label className="btn btn-secondary" for="busy">Busy</label>

                    <input type="radio" className="btn-check" name="availability" id="free" />
                    <label className="btn btn-secondary" for="free">Free</label>
                </div>


                <div className="col-md-12 d-flex justify-content-around mt-3" >
                <input type="checkbox" className="btn-check" name="attendee" onChange={() => {
                  setAttendees({ ...attendees, anna: !attendees.anna })
                }} id="anna" />
                <label className="btn btn-primary" for="anna">Anna</label>

                <input type="checkbox" className="btn-check" onChange={() => {
                  setAttendees({ ...attendees, briana: !attendees.briana })
                }} name="attendee" id="briana" />
                <label className="btn btn-primary" for="briana">Briana</label>

                <input type="checkbox" className="btn-check" onChange={() => {
                  setAttendees({ ...attendees, felix: !attendees.felix })
                }} name="attendee" id="felix" />
                <label className="btn btn-primary" for="felix">Felix</label>

                <input type="checkbox" className="btn-check" onChange={() => {
                  setAttendees({ ...attendees, mello: !attendees.mello })
                }} name="attendee" id="mello" />
                <label className="btn btn-primary" aria-pressed="true" for="mello">Mello</label>
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