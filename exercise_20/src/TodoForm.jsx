import { useState, useContext } from 'react';
import TodoContext from './TodoContext';


const TodoForm = () => {
  const [text, setText] = useState('');
  const { dispatch } = useContext(TodoContext);

  const handleAdd = () => {
    if (text.trim()) {
      const newTodo = {
        id: Date.now(),
        text,
        completed: false,
      };
      dispatch({ type: 'add', payload: newTodo });
      setText('');
    }
  };

  return (
    <div className="flex gap-3 mb-6">
      <input
        type="text"
      className="flex-1 px-4 py-3 rounded-lg border border-gray-200 bg-white outline-none focus:border-violet-500 transition-colors"
        value={text}
        onChange={(e) => setText(e.target.value)}
        placeholder="Enter a new todo"
      />
      <button className="bg-violet-600 hover:bg-violet-700 text-white px-6 py-3 rounded-lg font-bold transition-opacity" onClick={handleAdd}>Add</button>
    </div>
  );
};

export default TodoForm;
