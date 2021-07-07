import { useState, useEffect, useCallback } from 'react';
import { BrowserRouter as Router, Link } from 'react-router-dom'; //router needed is even though not used
import TimePicker from './Time-Picker';
import {modal} from 'bootstrap'


function InputModal() {
  const [type, setType] = useState ('')
  const [event, setEvent] = useState('')
  const [startDate, setStartDate] = useState('')
  const [startTime, setStartTime] = useState('')
  const [endDate, setEndDate] = useState('')
  const [endTime, setEndTime] = useState('')
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

  function handleAttendees(e) {
    setAttendees(e.target.id)
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

                <div className="btn-group btn-group-toggle" data-toggle="buttons" onChange={handleType} >
                  <label class="btn btn-secondary active"><input type="radio" name="options" id="event"/> Event </label>
                  <label class="btn btn-secondary"><input type="radio" name="options" id="task"/> Task </label>
                </div>

                <input className="form-control mt-3" type='text' placeholder='Event Title...' onChange={handleEvent} value={event} />


                <div className='container-fluid d-flex mt-3'>
                  <p>Start:</p>
                  <input className="form-control" type='date' onChange={handleStartDate} value={startDate} />
                  <input className="form-control" type='time' onChange={handleStartTime} value={startTime} />
                </div>

                <div className='container-fluid d-flex mt-3'>
                  <p>End:</p>
                  <input className="form-control" type='date' onChange={handleEndDate} value={endDate} />
                  <input className="form-control" type='time' onChange={handleEndTime} value={endTime} />
                </div>

                {/* <TimePicker/> */}

                <input className="form-control mt-3" type='text' placeholder='Location...' onChange={handleLocation} value={location} />


                <div className="btn-group btn-group-toggle" data-toggle="buttons" onChange={handleAvail} >
                  <label class="btn btn-secondary active"><input type="radio" name="avail" id="Busy"/> Busy </label>
                  <label class="btn btn-secondary"><input type="radio" name="avail" id="Free"/> Free </label>
                </div>

                <div className="col-md-12 d-flex justify-content-around" >
                <input type="checkbox" className="btn-check" name="category" onChange={() => {
                  setAttendees({ ...attendees, anna: !attendees.anna })
                }} id="anna" />
                <label className="btn btn-primary" for="anna">anna</label>

                <input type="checkbox" className="btn-check" onChange={() => {
                  setAttendees({ ...attendees, briana: !attendees.briana })
                }} name="category" id="briana" />
                <label className="btn btn-primary" for="briana">briana</label>

                <input type="checkbox" className="btn-check" onChange={() => {
                  setAttendees({ ...attendees, felix: !attendees.felix })
                }} name="category" id="felix" />
                <label className="btn btn-primary" for="felix">felix</label>

                <input type="checkbox" className="btn-check" onChange={() => {
                  setAttendees({ ...attendees, mello: !attendees.mello })
                }} name="category" id="mello" />
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