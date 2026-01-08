import { useContext } from 'react';
import TodoContext from './TodoContext';


const TodoItem = ({ todo }) => {
  const { dispatch } = useContext(TodoContext);

  return (
    <li className="flex items-center bg-gray-50 p-4 rounded-xl mb-3">
      {/* Checkbox to toggle completion */}
      <input
        type="checkbox"
        className="w-5 h-5 mr-4 accent-blue-600 cursor-pointer"
        checked={todo.completed}
        onChange={() => dispatch({ type: 'toggle', payload: todo.id })}
      />
      
      {/* Text with conditional line-through class */}
      <span
       className={`flex-1 text-base ${
        todo.completed ? 'line-through text-gray-400' : 'text-gray-700'
      }`}
        onClick={() => dispatch({ type: 'toggle', payload: todo.id })}
      >
        {todo.text}
      </span>

      {/* Delete button appears when item is completed */}
      {todo.completed && (
        <button
          className="text-red-500 font-bold text-sm ml-2 hover:underline"
          onClick={() => dispatch({ type: 'delete', payload: todo.id })}
        >
          Delete
        </button>
      )}
    </li>
  );
};

export default TodoItem;