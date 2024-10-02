import React, { useState } from 'react';

function TodoItem({ todo, deleteTodo, editTodo, toggleStatus }) {
  const [isEditing, setIsEditing] = useState(false);
  const [editedTask, setEditedTask] = useState(todo.task);

  const handleEdit = () => {
    editTodo(todo.id, editedTask);
    setIsEditing(false);
  };

  return (
    <tr className="todo-item" data-id={todo.id}>
      <td>
        {isEditing ? (
          <input 
            type="text" 
            value={editedTask} 
            onChange={(e) => setEditedTask(e.target.value)} 
            onBlur={handleEdit}
            autoFocus
          />
        ) : (
          todo.task
        )}
      </td>
      <td>{todo.dueDate || "No due date"}</td>
      <td>{todo.completed ? "Completed" : "Pending"}</td>
      <td>
        <button className="btn btn-warning btn-sm" onClick={() => setIsEditing(true)}>
          <i className="bx bx-edit-alt bx-bx-xs"></i>    
        </button>
        <button className="btn btn-success btn-sm" onClick={() => toggleStatus(todo.id)}>
          <i className="bx bx-check bx-xs"></i>
        </button>
        <button className="btn btn-error btn-sm" onClick={() => deleteTodo(todo.id)}>
          <i className="bx bx-trash bx-xs"></i>
        </button>
      </td>
    </tr>
  );
}

export default TodoItem;