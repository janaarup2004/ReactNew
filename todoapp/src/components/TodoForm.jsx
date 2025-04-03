import React, { useState } from "react";

const TodoForm = ({ addTask }) => {
  const [task, setTask] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!task.trim()) return;
    addTask(task);
    setTask("");
  };

  return (
    <form onSubmit={handleSubmit} className="mt-4 flex space-x-2">
      <input
        type="text"
        className="border p-2 rounded w-72"
        value={task}
        onChange={(e) => setTask(e.target.value)}
        placeholder="Add a new task"
      />
      <button className="bg-blue-500 text-white px-4 py-2 rounded">Add</button>
    </form>
  );
};

export default TodoForm;
