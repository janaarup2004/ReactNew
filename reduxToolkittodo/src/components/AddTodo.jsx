import { useState } from "react";
import { useDispatch } from "react-redux";
import { addTodo } from "../features/todo/todoSlice";

const AddTodo = () => {
    const [text, setText] = useState("");
    const dispatch = useDispatch();

    const handleAddTodo = () => {
        if (text.trim() === "") return;
        dispatch(addTodo(text));
        setText("");
    };

    return (
        <div className="mb-4 flex">
            <input
                type="text"
                value={text}
                onChange={(e) => setText(e.target.value)}
                placeholder="Enter a todo..."
                className="flex-grow border border-gray-300 p-2 rounded-l-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
            <button 
                onClick={handleAddTodo} 
                className="bg-blue-500 text-white px-4 py-2 rounded-r-md hover:bg-blue-600"
            >
                Add
            </button>
        </div>
    );
};

export default AddTodo;
