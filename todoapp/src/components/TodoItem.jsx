import React, { useState } from "react";

const TodoItem = ({ task, index, toggleTask, deleteTask, editTask }) => {
  const [isEditing, setIsEditing] = useState(false);
  const [newText, setNewText] = useState(task.text);

  const handleEdit = () => {
    if (isEditing && newText.trim()) {
      editTask(index, newText);
    }
    setIsEditing(!isEditing);
  };

  return (
    <li className={`p-3 flex justify-between items-center bg-white dark:bg-gray-700 shadow-md rounded my-2 
      ${task.completed ? "line-through text-gray-400 dark:text-gray-500" : "text-black dark:text-white"}
    `}>
      {isEditing ? (
        <input 
          type="text" 
          className="border p-1 bg-gray-200 text-black dark:bg-gray-600 dark:text-white" 
          value={newText} 
          onChange={(e) => setNewText(e.target.value)} 
        />
      ) : (
        <span onClick={() => toggleTask(index)} className="cursor-pointer">{task.text}</span>
      )}
      <div className="space-x-2">
        <button 
          className="bg-yellow-400 text-black px-2 py-1 rounded dark:bg-yellow-500 dark:text-black" 
          onClick={handleEdit}
        >
          {isEditing ? "✅" : " ✏️"}
        </button>
        <button 
          className="bg-red-500 text-white px-2 py-1 rounded dark:bg-red-600" 
          onClick={() => deleteTask(index)}
        >
          ❌
        </button>
      </div>
    </li>
  );
};

export default TodoItem;
