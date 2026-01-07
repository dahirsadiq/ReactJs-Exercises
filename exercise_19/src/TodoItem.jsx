import { useContext } from 'react';
import TodoContext from './TodoContext';
import styles from './TodoItem.module.css';

const TodoItem = ({ todo }) => {
  const { dispatch } = useContext(TodoContext);

  return (
    <li className={styles.item}>
      {/* Checkbox to toggle completion */}
      <input
        type="checkbox"
        className={styles.checkbox}
        checked={todo.completed}
        onChange={() => dispatch({ type: 'toggle', payload: todo.id })}
      />
      
      {/* Text with conditional line-through class */}
      <span
        className={`${styles.text} ${todo.completed ? styles.completedText : ''}`}
        onClick={() => dispatch({ type: 'toggle', payload: todo.id })}
      >
        {todo.text}
      </span>

      {/* Delete button appears when item is completed */}
      {todo.completed && (
        <button
          className={styles.deleteBtn}
          onClick={() => dispatch({ type: 'delete', payload: todo.id })}
        >
          Delete
        </button>
      )}
    </li>
  );
};

export default TodoItem;