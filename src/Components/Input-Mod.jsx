import { useState, useEffect } from 'react';
import { BrowserRouter as Router, Link } from 'react-router-dom'; //router needed is even though not used
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
  const [endTime, setEndTime] = useState('17:00')
  const [location, setLocation] = useState('')
  const [availability, setAvailability] = useState('')
  const [attendees, setAttendees] = useState({
    Anna: false,
    Mello: false,
    Briana: false,
    Felix: false
  })

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

  function handleEndTime(e) {
    setEndTime(e.target.value)
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
      startTime:startTime,
      endDate: endDate,
      endTime: endTime,
      location:location,
      availability: availability,
      attendees:attendees})
    console.log("Type: ", inputs.type);
    console.log("Avail: ", inputs.availability);
    console.log("Attendees: ", inputs.attendees);
    console.log("Start Date Entered: ", inputs.startDate)
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

    <button type="button" className="btn-hover add-event" data-bs-toggle="modal" data-bs-target="#eventInput"><i class="fas fa-plus"></i>    Add Event</button>

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
                  <input className="form-control" type='text' placeholder='Event Title...' onChange={handleEvent} value={event} />
                </div>


                <div className='container-fluid d-flex mt-3'>
                  <p className="col-2">Start:</p>
                  <input className="form-control" type='date' onChange={handleStartDate} value={startDate} />
                  <input className="form-control" type='time' onChange={handleStartTime} value={startTime} />
                </div>

                <div className='container-fluid d-flex mt-3'>
                  <p className="col-2">End:</p>
                  <input className="form-control" type='date' onChange={handleEndDate} value={endDate} />
                  <input className="form-control" type='time' onChange={handleEndTime} value={endTime} />
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
                <label className="btn btn-primary" for="anna">anna</label>

                <input type="checkbox" className="btn-check" onChange={() => {
                  setAttendees({ ...attendees, briana: !attendees.briana })
                }} name="attendee" id="briana" />
                <label className="btn btn-primary" for="briana">briana</label>

                <input type="checkbox" className="btn-check" onChange={() => {
                  setAttendees({ ...attendees, felix: !attendees.felix })
                }} name="attendee" id="felix" />
                <label className="btn btn-primary" for="felix">felix</label>

                <input type="checkbox" className="btn-check" onChange={() => {
                  setAttendees({ ...attendees, mello: !attendees.mello })
                }} name="attendee" id="mello" />
                <label className="btn btn-primary" aria-pressed="true" for="mello">mello</label>
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