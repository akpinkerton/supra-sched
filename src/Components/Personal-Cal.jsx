import { useState, useEffect } from 'react';
import Moment from 'react-moment';
import '../css/display.css'

function PersonalCal() {

  const[events, setEvents] = useState([]);

  async function getEvents() {
    await fetch('http://localhost:3001/')
    .then(res => res.json())
    .then(res => setEvents(res))
  }

  function deleteEvent(e) {
    console.log('DELETE')
    fetch('http://localhost:3001/', {
      method: 'DELETE',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ id: e.target.id})
    })
  }

  useEffect(() => {
    getEvents();
  }, [])

  return (
    <div className="container">

      {events.filter(inputs => inputs.type === "event")
      .map(event =>
          <div class="event" id={event.availability}>
            <div class="event-preview" id={event.availability}>
              <h6><Moment format="DD MMMM">{event.startDate}</Moment></h6>
              <h3>{event.startTime}</h3>

      	  	</div>

            <div class="container d-flex event-info" id={event.availability}>
              <div className="col-5">
                <h5>{event.location}</h5>
                <h2>{event.eventTitle}</h2>
                  <span>{`${Object.keys(event.attendees)}`} </span> 
              </div>

              <div className="col-5">
              <form onSubmit={deleteEvent} id={event.id}><button className="btn btn-danger" type='submit'>Delete Event</button></form>
              </div>
            </div>
	        </div>
      )}


    </div>
  )
}

export default PersonalCal;