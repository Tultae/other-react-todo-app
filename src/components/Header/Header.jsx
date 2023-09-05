import React from 'react';
import { HiMoon, HiSun } from 'react-icons/hi';
import styles from './Header.module.css';
import { useDarkMode } from '../../context/DarkModeContext';

const Header = ({ filters, filter, onFilterChange }) => {
  const { darkMode, toggleDarkMode } = useDarkMode();

  return (
    <header className={styles.header}>
      <button onClick={toggleDarkMode} className={styles.toggle}>
        {!darkMode && <HiMoon />}
        {darkMode && <HiSun />}
      </button>

      <ul className={styles.filters}>
        {filters.map((value, idx) => (
          <li key={idx}>
            <button onClick={() => onFilterChange(value)} className={`${styles.filter} ${filter === value && styles.selected} `}>
              {value}
            </button>
          </li>
        ))}
      </ul>
    </header>
  );
};

export default Header;
