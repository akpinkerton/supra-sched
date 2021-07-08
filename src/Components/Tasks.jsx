import { useState, useEffect } from 'react';

function Tasks() {
  const[inputsRetrieved, setInputsRetrieved] = useState([]);

  async function getInputs() {
    await fetch('http://localhost:3001/')
    .then(res => res.json())
    .then(res => setInputsRetrieved(res))
  }
  useEffect(() => {
    getInputs();
  }, [])

  function deleteTask(e) {
    console.log('DELETE')
    fetch('http://localhost:3001/', {
      method: 'DELETE',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ id: e.target.id})
    })
  }

  useEffect(() => {
    getInputs();
  }, [])

  return (

  <div class="container tasks">
		<h1 className="border-bottom">Your Tasks </h1>
      {inputsRetrieved.filter(inputs => inputs.type === "task").map(taskInput =>
        <form className="container-fluid justify-content-left p-0" onSubmit={deleteTask} id={taskInput.id}>
          <div className="col-md-12 d-flex justify-content-between my-2 ind-task" >
            <input className="col-2" type="checkbox" id={taskInput.id} name={taskInput.id}/>
            <label className="col-8" for={taskInput.id}>{taskInput.eventTitle}</label>
            <button className="col-2 btn" type='submit'><i style={{color: '#497081'}}className="fas fa-trash-alt"></i></button>
          </div>
        </form>
      )}
  </div>

  )
}

export default Tasks;