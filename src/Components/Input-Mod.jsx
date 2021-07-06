import { useState, useEffect, useCallback } from 'react';
import { BrowserRouter as Router, Link } from 'react-router-dom'; //router needed is even though not used
import {modal} from 'bootstrap'




function InputModal() {
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
                <input className="form-control" type='text' placeholder='Event Title...' />

                <input className="form-control mt-3" ype='text' placeholder='Location...' />

                <div className="col-md-12 mt-3">
                    <input type="checkbox" name="user" id="anna" />
                    <label aria-pressed="true" for="anna">Anna</label>

                    <input type="checkbox" name="user" id="mello" />
                    <label for="mello">Mello</label>

                    <input type="checkbox" name="user" id="briana" />
                    <label aria-pressed="true" for="briana">Briana</label>

                    <input type="checkbox" name="user" id="felix" />
                    <label for="felix">Felix</label>
                </div>
              </form>
          </div>

          <div className="modal-footer">
            <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">Close</button>
            <button type="button" className="btn btn-primary">Submit</button>
        </div>
    </div>
  </div>
</div>






    </div>
  )
}

export default InputModal;