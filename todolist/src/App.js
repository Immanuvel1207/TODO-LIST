import React, { useState, useEffect } from 'react';
import Header from './components/Header';
import TodosFilter from './components/TodosFIlter';
import TodoList from './components/TodoList';
import ThemeSwitcher from './components/ThemeSwitcher';

function App() {
  const [todos, setTodos] = useState(JSON.parse(localStorage.getItem('todos')) || []);
  const [filteredTodos, setFilteredTodos] = useState(todos);

  useEffect(() => {
    localStorage.setItem('todos', JSON.stringify(todos));
    setFilteredTodos(todos);
  }, [todos]);

  const addTodo = (task, dueDate) => {
    const newTodo = {
      id: getRandomId(),
      task: task.length > 14 ? task.slice(0, 14) + "..." : task,
      dueDate: dueDate,
      completed: false,
      status: "pending",
    };
    setTodos([...todos, newTodo]);
  };

  const deleteTodo = (id) => {
    setTodos(todos.filter(todo => todo.id !== id));
  };

  const editTodo = (id, newTask) => {
    setTodos(todos.map(todo => 
      todo.id === id ? { ...todo, task: newTask } : todo
    ));
  };

  const toggleStatus = (id) => {
    setTodos(todos.map(todo => 
      todo.id === id ? { ...todo, completed: !todo.completed } : todo
    ));
  };

  const clearAllTodos = () => {
    setTodos([]);
  };

  const filterTodos = (status) => {
    switch (status) {
      case "all":
        setFilteredTodos(todos);
        break;
      case "pending":
        setFilteredTodos(todos.filter(todo => !todo.completed));
        break;
      case "completed":
        setFilteredTodos(todos.filter(todo => todo.completed));
        break;
      default:
        setFilteredTodos(todos);
    }
  };

  return (
    <div className="container">
      <div style={{float:'left'}}><ThemeSwitcher /></div>
      <Header addTodo={addTodo} />
      <TodosFilter filterTodos={filterTodos} clearAllTodos={clearAllTodos} />
      <br/>
      <br/>
      <br/>
      <TodoList 
        todos={filteredTodos} 
        deleteTodo={deleteTodo} 
        editTodo={editTodo} 
        toggleStatus={toggleStatus} 
      />
    </div>
  );
}

function getRandomId() {
  return Math.random().toString(36).substring(2, 15) + 
         Math.random().toString(36).substring(2, 15);
}

export default App;