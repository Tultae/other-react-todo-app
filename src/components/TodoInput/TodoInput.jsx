import React, { useState } from 'react';
import { v4 as uuidv4 } from 'uuid';
import styles from './TodoInput.module.css';

const TodoInput = ({ onAdd }) => {
  const [value, setValue] = useState('');

  const handleChange = e => setValue(e.target.value);

  const handleSubmit = e => {
    e.preventDefault();

    if (value.trim().length === 0) return;

    onAdd({ id: uuidv4(), text: value, status: 'active' });
    setValue('');
  };

  return (
    <form onSubmit={handleSubmit} className={styles.form}>
      <input value={value} name='input' type='text' placeholder='Add Todo' onChange={handleChange} className={styles.input} />
      <button className={styles.button}>Add</button>
    </form>
  );
};

export default TodoInput;
