// TodoApp.jsx
import { useReducer } from 'react';
import TodoContext from './TodoContext';
import { reducer, initialState } from './reducer';
import TodoList from './TodoList';
import TodoForm from './TodoForm';


const TodoApp = () => {
  const [state, dispatch] = useReducer(reducer, initialState);

  return (
    <TodoContext.Provider value={{ state, dispatch }}>
    
      <div className="bg-white w-[500px] h-[500px] p-10 rounded-2xl shadow-2xl flex flex-col">
      <h2 className="text-center text-2xl font-extrabold text-gray-900 mb-8">
        My Todo List
      </h2>
      <TodoForm />
      <div className="flex-1 overflow-y-auto mt-4">
        <TodoList />
      </div>
    </div>
    </TodoContext.Provider>
  );
};

export default TodoApp;