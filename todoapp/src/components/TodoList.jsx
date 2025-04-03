import React from "react";
import TodoItem from "./TodoItem";

const TodoList = ({ tasks, toggleTask, deleteTask, editTask }) => {
  return (
    <ul className="mt-5 w-96">
      {tasks.map((task, index) => (
        <TodoItem key={index} index={index} task={task} toggleTask={toggleTask} deleteTask={deleteTask} editTask={editTask} />
      ))}
    </ul>
  );
};

export default TodoList;
