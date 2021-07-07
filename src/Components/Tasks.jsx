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
    <div className="container">
          {inputsRetrieved.filter(inputs => inputs.type === "task").map(taskInput =>
                     <div className="">
                     <div className="task">
                       <div className="container-fluid d-flex task-preview flex-wrap justify-content-between">

                {taskInput.eventTitle}
                <form onSubmit={deleteTask} id={taskInput.id}><button className="btn btn-warning" type='submit'><i className="fas fa-trash-alt"></i></button></form>
              </div>
              </div>

      	  	</div>
          )}

    </div>
  )
}

export default Tasks;