import { useState, useEffect } from 'react';
import Moment from 'react-moment';
import '../css/display.css'

function PersonalCal() {

  const[events, setEvents] = useState([]);

  async function getEvents() {
    await fetch('http://localhost:3002/events')
    .then(res => res.json())
    .then(res => setEvents(res))
  }

  function deleteEvent(e) {
    console.log('DELETE')
    fetch('http://localhost:3002/events', {
      method: 'DELETE',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ id: e.target.id, name: e.target.name})
    })
  }

  useEffect(() => {
    getEvents();
  }, [])

  return (
    <div className="container pers-cal">
      <h1 className="border-bottom">Your Events </h1>
      {events.filter(inputs => inputs.type === "event")
      .map(event =>
          <div className="event" id={event.availability}>
            <div className="container-fluid event-side-color col-3" id={event.availability}>
              <span className='event-date'><Moment format="DD MMMM">{event.startDate}</Moment></span>
              <div className='event-time'>{`${event.startTime} - ${event.endTime}`}</div>
      	  	</div>

            <div className="container d-flex justify-content-between event-info" id={event.availability}>
              <div className="row m-0 col-8">
                  <div className='event-title'>{event.eventTitle}</div>
                  <div className="container-fluid d-flex justify-content-between details">
                      <span className="text-lowercase">{event.location}</span>
                      <span>{`${Object.keys(event.attendees)}`} </span>
                  </div>
              </div>
              <div className="container text-right">
              <form onSubmit={deleteEvent} id={event.id} name={event.eventTitle}><button className="btn btn-info mt-1" type='submit'>Delete Event</button></form>
              </div>
            </div>
	        </div>
      )}
    </div>
  )
}

export default PersonalCal;