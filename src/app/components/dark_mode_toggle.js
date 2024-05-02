import styles from './toggle.module.scss';
import { useEffect, useState } from 'react';
import { DarkModeSwitch } from 'react-toggle-dark-mode';
import { useMediaQuery } from "react-responsive";

export function DarkModeToggle() {
  const [isDarkMode, setDarkMode] = useState(false);

  const toggleDarkMode = () => {
    setDarkMode(!isDarkMode);
  };

  useEffect(() => {
    if (isDarkMode) {
      document.body.classList.add('dark');
    } else {
      document.body.classList.remove('dark');
    }
  }, [isDarkMode]);

  const systemPrefersDark = useMediaQuery({
    query: '(prefers-color-scheme: dark)'
  },
    undefined,
    (isSystemDark) => toggleDarkMode(isSystemDark)
  );

  return (
    <DarkModeSwitch
      checked={!isDarkMode}
      onChange={toggleDarkMode}
      size={40}
      moonColor='#6C8EAD'
      sunColor='#6C8EAD'
    />
  );
}
