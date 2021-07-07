import { useState, useEffect } from 'react';

function InputForm() {

  return (
    <div>

      <div className="form-holder row">
        <h1>Enter an Event:</h1>
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

          <input type="button" value="Submit" className="btn btn-dark mt-3" />
        </form>
      </div>
    </div>
  )
}

export default InputForm;