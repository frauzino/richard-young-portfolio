'use client'

import { DarkModeSwitch } from 'react-toggle-dark-mode';
import { useColorScheme } from '../functions/useColorScheme';

export function DarkModeToggle() {
  const {isDarkMode, setIsDarkMode} = useColorScheme();

  const toggleDarkMode = () => {
    setIsDarkMode(!isDarkMode);
  };

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
