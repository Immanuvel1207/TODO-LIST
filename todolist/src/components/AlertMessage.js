import React from 'react';

function AlertMessage({ message, type }) {
  if (!message) return null;

  return (
    <div className={`alert alert-${type} shadow-lg mb-5 w-full`}>
      <div>
        <span>{message}</span>
      </div>
    </div>
  );
}

export default AlertMessage;