import React, { useState } from 'react';
import AlertMessage from './AlertMessage';

function Header({ addTodo }) {
  const [task, setTask] = useState('');
  const [dueDate, setDueDate] = useState('');
  const [alertMessage, setAlertMessage] = useState({ message: '', type: '' });

  const handleSubmit = (e) => {
    e.preventDefault();
    if (task === "") {
      showAlertMessage("Please enter a task", "error");
    } else {
      addTodo(task, dueDate);
      setTask('');
      setDueDate('');
      showAlertMessage("Task added successfully", "success");
    }
  };

  const showAlertMessage = (message, type) => {
    setAlertMessage({ message, type });
    setTimeout(() => setAlertMessage({ message: '', type: '' }), 3000);
  };

  return (
    <header>
      <h1>Todo List</h1>

      <AlertMessage message={alertMessage.message} type={alertMessage.type} />
      <form onSubmit={handleSubmit} className="input-section">
    <div style={{display:'flex'}}>
        <input style={{marginRight:'10px'}}
          type="text"
          placeholder="Add a todo . . ."
          className="input input-bordered input-secondary w-full max-w-xs"
          value={task}
          onChange={(e) => setTask(e.target.value) 
          }
        />
        <input style={{marginRight:'10px'}}
          type="time"
          className="input input-bordered input-secondary w-full max-w-xs schedule-date"
          value={dueDate}
          onChange={(e) => setDueDate(e.target.value)}
          />
        < button type="submit" style={{display:'flex',flexDirection:'column'}} className="btn btn-secondary add-task-button">
          <i className="bx bx-plus bx-sm"></i>
        </button>
        </div>
      </form>
    </header>
  );
}

export default Header;