import React from 'react';
import Task from './Task';

const TaskList = ({ tasks, handleComplete, handleDelete }) => {
  return (
    <div className="task-list">
      {tasks.map((task) => (
        <Task
          key={task.id}
          task={task}
          handleComplete={handleComplete}
          handleDelete={handleDelete}
        />
      ))}
    </div>
  );
};

export default TaskList;
