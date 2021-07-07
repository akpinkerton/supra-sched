import { useState, useEffect } from 'react';

function Tasks() {
  const[inputsRetrieved, setInputsRetrieved] = useState([]);

  async function getInputs() {
    await fetch('http://localhost:3001/')
    .then(res => res.json())
    .then(res => setInputsRetrieved(res))
  }
console.log("Inputs: ", inputsRetrieved.type)
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
          {inputsRetrieved.filter(inputs => inputs.type === "Task").map(taskInput =>
              <div>
                {taskInput.eventTitle}
                <form onSubmit={deleteTask} id={taskInput.id}><button className="btn btn-secondary" type='submit'>Delete Task</button></form>
              </div>
          )}
    </div>
  )
}

export default Tasks;