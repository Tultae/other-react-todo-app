import React from 'react';
import { FaTrashAlt } from 'react-icons/fa';
import styles from './TodoList.module.css';

const TodoList = ({ todo, onUpdate, onDelete }) => {
  const { text, status, id } = todo;

  const handleChange = e => onUpdate({ ...todo, status: e.target.checked ? 'completed' : 'active' });

  const handleDelete = () => onDelete(todo);

  return (
    <li className={styles.todo}>
      <input type='checkbox' id={id} checked={status === 'completed'} onChange={handleChange} className={styles.checkbox} />
      <label htmlFor={id} className={styles.text}>
        {text}
      </label>
      <span className={styles.icon}>
        <button onClick={handleDelete} className={styles.button}>
          <FaTrashAlt />
        </button>
      </span>
    </li>
  );
};

export default TodoList;
