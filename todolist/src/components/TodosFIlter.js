import React from 'react';

function TodosFilter({ filterTodos, clearAllTodos }) {
  return (
    <div className="todos-filter">
      <div className="dropdown">
        <label tabIndex="0" className="btn m-1">Filter</label>
        <ul tabIndex="0" className="dropdown-content menu p-2 shadow bg-base-100 rounded-box w-52">
          <li onClick={() => filterTodos('all')}><a>All</a></li>
          <li onClick={() => filterTodos('pending')}><a>Pending</a></li>
          <li onClick={() => filterTodos('completed')}><a>Completed</a></li>
        </ul>
      </div>
      <button className="btn btn-secondary delete-all-btn" onClick={clearAllTodos}>
        Delete All
      </button>
    </div>
  );
}

export default TodosFilter;