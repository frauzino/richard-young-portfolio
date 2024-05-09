'use client'

import { DarkModeSwitch } from 'react-toggle-dark-mode';
import { useColorScheme } from '../functions/useColorScheme';
import styles from './dark_mode_toggle.module.scss';

export function DarkModeToggle() {
  const {isDarkMode, setIsDarkMode} = useColorScheme();

  const toggleDarkMode = () => {
    setIsDarkMode(!isDarkMode);
  };

  return (
    <div className={styles.toggleWrapper}>
      <DarkModeSwitch
        checked={!isDarkMode}
        onChange={toggleDarkMode}
        size={40}
        moonColor='#6C8EAD'
        sunColor='#6C8EAD'
      />
    </div>
  );
}
