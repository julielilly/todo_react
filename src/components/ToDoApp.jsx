"use client";

import { useState } from "react";

import List from "./List";

const ToDoApp = () => {
  const [tasks, setTasks] = useState([]);

  // Function to add a new task
  const addTask = (event) => {
    event.preventDefault();
    const task = event.currentTarget.elements.text_input.value;

    const newTask = {
      id: crypto.randomUUID(),
      text: task,
      completed: false,
    };
    setTasks([newTask, ...tasks]); // Adding the new task to the beginning of the array and copying the existing tasks

    event.target.reset(); // Resetting the form input
  };

  // Function to delete a task
  const deleteTask = ({ id }) => {
    setTasks(tasks.filter((task) => task.id !== id)); // Filtering out the task to delete
  };

  // Function to toggle the completed status of a task
  const toggleComplete = ({ id }) => {
    // Toggling the completed status of the task
    setTasks((prev) =>
      prev.map((task) => {
        if (task.id === id) {
          return { ...task, completed: !task.completed };
        }
        return task;
      })
    );
  };

  return (
    <div className="min-h-screen bg-background-color flex flex-col items-center py-[10svh]">
      <h1 className="text-4xl font-semibold py-8">My ToDo List</h1>
      <div className="w-full max-w-md p-6 bg-white rounded-lg shadow-md">
        <form onSubmit={addTask} className="flex ">
          <label htmlFor="text_input" className="sr-only">
            Write new task:
          </label>
          <input id="text_input" type="text" placeholder="add your task" required className="p-2 border border-gray-300 rounded-l-lg focus:outline-none focus:border-primary-color flex-1" />

          <button type="submit" className="py-2 px-4 bg-primary-color text-white rounded-r-lg hover:bg-hover-color transition-colors -ml-px">
            Add Task
          </button>
        </form>
        <List tasks={tasks} deleteTask={deleteTask} toggleComplete={toggleComplete} />
      </div>
    </div>
  );
};

export default ToDoApp;
