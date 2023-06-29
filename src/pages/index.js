import React, { useState } from 'react';
import TaskList from '../components/TaskList';

const Home = () => {
  const [taskInput, setTaskInput] = useState('');
  const [searchInput, setSearchInput] = useState('');
  const [tasks, setTasks] = useState([]);

  const handleTaskInput = (e) => {
    setTaskInput(e.target.value);
  };

  const handleSearchInput = (e) => {
    setSearchInput(e.target.value);
  };

  const handleTaskSubmit = (e) => {
    e.preventDefault();

    if (taskInput.trim() !== '') {
      const newTask = {
        id: Date.now(),
        text: taskInput,
        completed: false,
      };

      setTasks([...tasks, newTask]);
      setTaskInput('');
    }
  };

  const handleComplete = (taskId) => {
    const updatedTasks = tasks.map((task) => {
      if (task.id === taskId) {
        return {
          ...task,
          completed: !task.completed,
        };
      }
      return task;
    });

    setTasks(updatedTasks);
  };

  const handleDelete = (taskId) => {
    const updatedTasks = tasks.filter((task) => task.id !== taskId);
    setTasks(updatedTasks);
  };

  const filteredTasks = tasks.filter((task) =>
    task.text.toLowerCase().includes(searchInput.toLowerCase())
  );

  return (
    <div className="container">
      <h1>ToDo List</h1>
      <form onSubmit={handleTaskSubmit}>
        <input
          type="text"
          value={taskInput}
          onChange={handleTaskInput}
          placeholder="Enter a task..."
        />
        <input
          type="text"
          value={searchInput}
          onChange={handleSearchInput}
          placeholder="Search tasks..."
        />
        <button type="submit">Add Task</button>
      </form>
      <TaskList
        tasks={filteredTasks}
        handleComplete={handleComplete}
        handleDelete={handleDelete}
      />
    </div>
  );
};

export default Home;
