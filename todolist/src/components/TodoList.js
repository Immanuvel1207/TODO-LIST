import React from 'react';
import TodoItem from './TodoItem';

function TodoList({ todos, deleteTodo, editTodo, toggleStatus }) {
  if (todos.length === 0) {
    return (
      <table className="table w-full">
        <thead>
          <tr>
            <th>Task</th>
            <th>Due Date</th>
            <th>Status</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          <tr><td colSpan="4" className="text-center">No task found</td></tr>
        </tbody>
      </table>
    );
  }

  return (
    <table className="table w-full">
      <thead>
        <tr>
          <th>Task</th>
          <th>Due Date</th>
          <th>Status</th>
          <th>Actions</th>
        </tr>
      </thead>
      <tbody>
        {todos.map(todo => (
          <TodoItem 
            key={todo.id} 
            todo={todo} 
            deleteTodo={deleteTodo} 
            editTodo={editTodo} 
            toggleStatus={toggleStatus} 
          />
        ))}
      </tbody>
    </table>
  );
}

export default TodoList;