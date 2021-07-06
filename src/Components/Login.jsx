import { useState, useEffect } from 'react';

function Login() {

  return (
    <div>
      <div class="form-holder row">
        <h1>Hi, what's your name?</h1>
        <form>

          <input class="form-control" type='text' placeholder='Name...' />

          <input type="button" value="Submit" class="btn btn-dark mt-3" />
        </form>
      </div>
    </div>
  )
}

export default Login;