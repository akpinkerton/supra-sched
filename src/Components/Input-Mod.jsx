import { useState, useEffect } from "react";
import { BrowserRouter as Router, Link } from "react-router-dom"; //router needed is even though not used
import TimeSelector from "./Time-Selector";
import { modal } from "bootstrap";

function InputModal() {
  const today = new Date();
  const month = today.getMonth() + 1;
  const day = today.getDate();
  const year = today.getFullYear();
  const newDate = `${year}-0${month}-0${day}`;
  console.log(`Today's reformatted date: ${newDate}`);
  const [type, setType] = useState("event");
  const [event, setEvent] = useState("");
  const [startDate, setStartDate] = useState(newDate);
  const [startTime, setStartTime] = useState("07:00");
  const [endDate, setEndDate] = useState("2021-07-16");
  const [endTime, setEndTime] = useState("08:00");
  const [duration, setDuration] = useState("Duration");
  const [location, setLocation] = useState("Office");
  const [availability, setAvailability] = useState("busy");
  const [attendees, setAttendees] = useState({});

  const [inputs, setInputs] = useState({});

  useEffect(() => {
    window.sessionStorage.setItem("storedDate", startDate);
    if (inputs !== undefined) {
      postInputs();
    }
  }, [inputs]);

  function handleType(e) {
    console.log("type", type);
    setType(e.target.id);
  }

  function handleEvent(e) {
    e.preventDefault();
    setEvent(e.target.value);
  }

  function handleStartDate(e) {
    e.preventDefault();
    let newDate = e.target.value;
    setStartDate(newDate);
    //await console.log(startDate)
    window.sessionStorage.setItem("storedDate", startDate);
  }

  function handleEndDate(e) {
    e.preventDefault();
    setEndDate(e.target.value);
  }

  async function handleDuration(e) {
    await setDuration(e.target.id);
    await setStringEndTime();
  }

  function setStringEndTime() {
    let stringEndTime;
    if (duration === "30 min") {
      stringEndTime = parseInt(window.sessionStorage.getItem("time")) + 30;
    } else if (duration === "1 hr") {
      stringEndTime = parseInt(window.sessionStorage.getItem("time")) + 60;
    } else if (duration === "1 hr 30 min") {
      stringEndTime = parseInt(window.sessionStorage.getItem("time")) + 90;
    } else if (duration === "2 hr") {
      stringEndTime = parseInt(window.sessionStorage.getItem("time")) + 120;
    }
    const convertedTime = convertTime(stringEndTime);
    setEndTime(convertedTime);
  }
  console.log("endTime:", endTime);

  function convertTime(timeToConvert) {
    console.log("Convert Time: ", timeToConvert);
    let results = timeToConvert / 60;
    console.log("results: ", results);
    let timeString = results.toString();
    if (results < 10) {
      if (timeToConvert % 60 === 30) {
        timeString = `0${timeString[0]}:30`;
      } else {
        timeString = `0${timeString[0]}:00`;
      }
    } else {
      if (timeToConvert % 60 === 30) {
        timeString = `${timeString[0]}${timeString[1]}:30`;
      } else {
        timeString = `${timeString[0]}${timeString[1]}:00`;
      }
    }
    return timeString;
  }

  function handleLocation(e) {
    e.preventDefault();
    setLocation(e.target.value);
  }

  function handleAvail(e) {
    e.preventDefault();
    setAvailability(e.target.id);
  }

  function handleSubmit(e) {
    setInputs({
      type: type,
      event: event,
      startDate: startDate,
      startTime: convertTime(parseInt(window.sessionStorage.getItem("time"))),
      endDate: endDate,
      endTime: endTime,
      location: location,
      availability: availability,
      attendees: attendees,
    });
    postInputs();
    if (duration === "1 hr") {
      ///FIXME: SHOULD THERE BE STUFF HERE???
    }
    console.log("Type: ", inputs.type);
    console.log("Avail: ", inputs.availability);
    console.log("Attendees: ", inputs.attendees);
    console.log("Start Date Entered: ", inputs.startDate);
    console.log(
      "Time from sessionStorage: ",
      window.sessionStorage.getItem("time")
    );
  }

  function postInputs() {
    fetch("http://localhost:3002/events/", {
      method: "POST",
      body: JSON.stringify(inputs),
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
    });
  }

  return (
    <div className="container m-4">
      <button
        type="button"
        className="btn btn-danger"
        data-bs-toggle="modal"
        data-bs-target="#eventInput"
      >
        <i className="fas fa-plus"></i> Add Event
      </button>

      <div
        className="modal"
        id="eventInput"
        aria-labelledby="eventInputLabel"
        aria-hidden="true"
      >
        <div className="modal-dialog">
          <div className="modal-content">
            <div className="modal-header">
              <h5>Enter Event</h5>
              <button
                type="button"
                className="btn-close"
                data-bs-dismiss="modal"
                aria-label="Close"
              ></button>
            </div>

            <div className="modal-body">
              <form onSubmit={handleSubmit}>
                <div
                  className="container btn-group btn-group-toggle mt-3 action-buttons"
                  data-toggle="buttons"
                >
                  <input
                    type="radio"
                    className="btn-check"
                    name="options"
                    id="event"
                    onClick={handleType}
                  />
                  <label className="btn btn-warning" for="event">
                    Event
                  </label>

                  <input
                    type="radio"
                    className="btn-check"
                    name="options"
                    id="task"
                    onClick={handleType}
                  />
                  <label className="btn btn-warning" for="task">
                    Task
                  </label>
                </div>

                <div className="container-fluid d-flex mt-3">
                  <p className="col-2">Event:</p>
                  <input
                    className="form-control action-event"
                    type="text"
                    placeholder="Event Title..."
                    onChange={handleEvent}
                    value={event}
                  />
                </div>

                <div className="container-fluid d-flex mt-3">
                  <p className="col-2">Start:</p>
                  <input
                    className="form-control action-start"
                    type="date"
                    onChange={handleStartDate}
                    value={startDate}
                  />
                </div>

                <TimeSelector />

                <div className="container-fluid d-flex mt-3">
                  <p className="col-2">End:</p>
                  <input
                    className="form-control action-end"
                    type="date"
                    onChange={handleEndDate}
                    value={endDate}
                  />
                  {/* <input className="form-control" type='time' onChange={handleEndTime} value={endTime} /> */}
                  <div className="dropdown">
                    <button
                      className="btn btn-warning dropdown-toggle"
                      type="button"
                      id="dropdownMenuButton"
                      data-toggle="dropdown"
                      aria-haspopup="true"
                      aria-expanded="false"
                    >
                      {duration}
                    </button>
                    <ol
                      className="dropdown-menu"
                      aria-labelledby="dropdownMenuButton"
                    >
                      <li
                        className="dropdown-item"
                        id="30 min"
                        value="30"
                        onClick={handleDuration}
                      >
                        30 min
                      </li>
                      <li
                        className="dropdown-item"
                        id="1 hr"
                        onClick={handleDuration}
                      >
                        1 hr
                      </li>
                      <li
                        className="dropdown-item"
                        id="1 hr 30 min"
                        onClick={handleDuration}
                      >
                        1 hr 30 min
                      </li>
                      <li
                        className="dropdown-item"
                        id="2 hr"
                        onClick={handleDuration}
                      >
                        2 hrs
                      </li>
                    </ol>
                  </div>
                </div>

                <div className="container-fluid d-flex mt-3">
                  <p className="col-2">Location:</p>
                  <input
                    className="form-control action-location"
                    type="text"
                    placeholder="Location..."
                    onChange={handleLocation}
                    value={location}
                  />
                </div>

                <div
                  className="container btn-group btn-group-toggle mt-3"
                  data-toggle="buttons"
                  onChange={handleAvail}
                >
                  <input
                    type="radio"
                    className="btn-check"
                    name="availability"
                    id="busy"
                  />
                  <label className="btn btn-warning" for="busy">
                    Busy
                  </label>

                  <input
                    type="radio"
                    className="btn-check"
                    name="availability"
                    id="free"
                  />
                  <label className="btn btn-warning" for="free">
                    Free
                  </label>
                </div>

                <div className="col-md-12 d-flex justify-content-around my-3">
                  <input
                    type="checkbox"
                    className="btn-check"
                    name="attendee"
                    onChange={() => {
                      setAttendees({ ...attendees, Anna: !attendees.Anna });
                    }}
                    id="Anna"
                  />
                  <label className="btn btn-danger" for="Anna">
                    Anna
                  </label>

                  <input
                    type="checkbox"
                    className="btn-check"
                    onChange={() => {
                      setAttendees({ ...attendees, Briana: !attendees.Briana });
                    }}
                    name="attendee"
                    id="Briana"
                  />
                  <label className="btn btn-danger" for="Briana">
                    Briana
                  </label>

                  <input
                    type="checkbox"
                    className="btn-check"
                    onChange={() => {
                      setAttendees({ ...attendees, Felix: !attendees.Felix });
                    }}
                    name="attendee"
                    id="Felix"
                  />
                  <label className="btn btn-danger" for="Felix">
                    Felix
                  </label>

                  <input
                    type="checkbox"
                    className="btn-check"
                    onChange={() => {
                      setAttendees({ ...attendees, Mello: !attendees.Mello });
                    }}
                    name="attendee"
                    id="Mello"
                  />
                  <label
                    className="btn btn-danger"
                    aria-pressed="true"
                    for="Mello"
                  >
                    Mello
                  </label>
                </div>

                <div className="modal-footer">
                  <button
                    type="button"
                    className="btn btn-dark"
                    data-bs-dismiss="modal"
                  >
                    Close
                  </button>
                  <button type="submit" className="btn btn-success">
                    Submit
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default InputModal;
