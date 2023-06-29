import React from 'react';

const Task = ({ task, handleComplete, handleDelete }) => {
  const { id, text, completed } = task;

  return (
    <div className={`task ${completed ? 'completed' : ''}`}>
      <span>{text}</span>
      <div>
        <button onClick={() => handleComplete(id)}>Complete</button>
        <button onClick={() => handleDelete(id)}>Delete</button>
      </div>
    </div>
  );
};

export default Task;
