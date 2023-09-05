import React, { useEffect, useState } from 'react';
import TodoInput from '../TodoInput/TodoInput';
import TodoList from '../TodoList/TodoList';
import styles from './Todo.module.css';

const Todo = ({ filter }) => {
  const [todos, setTodos] = useState(readTodos);

  const handleAdd = todo => setTodos([...todos, todo]);

  const handleUpdate = updated => setTodos(todos.map(t => (t.id === updated.id ? updated : t)));

  const handleDelete = deleted => setTodos(todos.filter(t => t.id !== deleted.id));

  useEffect(() => {
    localStorage.setItem('todos', JSON.stringify(todos));
  }, [todos]);

  const filtered = getFilteredItems(todos, filter);

  return (
    <section className={styles.container}>
      <ul className={styles.list}>
        {filtered.map(item => (
          <TodoList key={item.id} todo={item} onUpdate={handleUpdate} onDelete={handleDelete} />
        ))}
      </ul>
      <TodoInput onAdd={handleAdd} />
    </section>
  );
};

// const readTodos = () => {
//   const todos = localStorage.getItem('todos');
//   return todos ? JSON.parse(todos) : [];
// };

const readTodos = () => (localStorage.getItem('todos') ? JSON.parse(localStorage.getItem('todos')) : []);

const getFilteredItems = (todos, filter) => {
  if (filter === 'all') return todos;

  return todos.filter(todo => todo.status === filter);
};

export default Todo;
