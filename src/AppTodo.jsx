import Todo from './components/Todo/Todo';
import Header from './components/Header/Header';
import { useState } from 'react';
import { DarkModeProvider } from './context/DarkModeContext';

const filters = ['all', 'active', 'completed'];

const AppTodo = () => {
  const [filter, setFilter] = useState(filters[0]);

  return (
    <DarkModeProvider>
      <Header filters={filters} filter={filter} onFilterChange={setFilter} />
      <Todo filter={filter} />
    </DarkModeProvider>
  );
};

export default AppTodo;
