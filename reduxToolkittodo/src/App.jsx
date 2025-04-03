import AddTodo from './components/AddTodo';
import Todos from './components/Todos';

function App() {
  return (
    <div className="min-h-screen bg-gray-100 flex flex-col items-center p-6">
      <h1 className="text-3xl font-bold text-blue-600 mb-6">
        Todo App with Redux Toolkit
      </h1>
      <div className="bg-white p-6 rounded-lg shadow-md w-full max-w-md">
        <AddTodo />
        <Todos />
      </div>
    </div>
  );
}

export default App;
