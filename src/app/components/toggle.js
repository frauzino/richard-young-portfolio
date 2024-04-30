import styles from './toggle.module.css';
import { useState } from 'react';
import { DarkModeSwitch } from 'react-toggle-dark-mode';

export function Toggle() {
  const [darkMode, toggleDarkMode] = useState(false);

  return (
    <DarkModeSwitch
      checked={darkMode}
      onChange={toggleDarkMode(!darkMode)}
    />
  );
}
