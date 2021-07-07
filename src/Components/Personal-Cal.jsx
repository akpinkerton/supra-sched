import { useState, useEffect } from 'react';

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
        <div>
          <div>{event.eventTitle}</div>
          <div> {event.startDate} {event.startTime}</div>
          <div>{event.endDate} {event.endTime}</div>
          <form onSubmit={deleteEvent} id={event.id}><button className="btn btn-secondary" type='submit'>Delete Task</button></form>
          <br/>
        </div>
      )}
    </div>
  )
}

export default PersonalCal;