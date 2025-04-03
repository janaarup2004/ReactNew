import { useSelector, useDispatch } from "react-redux";
import { removeTodo } from "../features/todo/todoSlice";
import { Trash2 } from "lucide-react"; // Using Lucide for a modern icon

const Todos = () => {
    const todos = useSelector((state) => state.todo.todos);
    const dispatch = useDispatch();

    return (
        <div>
            <h2 className="text-xl font-semibold text-gray-700 mb-4">Todo List</h2>
            <ul className="space-y-2">
                {todos.map((todo) => (
                    <li key={todo.id} className="flex items-center justify-between bg-gray-200 p-3 rounded-md">
                        <span className="text-gray-800">{todo.text}</span>
                        <button 
                            onClick={() => dispatch(removeTodo(todo.id))}
                            className="text-red-500 hover:text-red-700"
                        >
                            <Trash2 size={18} />
                        </button>
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default Todos;
