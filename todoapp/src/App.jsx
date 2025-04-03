import React, { useState, useEffect } from "react";
import TodoList from "./components/TodoList";
import TodoForm from "./components/TodoForm";

const App = () => {
  const [tasks, setTasks] = useState(() => {
    const savedTasks = localStorage.getItem("tasks");
    return savedTasks ? JSON.parse(savedTasks) : []; // Load from storage
  });

  const [darkMode, setDarkMode] = useState(() => {
    return localStorage.getItem("darkMode") === "true"; // Load preference
  });

  useEffect(() => {
    localStorage.setItem("tasks", JSON.stringify(tasks)); // Save tasks
  }, [tasks]);

  useEffect(() => {
    localStorage.setItem("darkMode", darkMode); // Save dark mode setting
    document.documentElement.classList.toggle("dark", darkMode);
  }, [darkMode]);

  const addTask = (taskText) => {
    const newTasks = [...tasks, { text: taskText, completed: false }];
    setTasks(newTasks);
  };

  const toggleTask = (index) => {
    const updatedTasks = tasks.map((t, i) =>
      i === index ? { ...t, completed: !t.completed } : t
    );
    setTasks(updatedTasks);
  };

  const deleteTask = (index) => {
    setTasks(tasks.filter((_, i) => i !== index));
  };

  const editTask = (index, newText) => {
    const updatedTasks = tasks.map((t, i) =>
      i === index ? { ...t, text: newText } : t
    );
    setTasks(updatedTasks);
  };

  return (
    <div className={`min-h-screen flex flex-col items-center p-5 transition-colors ${darkMode ? "bg-gray-900 text-white" : "bg-gray-100 text-black"}`}>
      <div className="flex justify-between w-full max-w-lg">
        <h1 className="text-3xl font-bold">✅ To-Do List</h1>
        <button 
          onClick={() => setDarkMode(!darkMode)} 
          className="bg-gray-800 text-white px-4 py-2 rounded transition"
        >
          {darkMode ? "☀ Light Mode" : "🌙 Dark Mode"}
        </button>
      </div>
      <TodoForm addTask={addTask} />
      <TodoList tasks={tasks} toggleTask={toggleTask} deleteTask={deleteTask} editTask={editTask} />
    </div>
  );
};

export default App;
